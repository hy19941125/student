var app = require('express');
var ejs = require('ejs');

app.use();
app.use('views','/views');
app.use('view engine','ejs');
app.get('/personalinfo',function(req,res){
	res.render('personalinfo');
});

app.get('/mentor',function(req,res){
	res.render('mentor');
});

app.get('/thesis',function(req,res){
	res.render('thesis');
});

app.get('/intership',function(req,res){
	res.render('intership');
});

app.get('/job',function(req,res){
	res.render('job');
});