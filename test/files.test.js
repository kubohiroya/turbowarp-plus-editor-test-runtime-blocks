import assert from 'node:assert/strict';
import {test} from 'node:test';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {directory, scripts} from '../index.js';

test('every script and the media are in the directory', () => {
    for (const file of scripts) assert.ok(fs.statSync(path.join(directory, file)).size > 0, file);
    assert.ok(fs.readdirSync(path.join(directory, 'media')).some(file => file.endsWith('.svg')));
});

test('the build is the pinned revision', () => {
    const {source} = JSON.parse(fs.readFileSync(path.join(directory, 'source.json'), 'utf8'));
    assert.match(source, /^git\+https:\/\/github\.com\/TurboWarp\/scratch-blocks\.git#[0-9a-f]{40}$/);
});

test('the scripts parse as classic scripts', () => {
    for (const file of scripts) new vm.Script(fs.readFileSync(path.join(directory, file), 'utf8'), {filename: file});
});
