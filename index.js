const http = require('http');

const hostname = '127.0.0.1';
const port = 9090;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Pick Me\n');
});

server.listen(port, hostname, () => {
    console.log('server running at http://${hostname}:${port}/');
});