const http = require('http');
const url = Number(process.argv[2]);
const map = require('through2-map');

let server = http.createServer(function(req,res){
    if(req.method!=='POST'){
        return res.end('Please send me a POST!\n');
    }
    req.pipe(map(function(chunk){
        return chunk.toString().toUpperCase();
    })).pipe(res);
});

server.listen(url);