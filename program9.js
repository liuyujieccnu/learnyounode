const net = require('net');
const http = require('http');

function fillZero(timeNum){
    return (timeNum<10?'0':'')+timeNum;
}

function timeNow(){
    let date = new Date();
    return date.getFullYear()+'-'+fillZero(date.getMonth()+1)+'-'
    +fillZero(date.getDate())+' '+fillZero(date.getHours())+':'
    +fillZero(date.getMinutes());
}

let server = net.createServer(function(soc){
    soc.end(timeNow()+'\n');
});

server.listen(process.argv[2]);