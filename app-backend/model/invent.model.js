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

const model_InventAddPasillo = async (barcode,sucursal,pasillo,en_pasillo) => {
    client = await CustomPool.connect();

    try {
        const text = 'SELECT inventario.add_pasillo($1, $2, $3, $4)';
        const values = [barcode,sucursal,pasillo,en_pasillo];
        await client.query(text, values);

        return true;
    } catch (err) {
    } finally {
        client.release();
    }
    return false;
}


module.exports = {
    model_InventGetProducto,
    model_InventAddPasillo
}

