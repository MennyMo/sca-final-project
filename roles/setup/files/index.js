var http = require("http");
var server = http.createServer(function (req, res) {
res.writeHead(200);
res.end("SCA Final Project Display");
});
server.listen(8241);