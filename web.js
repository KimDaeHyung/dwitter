var express = require('express');
var app = express();
var path = require('path');

// set the view engine to ejs
//app.set('view engine', 'ejs');
//app.set('views',"examples/views");

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/script/jquery-3.3.1.min.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/script/jquery-3.3.1.min.js'));
});

app.get('/style/bootstrap.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/style/bootstrap.css'));
});


app.get('/script/common.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/script/common.js'));
});


app.get('/favicon.ico', function(req, res) {
    res.sendFile(path.join(__dirname + '/favicon.ico'));
});




app.listen(process.env.PORT);
