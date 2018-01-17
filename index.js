const express = require('express')
const app = express()
const port = 3010

var http = require('http');

// create a http server
var server = http.createServer();

// forward all requests to express app
server.on('request', app);


// any get request
app.get('/', (request, response) => {
    response.send('Hello from Express!')
})

server.listen(port, function () {
    console.log('Listening on http://127.0.0.1:' + port);
});