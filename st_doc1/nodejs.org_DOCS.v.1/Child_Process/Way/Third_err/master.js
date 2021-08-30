const cp = require('child_process');
const os = require('os');
const path = require('path');

// const cpuCount = os.cpus().length;
const cpuCount = 1;
const wos = [];

console.log('Master start :: ', process.pid);

for (let i = 0; i < cpuCount; i++) {
    const wo = cp.fork(path.join(__dirname, 'worker'));
    wos.push(wo);
}

const task = 88;
const result = [];

wos.forEach(wo => {

    wo.send(task);
    wo.on('exit', code => {
        console.log('Worker exited:', wo.pid, code);
    });
    wo.on('message', message => {

        console.log(`Response from wo ${wo.pid}`, message);// if e EMPTY (((
        if (!message['e']) {
            result.push(message.res);

            if (result.length === cpuCount) {
                console.log('result ::', result);

            }
        }
    });
    wo.on('error', e => console.log('on_err ::', e.message));
    wo.send('stop');

});


setTimeout(() => process.exit(1), 3000);