const fs = require('fs');
const path = require('path');

fs.watch(path.join(__dirname,'../', 'Stats','1.html'),(event, file) => {
    console.dir({ event, file });
})