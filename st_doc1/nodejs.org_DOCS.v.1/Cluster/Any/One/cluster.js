const cluster = require( 'NPM_/st_doc1/nodejs.org_DOCS/Cluster/Any/One/cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

console.log({numCPUs});
if (cluster.isMaster) {
    console.log('fork');
    // Fork workers.
    for (let i = 0; i < numCPUs ; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    http.createServer((req, res) => {
        console.log('Start serv');
        res.writeHead(200);
        res.end('hello world\n');
    }).listen(8000, () => console.log('Start serv'));
}