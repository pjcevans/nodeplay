var fs = require('fs');

var buf = fs.readFile(process.argv[2], "utf8", function (err,data) {
  if(!err) {
    console.log(data.split("\n").length -1);
  }
});

