const fs = require('fs');
const path = require('path');
const spawn = require('child_process').spawn;
const out = fs.openSync(path.join(__dirname,'Log/out.log'), 'a');
const err = fs.openSync(path.join(__dirname,'Log/err.log'), 'a');

const child = spawn('ngro', [], {
    detached: true,
    stdio: ['ignore', out, err],
});