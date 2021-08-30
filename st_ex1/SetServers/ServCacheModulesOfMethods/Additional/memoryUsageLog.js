'use strict';
const fs = require('fs');
const mod_path = require('path');

const bytesToMb = bytes => Math.round(bytes / 1000, 2) / 1000;

process.on('warning', warning => {
    console.dir(warning);
    process.exit(0);
});

module.exports = function memoryUsageLog(data) {
    const usage = process.memoryUsage();
    process.on('warning', warning => {
        console.dir(warning);
        process.exit(0);
    });
    const row = {

        rss: bytesToMb(usage.rss), // process resident set size
        heapTotal: bytesToMb(usage.heapTotal), // v8 heap allocated
        heapUsed: bytesToMb(usage.heapUsed), // v8 heap used
        external: bytesToMb(usage.external), // c++ allocated
        stack: bytesToMb(usage.rss - usage.heapTotal), // stack

        time: new Date(),
        data,
    };
    fs.writeFile(mod_path.join(__dirname, '../', 'Logs', 'logMemoryUse.txt'),
        JSON.stringify(row),
        err => {
            if (err) console.error(err);
        }
    )
    ;
};
