const fs = require('fs');
const path = require('path');

const load = path_from => {
    fs.readFile(path_from, 'utf-8', (e, d) => {
        if (e) throw e;
        const path_to = path.join(__dirname, 'Copy', file_name);
        // console.log(`Buf = ${d}`);
        // console.log(`Read from ${path_from}`);
        // console.log(`Write to ${path_to}`);
        write(path_to, d);
    })
};
const write = (path, buf) => {
    fs.writeFile(path, buf, e => {
        if (e) throw e;
        console.log(`Write to ${path} \n ${buf}`);
    })
};

const watch = filename => {
    const path_watch = path.join(__dirname, filename);
    console.log('\x1Bc'); // ESC sequence  but not here(((
    fs.watch(path_watch, (event, filename) => {
        if (event === 'change') {
            console.log({event, filename});
            load(path_watch)
        }
    })
};

const file_name = 'toCopy.txt';

try {
    watch(file_name);
} catch (e) {
    console.error(e.message);
} finally {
    watch(file_name);
}
