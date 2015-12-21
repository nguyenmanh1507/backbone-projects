'use strict';

var express  = require('express'),
		path     = require('path'),
		Bourne   = require('bourne'),
		app      = express(),
		posts    = new Bourne('simpleBlogPosts.json'),
		comments = new Bourne('simpleBlogComments.json')
;

app.configure(function() {
	app.use(express.json());
	app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/*', function(req, res) {
	res.render('index.ejs');
});

app.listen(3000);