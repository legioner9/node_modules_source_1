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
    let stats = [];
    paths.forEach((path, i) => {
        const cb = inLstat.bind(null, paths, stats, path, i);
        fs.lstat(path, cb);
    });
}

function inLstat(paths, stats, path, i, err, stat) {
    if (err) {
        console.log(`File ${path} not found`);
    } else {
        stats[i] = stat;
        if (i === paths.length - 1) printResult(stats);
    }
}

const add = (a, b) => a + b;
const adding_3 = add.bind(null, 3);
const adding_5 = add.bind(null, 5);

debugger;
let a = adding_3(11);
let b = adding_5(-7);
