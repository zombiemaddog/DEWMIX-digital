import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(root, '..');
const dist = join(projectRoot, 'dist');
const docs = join(projectRoot, 'docs');

async function copyStaticSite(outputDir) {
  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });
  await cp(join(projectRoot, 'index.html'), join(outputDir, 'index.html'));
  await cp(join(projectRoot, 'src'), join(outputDir, 'src'), { recursive: true });
  await cp(join(projectRoot, 'assets'), join(outputDir, 'assets'), { recursive: true });
}

await copyStaticSite(dist);
await copyStaticSite(docs);
await writeFile(join(docs, '.nojekyll'), '');

console.log('Built static site into dist/ and docs/');
