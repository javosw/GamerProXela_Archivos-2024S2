const session = require('express-session');
const { errorJson } = require('./utils');

const mw_session = session({
    secret: 'gpx',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // Set this to true if you are using HTTPS
        httpOnly: true, // Prevents client-side scripts from accessing the cookie
        sameSite: 'lax', // Ensures the cookie is sent with same-site requests
    }
});

const mw_auth = async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    const { model_AuthGetUser } = require('../model/auth.model');
    const json = await model_AuthGetUser(username, password);

    res.setHeader('Content-Type', 'application/json');
    if (json) {
        req.session.username = json.username;
        req.session.rol = json.rol;
        req.session.nombre = json.nombre;
        req.session.sucursal = json.sucursal;

        res.status(200).send(json);
    }
    else {
        //res.status(401).send({ http: 404, at: 'mw_auth', dev: 'josq' });
        res.status(401).send(errorJson(401, 'mw_auth'));
    }
}

const mw_checkAnyRol = (req, res, next) => {
    if (req.path == '/entrar') {
        return next();
    }

    if (req.session.rol) {
        return next();
        /*
        const rol = req.session.rol;

        if (rol == 'administracion' || rol == 'inventario' || rol == 'caja' || rol == 'bodega') {
            return next();
        } else {
            return res.status(403).send({ http: 403, at: 'mw_checkSession', dev: 'josq' });
        }
        
        */
    } else {
        return res.status(401).send(errorJson(401, 'mw_checkAnyRol'));
    }
}

const mw_checkAdminRol = (req, res, next) => {
    const at = 'mw_checkBodegaRol';

    if (req.session.rol) {
        const rol = req.session.rol;

        if (rol == 'administracion') {
            return next();
        }
        else {
            return res.status(403).send(errorJson(403, at));
        }
    } else {
        return res.status(401).send(errorJson(401, at));
    }
}
const mw_checkBodegaRol = (req, res, next) => {
    const at = 'mw_checkBodegaRol';
    if (req.session.rol) {
        const rol = req.session.rol;

        if (rol == 'bodega') {
            return next();
        }
        else {
            return res.status(403).send(errorJson(403, at));
        }
    } else {
        return res.status(401).send(errorJson(401, at));
    }
}
const mw_checkBodegaInventRol = (req, res, next) => {
    const at = 'mw_checkBodegaRol';
    if (req.session.rol) {
        const rol = req.session.rol;

        if (rol == 'bodega' || rol == 'inventario') {
            return next();
        }
        else {
            return res.status(403).send(errorJson(403, at));
        }
    } else {
        return res.status(401).send(errorJson(401, at));
    }
}
const mw_checkCajaRol = (req, res, next) => {
    const at = 'mw_checkCajaRol';
    if (req.session.rol) {
        const rol = req.session.rol;

        if (rol == 'caja') {
            return next();
        }
        else {
            return res.status(403).send(errorJson(403, at));
        }
    } else {
        return res.status(401).send(errorJson(401, at));
    }
}
const mw_checkInventRol = (req, res, next) => {
    const at = 'mw_checkInventRol';
    if (req.session.rol) {
        const rol = req.session.rol;

        if (rol == 'inventario') {
            return next();
        }
        else {
            return res.status(403).send(errorJson(403, at));
        }
    } else {
        return res.status(401).send(errorJson(401, at));
    }
}

// -- exports -- exports -- exports -- exports -- exports --
module.exports = {
    mw_auth,
    mw_session,
    mw_checkAnyRol,
    mw_checkAdminRol,
    mw_checkBodegaRol,
    mw_checkCajaRol,
    mw_checkInventRol,
    mw_checkBodegaInventRol
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