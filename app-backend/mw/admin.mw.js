const {errorJson} = require('./utils');

const mw_AdminGetEmpleados = async (req, res, next) => {
    const { model_AdminGetEmpleados } = require('../model/admin.model');
    const json = await model_AdminGetEmpleados();

    res.setHeader('Content-Type', 'application/json');
    if (json) {
        res.status(200).send(json);
    }
    else {
        res.status(500).send(errorJson(500,'mw_AdminGetEmpleados'));
    }
}

const mw_AdminAddEmpleado = async (req, res, next)=>{
    const dpi = req.body.dpi;
    const nombre = req.body.nombre;
    const sucursal = req.body.sucursal;
    const rol = req.body.rol;
    const username = req.body.username;
    const password = req.body.password;

    const { model_AdminAddEmpleado } = require('../model/admin.model');
    const fueAgregado = await model_AdminAddEmpleado(dpi,nombre,sucursal,rol,username,password);

    res.setHeader('Content-Type', 'application/json');
    if (fueAgregado) {
        res.status(200).send({added:true});
    }
    else {
        res.status(500).send(errorJson(500,'mw_AdminAddEmpleado'));
    }
}

const mw_AdminMejoresVentas= async (req, res, next) => {
    const fecha1 = req.query.fecha1;
    const fecha2 = req.query.fecha2;

    const { model_AdminMejoresVentas } = require('../model/admin.model');
    const json = await model_AdminMejoresVentas(fecha1,fecha2);

    res.setHeader('Content-Type', 'application/json');
    if (json) {
        res.status(200).send(json);
    }
    else {
        res.status(500).send(errorJson(500,'mw_AdminMejoresVentas'));
    }
}
const mw_AdminMejoresClientes = async (req, res, next) => {

    const { model_AdminMejoresClientes } = require('../model/admin.model');
    const json = await model_AdminMejoresClientes();

    res.setHeader('Content-Type', 'application/json');
    if (json) {
        res.status(200).send(json);
    }
    else {
        res.status(500).send(errorJson(500,'mw_AdminMejoresVentas'));
    }
}


module.exports = {
    mw_AdminGetEmpleados,
    mw_AdminAddEmpleado,
    mw_AdminMejoresVentas,
    mw_AdminMejoresClientes
};