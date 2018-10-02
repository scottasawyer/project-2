var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = process.env.PORT || 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

    var path = req.url;

    switch (path) {

         default:
            return renderHTML("/google3e6162d887ea83a2.html", res);
    }
};


function renderHTML(filePath, res) {
    return fs.readFile(__dirname + filePath, function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

// Starts our server.
server.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});