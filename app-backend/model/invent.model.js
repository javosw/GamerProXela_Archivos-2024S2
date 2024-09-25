const { json } = require('express');
const { CustomPool } = require('./psql');

const model_InventGetProducto = async (barcode) => {
    client = await CustomPool.connect();

    try {
        const text = 'SELECT * FROM inventario.productos WHERE id_producto=$1';
        const values = [barcode];
        const tabla = (await client.query(text, values)).rows;

        const fila = tabla[0];
        console.log(fila);
        const json = {
            barcode: fila.id_producto,
            nombre: fila.nombre,
            pasillo: fila.id_pasillo,
            en_bodega: fila.unidades_bodega,
            en_pasillo: fila.unidades_pasillo,
        }
        return json;
    } catch (err) {
    } finally {
        client.release();
    }
}

module.exports = {
    model_InventGetProducto
}
/*
*/