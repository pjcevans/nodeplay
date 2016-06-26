var http = require("http");
outputLines = [];
count = 0;

var fetchData = function (url, i) {
  http.get(url, function (response) {
    response.setEncoding("utf8");
    output = "";
    response.on("data", function (data) {
      output += data;
    });
    response.on("end", function (data) {
      outputLines[i - 2] = output;
      count++;
      if (outputLines.length === 3 && count === 3) {
        // console.log(outputLines);
        writeOutput();
      };
    });
  });
};

var writeOutput = function () {
  // console.log(outputLines.length); // debug statement
  outputLines.forEach(function(line) {
    console.log(line);
  });
};

for(i=2;i<5;i++) {
  fetchData(process.argv[i], i);
};
