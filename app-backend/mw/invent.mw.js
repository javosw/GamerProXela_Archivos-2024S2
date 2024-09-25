const {errorJson} = require('./utils');

const mw_InventGetProducto = async (req, res, next) => {
    const { model_InventGetProducto } = require('../model/invent.model');
    
    const sucursal = req.session.sucursal;
    const barcode = req.query.barcode;
    const json = await model_InventGetProducto(sucursal,barcode);

    res.setHeader('Content-Type', 'application/json');
    if (json) {
        res.status(200).send(json);
    }
    else {
        http = 500;
        res.status(http).send(errorJson(http,'mw_AdminGetEmpleados'));
    }
}

/*
barcode: fila.id_producto,
pasillo: fila.id_pasillo,
en_pasillo: fila.unidades_pasillo,
*/
const mw_InventAddPasillo = async (req, res, next)=>{
    const barcode = req.body.barcode;
    const sucursal = req.session.sucursal;
    const pasillo = req.body.pasillo;
    const en_pasillo = req.body.en_pasillo;

    const { model_InventAddPasillo } = require('../model/invent.model');
    const fueAgregado = await model_InventAddPasillo(barcode,sucursal,pasillo,en_pasillo);

    res.setHeader('Content-Type', 'application/json');
    if (fueAgregado) {
        res.status(200).send({added:true});
    }
    else {
        http = 500;
        res.status(http).send(errorJson(http,'mw_InventAddPasillo'));
    }
}



module.exports = {
    mw_InventGetProducto,
    mw_InventAddPasillo
}
