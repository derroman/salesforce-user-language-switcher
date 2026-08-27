/**
 * @file pack.js
 * @description Packages the contents of the build directory into a ZIP archive
 *              ready for upload to the Chrome Web Store. The manifest ends up at
 *              the root of the archive, and development artefacts such as source
 *              maps and macOS metadata files are left out.
 * @author Roman Hentschke <roman@anthelion-impact.com>
 * @created 2026-08-27
 */

'use strict';

const { readFileSync, existsSync, mkdirSync } = require('fs');
const { resolve } = require('path');
const AdmZip = require('adm-zip');

const BUILD_DIR = 'build';
const OUTPUT_DIR = 'release';

/** Files that must never end up in a store package. */
const EXCLUDED_PATTERNS = [/(^|[\\/])\.DS_Store$/, /\.map$/];

function shouldBeIncluded(entryPath) {
  return !EXCLUDED_PATTERNS.some(pattern => pattern.test(entryPath));
}

function readJson(...pathSegments) {
  return JSON.parse(readFileSync(resolve(__dirname, ...pathSegments), 'utf8'));
}

try {
  if (!existsSync(resolve(__dirname, BUILD_DIR))) {
    throw new Error(`No "${BUILD_DIR}" directory found. Run "npm run build" first.`);
  }

  const { name } = readJson('package.json');
  const { version } = readJson(BUILD_DIR, 'manifest.json');
  const archiveName = `${name}-v${version}.zip`;

  const archive = new AdmZip();
  archive.addLocalFolder(resolve(__dirname, BUILD_DIR), '', shouldBeIncluded);

  if (!existsSync(resolve(__dirname, OUTPUT_DIR))) {
    mkdirSync(resolve(__dirname, OUTPUT_DIR));
  }
  archive.writeZip(resolve(__dirname, OUTPUT_DIR, archiveName));

  const entryCount = archive.getEntries().length;
  console.log(`Created ${OUTPUT_DIR}/${archiveName} with ${entryCount} entries.`);
  console.log('This file can be uploaded to the Chrome Web Store.');
} catch (error) {
  console.error(`Failed to create the package: ${error.message}`);
  process.exitCode = 1;
}
