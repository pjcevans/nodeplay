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
