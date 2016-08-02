// JavaScript Document
var express = require('express');
var app = express();
var randomMusic = require("./lyric.js");

app.get('/', function(req,res) {
	res.send(randomMusic(0));
});

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Something");
});




