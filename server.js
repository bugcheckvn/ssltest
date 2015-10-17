
var https = require('https');
var fs = require('fs');

var options = {
    //ca: fs.readFileSync('./ssl/sub.class1.server.ca.pem'),
    key: fs.readFileSync('./sslcrt/newssl.key'),
    cert: fs.readFileSync('./sslcrt/ssl.crt')
};

var server = https.createServer(options, function (request, response) {
    response.end('this content is sent from a ssl end point');
})

server.listen(443, function () {
    console.log('server listening on port 8443');
});

/*
var fs = require('fs'),
    https = require('https'),
    express = require('express'),
    app = express();

https.createServer({
    key: fs.readFileSync('.ssl/key.pem'),
    cert: fs.readFileSync('.ssl/cert.pem')
}, app).listen(55555);

app.get('/', function (req, res) {
    res.header('Content-type', 'text/html');
    return res.end('<h1>Hello, Secure World!</h1>');
});*/