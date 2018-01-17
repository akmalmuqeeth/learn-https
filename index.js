const express = require('express')
const app = express()
const port = 3010

var https = require('https');
var fs = require('fs');
var path = require('path');
var certsPath = path.join(__dirname, 'certs', 'server');
// create a https server
var server = https.createServer({
    key: fs.readFileSync(path.join(certsPath, 'my-server-private.key.pem'))
    , cert: fs.readFileSync(path.join(certsPath, 'my-server.crt.pem'))
    , requestCert: false
    , rejectUnauthorized: true
});

// forward all requests to express app
server.on('request', app);


// any get request
app.get('/', (request, response) => {
    response.send('Hello from Express!')
})

server.listen(port, function () {
    console.log('Listening on http://127.0.0.1:' + port);
});