var http = require("http");
var fs = require("fs");
var obj;

http.createServer(function(req, res) {

	res.writeHead(200, {"Content-Type": "text/plain"});
	res.write("\n-------\n\n");
	res.write("Tank report\n");
	fs.readFile("input.txt", function(err, data) {
		if (err) return console.error(err);
		obj = JSON.parse(data);
		for (i = 0; i < obj.length; i++) {
			var name = obj[i].name.toString()
			var health = obj[i].health.toString()
			var dodge = obj[i].dodge.toString()
			var parry = obj[i].parry.toString()
			var block = obj[i].block.toString()
			line = "Tank: " + name + ", Health: " + health + ", Dodge: " 
				+ dodge + ", Parry: " + parry + ", Block: " + block + "\n"
			res.write(line);
		};
		res.write("\n-------\n");
		res.end("\nResponse complete\n");

	});


}).listen(8081);

console.log("Server running at 127.0.0.1:8081");