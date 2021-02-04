// requering the modules
var http = require('http');
var dt = require('./module')

//creates a server object
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});// the first argument of this method is the status code, 200 means that all is ok, the second argument is an object containing the response headers
    res.write("The date and time are currently: " + dt.myDateTime());//write a response to the client
    res.end();//end the response
}).listen(8080)//the server object listens on port 8080