const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname,'read_write_file_sync.js'), 'utf-8');

console.dir(data);

const lines = data.split('\r\n').filter(line => !!line).join('\n');
fs.writeFileSync('./nodejs.org_DOCS/Fs/read_write_file_sync.txt', lines)
console.dir(lines);
debugger;