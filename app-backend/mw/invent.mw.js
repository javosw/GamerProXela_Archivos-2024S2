const {errorJson} = require('./utils');

const mw_InventGetProducto = async (req, res, next) => {
    const { model_InventGetProducto } = require('../model/invent.model');
    
    const barcode = req.query.barcode;
    const json = await model_InventGetProducto(barcode);

    res.setHeader('Content-Type', 'application/json');
    if (json) {
        res.status(200).send(json);
    }
    else {
        http = 500;
        res.status(http).send(errorJson(http,'mw_AdminGetEmpleados'));
    }
}

module.exports = {
    mw_InventGetProducto
}
/*
    barcode: string;
    nombre: string;
    pasillo: number;
    en_bodega: number;
    en_pasillo: number;
*/