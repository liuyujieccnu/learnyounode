var fs =require('fs');
var path = require('path');
fs.readdir(process.argv[2],function(err,list){
    if(err) 
        throw err;
    let str = [];
    for(let item of list){
        if(path.extname(item)===('.'+process.argv[3])){
            str.push(item);
        }
    }
    for(let item of str){
        console.log(item);
    }
});