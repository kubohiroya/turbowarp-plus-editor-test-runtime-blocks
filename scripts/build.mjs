// Copies the Closure build of TurboWarp Scratch Blocks, unchanged, into dist/.
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import {scripts} from '../index.js';

const source = path.dirname(createRequire(import.meta.url).resolve('scratch-blocks/package.json'));
fs.rmSync('dist', {recursive: true, force: true});
for (const file of scripts) {
    fs.mkdirSync(path.dirname(path.join('dist', file)), {recursive: true});
    fs.copyFileSync(path.join(source, file), path.join('dist', file));
}
fs.cpSync(path.join(source, 'media'), 'dist/media', {recursive: true});
const {version} = JSON.parse(fs.readFileSync(path.join(source, 'package.json'), 'utf8'));
const pinned = JSON.parse(fs.readFileSync('package.json', 'utf8')).devDependencies['scratch-blocks'];
fs.writeFileSync('dist/source.json', `${JSON.stringify({package: 'scratch-blocks', version, source: pinned}, null, 2)}\n`);
