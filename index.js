var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Welcome to my website!<br/>");
    response.write("<a href='/.auth/login/microsoftaccount'>Log in with Microsoft Account</a>");
    response.end();

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
