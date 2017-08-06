const http = require('http');
const bl = require('bl');
let url = [];
let count = 0;
for(let i=0;i<process.argv.length;i++){
    if(i>=2){
        url.push(process.argv[i]);
    }
}
let result = [];

for(let i=0;i<url.length;i++){
    http.get(url[i],function(res){
        res.pipe(bl(function(err,data){
            if(err){
                return console.error(err);
            }
            result[i]=data.toString();
            count++;
            if(count===url.length){
                for(let item of result)
                    console.log(item);
            }
        }));
    });
}