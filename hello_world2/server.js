var http = require("http");
var fs = require("fs");
var obj;

http.createServer(function(req, res) {

	res.writeHead(200, {"Content-Type": "text/plain"});
	fs.readFile("input.txt", function(err, data) {
		if (err) return console.error(err);
		//obj = JSON.parse(data);
		res.write(data.toString());
		res.end();

	});


}).listen(8081);

console.log("Server running at 127.0.0.1:8081");