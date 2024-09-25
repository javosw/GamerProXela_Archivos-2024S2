const {errorJson} = require('./utils');

const mw_CajaGetPrecio = async (req, res, next) => {
    const { model_CajaGetPrecio } = require('../model/caja.model');
    
    const barcode = req.query.barcode;
    const json = await model_CajaGetPrecio(barcode);

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


module.exports = {
    mw_CajaGetCliente,
    mw_CajaGetPrecio
}