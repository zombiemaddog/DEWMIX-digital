import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(root, '..');
const outputs = ['dist', 'docs'];

async function buildOutput(directory) {
  const outputPath = join(projectRoot, directory);

  await rm(outputPath, { recursive: true, force: true });
  await mkdir(outputPath, { recursive: true });
  await cp(join(projectRoot, 'index.html'), join(outputPath, 'index.html'));
  await cp(join(projectRoot, 'src'), join(outputPath, 'src'), { recursive: true });
  await cp(join(projectRoot, 'assets'), join(outputPath, 'assets'), { recursive: true });
  await writeFile(join(outputPath, '.nojekyll'), '');
}

await Promise.all(outputs.map(buildOutput));

console.log('Built static site into dist/ and docs/');
