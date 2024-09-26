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
const {mw_AdminGetEmpleados, mw_AdminAddEmpleado, mw_AdminMejoresVentas, mw_AdminMejoresClientes} = require('../mw/admin.mw');

app.get('/empleados', mw_checkAdminRol,mw_AdminGetEmpleados);
app.post('/empleados/add', mw_checkAdminRol,express.json(),mw_AdminAddEmpleado);
app.get('/ventas/mejores', mw_checkAdminRol,express.json(),mw_AdminMejoresVentas);
app.get('/clientes/mejores', mw_checkAdminRol,mw_AdminMejoresClientes);

// ========================================================

const {mw_checkBodegaRol} = require('../mw/auth.mw');
const {mw_BodegaGetProductos, mw_BodegaAddProducto} = require('../mw/bodega.mw');
const {mw_InventGetProducto, mw_InventAddPasillo} = require('../mw/invent.mw');

app.get('/producto',mw_checkInventRol,mw_InventGetProducto);
app.get('/productos',mw_checkBodegaInventRol,mw_BodegaGetProductos);
app.post('/productos/add',mw_checkBodegaRol,express.json(),mw_BodegaAddProducto);
app.post('/estanteria/add',mw_checkInventRol,express.json(),mw_InventAddPasillo);

// ========================================================

const {mw_checkCajaRol} = require('../mw/auth.mw');
const {mw_CajaGetCliente,mw_CajaGetPrecio,mw_CajaAddVenta} = require('../mw/caja.mw');
const {mw_CajaAddCliente,mw_CajaModCliente} = require('../mw/caja.mw');

app.get('/cliente',mw_checkCajaRol,mw_CajaGetCliente);
app.get('/productos/precio',mw_checkCajaRol,mw_CajaGetPrecio);
app.post('/ventas/add',mw_checkCajaRol,express.json(),mw_CajaAddVenta);
app.post('/cliente/add',mw_checkCajaRol,express.json(),mw_CajaAddCliente);
app.post('/cliente/mod',mw_checkCajaRol,express.json(),mw_CajaModCliente);

// ========================================================

app.listen(port, () => {
  console.log(`[express] http://localhost:${port}`);
})
