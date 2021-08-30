const cp = require('child_process');
const path = require('path');

const wo = cp.fork(path.join(__dirname, 'worker'));

wo.send(99);
wo.on('exit', code => {
    console.log('Worker exited:', wo.pid, code);
});
wo.on('message', message => {
    console.log(`Response from ${wo.pid} :: ${message}`);
    process.exit(0);
});




setTimeout(() => process.exit(1), 3000);