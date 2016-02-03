var express = require('express');
var passport = require('passport');
var GoogleStrategy = require('passport-google').Strategy;

passport.use(new GoogleStrategy({
	returnURL:'http://localhost:8000/return',
	realm:'http://localhost:8000'
},function() {
	console.log(identifier);
	console.log(profile);
	done();
}));

var app=express();

app.use(express.static('client'));

app.get('/return',function () {
	console.log('/ called');
});

app.get('/authorize', passport.authenticate('google'));

app.listen(8000,function () {
	console.log('server listening at port 8000');
});