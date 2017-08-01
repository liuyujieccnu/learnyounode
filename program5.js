var mymodule = require('./program5_module.js');

var dir = process.argv[2];
var fileter = process.argv[3];

mymodule(dir,fileter,function(err,list){
    if(err)
        return console.error('Error');
    for(let item of list){
        console.log(item);
    }
});
