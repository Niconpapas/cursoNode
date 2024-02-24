let http = require('node:http')

function serverStart() {
    console.log("http Start");

    let port = 9000;
    let hostname = '127.0.0.1';
    
    //Create server
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');

        console.log(req);

        res.end('Hello World');
    });

    //Levanta server
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}

exports.serverStart = serverStart;