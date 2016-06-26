var fs = require("fs");

var extension = process.argv[3];
var path = process.argv[2];

fs.readdir(path, function(err, list){

  for(i=0;i<list.length;i++) {
    if(list[i].split(".")[1] === extension) {
      console.log(list[i]);
    }  
  }

});


Their solution:

var fs = require('fs')  
var path = require('path')  

fs.readdir(process.argv[2], function (err, list) {  
list.forEach(function (file) {  
 if (path.extname(file) === '.' + process.argv[3])  
   console.log(file)  
})  
})  
