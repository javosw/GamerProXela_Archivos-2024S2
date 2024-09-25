const {errorJson} = require('./utils');

const mw_BodegaGetProductos = async (req, res, next) => {
    const { model_BodegaGetProductos } = require('../model/bodega.model');
    const json = await model_BodegaGetProductos();

    res.setHeader('Content-Type', 'application/json');
    if (json) {
        res.status(200).send(json);
    }
    else {
        res.status(400).send(errorJson(500,'mw_AdminGetEmpleados'));
    }
}

module.exports = {
    mw_BodegaGetProductos
}