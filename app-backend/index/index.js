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

const {mw_session, mw_checkBodegaInventRol, mw_checkInventRol} = require('../mw/auth.mw');
app.use(mw_session);

const {mw_checkAnyRol} = require('../mw/auth.mw');
app.use(mw_checkAnyRol);

// ========================================================

const {mw_auth} = require('../mw/auth.mw');
app.post('/entrar', express.json(), mw_auth);

// ========================================================

const {mw_checkAdminRol} = require('../mw/auth.mw');
const {mw_AdminGetEmpleados, mw_AdminAddEmpleado} = require('../mw/admin.mw');

app.get('/empleados', mw_checkAdminRol,mw_AdminGetEmpleados);
app.post('/empleados/add', mw_checkAdminRol,express.json(),mw_AdminAddEmpleado);

// ========================================================

const {mw_checkBodegaRol} = require('../mw/auth.mw');
const {mw_BodegaGetProductos,mw_BodegaAddProducto} = require('../mw/bodega.mw');
const {mw_InventGetProducto, mw_InventAddPasillo} = require('../mw/invent.mw');

app.get('/producto',mw_checkInventRol,mw_InventGetProducto);
app.get('/productos',mw_checkBodegaInventRol,mw_BodegaGetProductos);
app.post('/productos/add',mw_checkBodegaRol,express.json(),mw_BodegaAddProducto);
app.post('/estanteria/add',mw_checkInventRol,express.json(),mw_InventAddPasillo);

// ========================================================



// ========================================================

app.listen(port, () => {
  console.log(`[express] http://localhost:${port}`);
})
