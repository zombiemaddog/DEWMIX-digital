import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const pages = ['index.html', 'docs/index.html'];
const assetReferencePattern = /<(?:img|link)\b[^>]*(?:src|href)="(\.\/assets\/[^"]+)"[^>]*>/g;
const preloadPattern = /<link\b(?=[^>]*\brel="preload")[^>]*\bhref="(\.\/assets\/[^"]+)"[^>]*>/g;
const referencedAssets = new Map();

function addReference(page, reference) {
  const path = join(dirname(page), reference);
  const references = referencedAssets.get(path) ?? [];
  references.push(`${page} -> ${reference}`);
  referencedAssets.set(path, references);
}

for (const page of pages) {
  const html = readFileSync(page, 'utf8');

  for (const match of html.matchAll(assetReferencePattern)) {
    addReference(page, match[1]);
  }

  for (const match of html.matchAll(preloadPattern)) {
    addReference(page, match[1]);
  }
}

const missingAssets = [...referencedAssets.entries()].filter(([path]) => !existsSync(path));

if (missingAssets.length > 0) {
  console.error('Missing referenced assets:');
  for (const [path, references] of missingAssets) {
    console.error(`- ${path}`);
    for (const reference of references) {
      console.error(`  ${reference}`);
    }
  }
  process.exit(1);
}

console.log(`Verified ${referencedAssets.size} local asset reference(s).`);
