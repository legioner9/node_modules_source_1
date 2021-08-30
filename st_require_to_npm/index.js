
const Path = require('path')

const root_dir = __dirname.split(Path.sep);
root_dir.splice(root_dir.length - 1);
const node_dir = root_dir.join(Path.sep);

const _require = path => {
    const this_path = Path.join( node_dir + '_',path,'index.js')

   return  require(this_path);
}
debugger
exports._require = _require
