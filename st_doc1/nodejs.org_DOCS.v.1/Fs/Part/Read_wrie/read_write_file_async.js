const fs = require('fs');
const path = require('path');
const _ = require( '../../../../Callout');


fs.readFile(path.join(__dirname, 'read_write_file_async*.js'), 'utf-8', (e, d) => {
    if (e) {
        _.e_log_exit(e);
    }
    console.log('d :: ' + d);
    const lines = d.split('\r\n').filter(line => !!line).join('\n');
    fs.writeFile('./nodejs.org_DOCS/Fs/read_write_file_async.txt', lines, (e) => {
        _.e_log_exit(e);
        console.log(lines);
    })
});
