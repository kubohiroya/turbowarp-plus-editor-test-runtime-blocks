# TurboWarp Plus Editor Test Runtime Blocks

最小 editor runtime（`@kubohiroya/turbowarp-plus-editor-test-runtime`）が読み込む、[TurboWarp Scratch Blocks](https://github.com/TurboWarp/scratch-blocks) のビルドです。TurboWarp Plus Editor が固定しているのと同じリビジョンなので、パッケージの試験でも Editor と同じようにブロックを描きます。

ファイルは、そのリビジョンから手を加えずに写しています。このパッケージを分けたのは、runtime 自体を MPL-2.0 に保つためです。runtime はこれらのファイルを試験ページに配信しますが、含みも import もしません。

## 中身

| export | 意味 |
| --- | --- |
| `directory` | スクリプトと `media/` のあるディレクトリ |
| `scripts` | ページがこの順に classic script として読むスクリプト。合わせて大域の `Blockly` を定義する |

`dist/source.json` にリビジョンを記します。

## ソース

これらは、TurboWarp/scratch-blocks にコミットされている Closure Compiler のビルドです。対応するソースは、`package.json`（`devDependencies.scratch-blocks`）と `dist/source.json` のリビジョンの同リポジトリです。そこの `build.py` がこれらのファイルを作ります。

## 開発

`npm test` でファイルを写し、すべてのスクリプトがあること、固定したリビジョンから来ていること、構文として読めることを確かめます。

`npm run typecheck` は `tsc` を出力なしで実行し、`checkJs` で JavaScript を検査するとともに、`index.js` が `index.d.ts` と食い違っていないことを確かめます。

Editor に追従するときは、Editor が固定する scratch-gui の lockfile にあるリビジョンに `package.json` を合わせ、版を上げます。

npm への公開は `.github/workflows/release.yml` が行います。`v<版>` のタグを push したときに、npm の Trusted Publisher で公開します。

## ライセンス

GPL-3.0-only。TurboWarp Scratch Blocks のライセンスです（上流は「or later」なしの `GPL-3.0` と表記しています）。`LICENSE` を見てください。
