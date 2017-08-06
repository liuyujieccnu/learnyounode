const http = require('http');
const fs = require('fs');
const url = process.argv[2];
const dir = process.argv[3];

let server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    fs.createReadStream(dir).pipe(res);
});

server.listen(url);