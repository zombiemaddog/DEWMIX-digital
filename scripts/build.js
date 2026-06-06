import { cp, mkdir, mkdtemp, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(root, '..');
const dist = join(projectRoot, 'dist');
const docs = join(projectRoot, 'docs');

async function collectReferencedAssetNames() {
  const files = [join(projectRoot, 'index.html'), join(projectRoot, 'src', 'styles.css')];
  const names = new Set();
  const assetPattern = /(?:\.\.\/|\.\/)assets\/([^"')\s]+)/g;

  for (const file of files) {
    const content = await readFile(file, 'utf8');

    for (const match of content.matchAll(assetPattern)) {
      names.add(match[1]);
    }
  }

  return names;
}

async function copyAssets(sourceDir, targetDir, { names } = {}) {
  await mkdir(targetDir, { recursive: true });

  for (const entry of await readdir(sourceDir, { withFileTypes: true })) {
    if (!entry.isFile()) continue;
    if (names && !names.has(entry.name)) continue;

    await cp(join(sourceDir, entry.name), join(targetDir, entry.name));
  }
}

async function copyStaticSite(outputDir, { preserveAssets = false } = {}) {
  let preservedAssets;
  let docsAssetNames;

  if (preserveAssets) {
    const existingAssets = join(outputDir, 'assets');

    if (existsSync(existingAssets)) {
      preservedAssets = join(await mkdtemp(join(tmpdir(), 'dewmix-docs-assets-')), 'assets');
      await cp(existingAssets, preservedAssets, { recursive: true });
      docsAssetNames = new Set((await readdir(preservedAssets, { withFileTypes: true })).filter((entry) => entry.isFile()).map((entry) => entry.name));
    }
  }

  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });
  await cp(join(projectRoot, 'index.html'), join(outputDir, 'index.html'));
  await cp(join(projectRoot, 'src'), join(outputDir, 'src'), { recursive: true });

  if (preserveAssets) {
    if (preservedAssets) {
      await cp(preservedAssets, join(outputDir, 'assets'), { recursive: true });
      await rm(dirname(preservedAssets), { recursive: true, force: true });
    }

    const requiredNames = await collectReferencedAssetNames();
    const assetNames = new Set([...(docsAssetNames ?? []), ...requiredNames]);
    await copyAssets(join(projectRoot, 'assets'), join(outputDir, 'assets'), { names: assetNames });
    return;
  }

  await cp(join(projectRoot, 'assets'), join(outputDir, 'assets'), { recursive: true });
}

await copyStaticSite(dist);
await copyStaticSite(docs, { preserveAssets: true });
await writeFile(join(docs, '.nojekyll'), '');

console.log('Built static site into dist/ and docs/');
