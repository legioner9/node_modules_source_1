'use strict';

const fs = require('fs');

let changes = [];

const display = files => {
    let changes_ = [];

    changes.forEach(item => {
        if (!(/___jb_tmp___$/.test(item.file))) {
            console.log(item.file)
            changes_.push(item);
        }
    });
    console.log(changes_);
    while (changes_.length > 10) {
        changes.shift();
    }
    // console.log('Changes:');
    // for (const item of changes_) {
    //     console.log(item.date.toISOString(), item.event, ':', item.file);
    // }
    // console.log('\nFiles:');
    // for (const file of files) {
    //     console.log(file);
    // }
};

const ls = path => {
    fs.readdir(path, (err, files) => {
        if (err) return;
        display(files);
    });
};

const watch = path => {
    fs.watch(path, (event, file) => {

        changes.push({date: new Date(), event, file});
        ls(path);

    });
};

const path = __dirname;
ls(path);
watch(path);
//