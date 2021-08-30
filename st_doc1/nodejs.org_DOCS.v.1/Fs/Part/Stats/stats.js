const fs = require('fs');
const path_ = require('path');
const _ = require( '../../../../Callout');

fs.readdir(__dirname, (e, paths) => {
    if (e) {
        return console.log(e.message);
    } else {
        let paths_norm = paths
            .map(path => {
                if ((/.html$/).test(path)) {
                    return path_.join(__dirname, path)
                }
            })
            .filter(path => path);
        path_stat(paths_norm);
    }
});

const printResult = d => {
    console.dir({d});
    debugger;
};


function path_stat(paths) {
    console.log({paths});
    let stats = [];
    paths.forEach((path, i) => {
        console.dir({file: path, i});
        fs.lstat(path, (err, stat) => {
            if (err) {
                console.log(`File ${path} not found`);
            } else {
                console.log({stats, 'paths.length': paths.length, i});
                stats[i] = stat;
                if (i === paths.length - 1) printResult(stats);
            }
        });
    });
}