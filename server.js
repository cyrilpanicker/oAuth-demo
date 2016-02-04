var express = require('express');
var passport = require('passport');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

var app=express();
app.use(cookieParser());
app.use(session({secret:'secret'}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
	clientID:'692844994326-52k0tq5jcs8baohdcot0r7gsk4fle0bc.apps.googleusercontent.com',
	clientSecret:'vm3xQP7u-RUrhhRx_SGEUS-a',
	callbackURL:'http://localhost:8000/oauthcallback'
},function(accessToken, refreshToken, profile, callback) {
	callback(null,profile);
}));

passport.serializeUser(function (user,done) {
	done(null,user)
});

passport.deserializeUser(function (user,done) {
	done(null,user);
});

app.use(express.static('client'));

app.get('/authorize', passport.authenticate('google',{scope:['profile']}));

app.get('/oauthcallback',
	passport.authenticate('google',{failureRedirect:'/#login',scope:['profile']}),
	function (request,response) {
		response.redirect('/#custom');
	}
);

app.listen(8000,function () {
	console.log('server listening at port 8000');
});