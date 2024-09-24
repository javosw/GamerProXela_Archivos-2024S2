const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
// const username = req.body.username;
// const password = req.body.password;

app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true 
}));

const {mw_session} = require('../mw/auth.mw');
app.use(mw_session);

const {mw_checkAnyRol} = require('../mw/auth.mw');
app.use(mw_checkAnyRol);

const {mw_auth} = require('../mw/auth.mw');
app.post('/entrar', express.json(), mw_auth);

const {mw_checkAdminRol} = require('../mw/auth.mw');
const {mw_AdminGetEmpleados} = require('../mw/admin.mw');
app.get('/empleados', mw_checkAdminRol,mw_AdminGetEmpleados);

app.listen(port, () => {
  console.log(`[express] http://localhost:${port}`);
})
