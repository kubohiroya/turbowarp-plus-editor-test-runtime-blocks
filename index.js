import {fileURLToPath} from 'node:url';

/** The directory holding the Scratch Blocks scripts and `media/`. */
export const directory = fileURLToPath(new URL('./dist/', import.meta.url));
/** The scripts a page loads, in this order, as classic scripts. Together they define the global `Blockly`. */
export const scripts = ['blockly_compressed_vertical.js', 'blocks_compressed.js', 'blocks_compressed_vertical.js',
    'msg/messages.js', 'msg/scratch_msgs.js'];
