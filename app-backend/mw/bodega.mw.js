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


const mw_BodegaAddProducto = async (req, res, next)=>{

    const barcode = req.body.barcode;
    const sucursal = req.session.sucursal;
    const nombre = req.body.nombre;
    const en_bodega = req.body.en_bodega;
    const precio = req.body.precio;

    const { model_BodegaAddProducto } = require('../model/bodega.model');
    const fueAgregado = await model_BodegaAddProducto(barcode,sucursal,nombre,en_bodega,precio);

    res.setHeader('Content-Type', 'application/json');
    if (fueAgregado) {
        res.status(200).send({added:true});
    }
    else {
        res.status(400).send(errorJson(500,'mw_AdminAddEmpleado'));
    }
}

module.exports = {
    mw_BodegaGetProductos,
    mw_BodegaAddProducto
}