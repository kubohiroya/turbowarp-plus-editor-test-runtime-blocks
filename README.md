# TurboWarp Plus Editor Test Runtime Blocks

The build of [TurboWarp Scratch Blocks](https://github.com/TurboWarp/scratch-blocks) that the minimal editor runtime (`@kubohiroya/turbowarp-plus-editor-test-runtime`) loads. It is the same revision the TurboWarp Plus Editor pins, so a package's tests draw blocks exactly as the Editor does.

The files are copied unchanged from that revision. This package exists so that the runtime itself can stay MPL-2.0: the runtime serves these files to its test page but does not contain or import them.

## Contents

| Export | Meaning |
| --- | --- |
| `directory` | The directory with the scripts and `media/` |
| `scripts` | The scripts a page loads, in order, as classic scripts. Together they define the global `Blockly` |

`dist/source.json` names the revision.

## Source

These are the Closure Compiler build files committed in TurboWarp/scratch-blocks. The corresponding source is that repository at the revision in `package.json` (`devDependencies.scratch-blocks`) and `dist/source.json`. Its `build.py` produces these files.

## Development

`npm test` copies the files and checks that every script is present, comes from a pinned revision and parses.

To follow the Editor, change the revision in `package.json` to the one in the lockfile of the Editor's pinned scratch-gui, and raise the version.

Publishing happens in `.github/workflows/release.yml`, when a `v<version>` tag is pushed, through npm Trusted Publishing.

## License

GPL-3.0, the license of TurboWarp Scratch Blocks. See `LICENSE`.
