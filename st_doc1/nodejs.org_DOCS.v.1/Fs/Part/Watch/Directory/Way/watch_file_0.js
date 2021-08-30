'use strict';

const fs = require('fs');

const changes = [];
const changes_ = [];
fs.watch(__filename, (event, file) => {
    console.log(event);
    changes.push({
        date: new Date(),
        event,
        file,
    });

    while (changes_.length > 100) {
        changes_.unshift();
    }
    changes.forEach(item => {
        if (!/___/.test(item.file) && item.event === "change") changes_.push(item);
    });
    while (changes_.length > 10) {
        changes_.unshift();
    }
    console.log({changes_});
});
//



