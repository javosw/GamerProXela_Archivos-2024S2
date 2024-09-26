const {errorJson} = require('./utils');

const mw_CajaGetPrecio = async (req, res, next) => {
    const { model_CajaGetPrecio, model_CajaAddCliente } = require('../model/caja.model');
    
    const sucursal = req.session.sucursal;
    const barcode = req.query.barcode;
    const json = await model_CajaGetPrecio(sucursal,barcode);

    res.setHeader('Content-Type', 'application/json');
    if (json) {
        res.status(200).send(json);
    }
    else {
        http = 500;
        res.status(http).send(errorJson(http,'mw_CajaGetPrecio'));
    }
}

const mw_CajaGetCliente = async (req, res, next) => {
    const { model_CajaGetCliente } = require('../model/caja.model');
    
    const nit = req.query.nit;
    const json = await model_CajaGetCliente(nit);

    res.setHeader('Content-Type', 'application/json');
    if (json) {
        res.status(200).send(json);
    }
    else {
        http = 500;
        res.status(http).send(errorJson(http,'mw_CajaGetCliente'));
    }
}

const mw_CajaAddVenta = async (req, res, next)=>{
    const username = req.session.username;
    const nit = req.body.nit;
    const total = req.body.total;
    const fecha = req.body.fecha;
    const productos = req.body.productos;

    console.log("--------- VENTA SOLICITADA ---------");
    console.log(req.body);

    const { model_CajaAddVenta } = require('../model/caja.model');
    const fueAgregado = await model_CajaAddVenta(username,nit,total,fecha,productos);

    res.setHeader('Content-Type', 'application/json');
    if (fueAgregado) {
        res.status(200).send({added:true});
    }
    else {
        res.status(400).send(errorJson(500,'mw_AdminAddEmpleado'));
    }
}


const mw_CajaAddCliente = async (req, res, next)=>{
    const nit = req.body.nit;
    const nombre = req.body.nombre;

    const { model_CajaAddCliente } = require('../model/caja.model');
    const fueAgregado = await model_CajaAddCliente(nit, nombre);

    res.setHeader('Content-Type', 'application/json');
    if (fueAgregado) {
        res.status(200).send({added:true});
    }
    else {
        res.status(400).send(errorJson(500,'mw_AdminAddEmpleado'));
    }
}

const mw_CajaModCliente = async (req, res, next)=>{
    const nit = req.body.nit;
    const nombre = req.body.nombre;
    const username = req.body.username;
    const password = req.body.password;

    const { model_CajaModCliente } = require('../model/caja.model');
    const fueAgregado = await model_CajaModCliente(nit, nombre, username, password);

    res.setHeader('Content-Type', 'application/json');
    if (fueAgregado) {
        res.status(200).send({added:true});
    }
    else {
        res.status(400).send(errorJson(500,'mw_AdminAddEmpleado'));
    }
}

module.exports = {
    mw_CajaGetCliente,
    mw_CajaGetPrecio,
    mw_CajaAddVenta,
    mw_CajaAddCliente,
    mw_CajaModCliente
}