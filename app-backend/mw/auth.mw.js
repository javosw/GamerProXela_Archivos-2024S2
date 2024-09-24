const session = require('express-session');

const mw_session = session({
    secret: 'gpx',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 13*60*1000 //min*seg*mseg
    }
});

const mw_auth = async (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    const username = req.body.username;
    const password = req.body.password;
    const {model_AuthGetUser} = require('../model/auth.model');
    const json = await model_AuthGetUser(username,password);

    res.send(`${JSON.stringify(json)}`);
}

// -- exports -- exports -- exports -- exports -- exports --
module.exports = {
    mw_auth,
    mw_session
};


/*
req.session.user = { username: 'john_doe' };

if (req.session.user) {
  res.send(`Welcome, ${req.session.user.username}`);
}


const express = require('express');
const session = require('express-session');
const app = express();

// Configure session middleware
app.use(session({
  secret: 'your-secret-key',  // Used to sign the session ID cookie (make this unique)
  resave: false,              // Prevents session from being saved back to the session store if it wasn't modified
  saveUninitialized: true,    // Forces uninitialized sessions to be saved
  cookie: { secure: false }   // Set to true if using HTTPS (ensures the session ID is only sent over HTTPS)
}));

// Route to set a session variable
app.get('/login', (req, res) => {
  req.session.user = { username: 'john_doe' }; // Save session data
  res.send('User logged in');
});

// Route to get session data
app.get('/profile', (req, res) => {
  if (req.session.user) {
    res.send(`Welcome, ${req.session.user.username}`);
  } else {
    res.send('Please log in first');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});



*/