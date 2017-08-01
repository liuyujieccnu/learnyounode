var fs = require('fs');

let str = fs.readFileSync(process.argv[2]).toString();

let strArr = str.split('\n');

console.log(strArr.length-1);
