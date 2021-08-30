const express = require('express');
const app = express();

app.get('/', (rq, rs) => {
    rs.send('Zdarova)))');
});
app.listen(3003, () => {
    console.log('Express at localhost:3003');
    console.time('1');
});


