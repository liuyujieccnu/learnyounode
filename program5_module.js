var fs =require('fs');
var path = require('path');

module.exports = function findMenu(menuname,fileter,callback){
    fs.readdir(menuname,function(err,list){
        if(err)
            return callback(err);
        list = list.filter(function(file){
            return path.extname(file)==='.'+fileter;
        });
        callback(null,list);
    });
}