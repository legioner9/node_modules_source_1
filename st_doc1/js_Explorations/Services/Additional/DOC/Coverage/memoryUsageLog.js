'use strict';
const fs = require('fs');
const mod_path = require('path');

module.exports = function memoryUsageLog(data) {
    const usage = process.memoryUsage();
    const row = {
        rss: bytesToMb(usage.rss),
        heapTotal: bytesToMb(usage.heapTotal),
        heapUsed: bytesToMb(usage.heapUsed),
        external: bytesToMb(usage.external),
        stack: bytesToMb(usage.rss - usage.heapTotal),
        time: new Date(),
        data,
    };
    fs.writeFile(mod_path.join(__dirname, 'logMemoryUse.txt'),
        JSON.stringify(row),
        err => console.error(err)
    );
};