const { CustomPool } = require('./psql');

const model_CajaGetPrecio = async (barcode) => {
    client = await CustomPool.connect();

    try {
        const text = 'SELECT * FROM inventario.productos WHERE id_producto=$1';
        const values = [barcode];
        const tabla = (await client.query(text, values)).rows;

        const fila = tabla[0];

        const json = {
            barcode: fila.id_producto,
            precio: fila.precio,
            nombre: fila.nombre,
        }
        return json;
    } catch (err) {
    } finally {
        client.release();
    }
}

const model_CajaGetCliente = async (nit) => {
    client = await CustomPool.connect();

    try {
        const text = 'SELECT * FROM caja.clientes WHERE nit=$1;';
        const values = [nit];
        const tabla = (await client.query(text, values)).rows;

        const fila = tabla[0];
        console.log(fila);
        const json = {
            nit: fila.nit,
            nombre: fila.nombre,
        }
        return json;
    } catch (err) {
    } finally {
        client.release();
    }
}

module.exports = {
    model_CajaGetPrecio,
    model_CajaGetCliente
}