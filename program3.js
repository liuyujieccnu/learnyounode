var fs = require('fs');
fs.readFile(process.argv[2],function(err,data){
    if(err)
        throw err;
    let str = data.toString();
    let strArr = str.split('\n');
    console.log(strArr.length-1);
});
