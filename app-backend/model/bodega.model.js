const { CustomPool } = require('./psql');

const model_BodegaGetProductos = async () => {
    client = await CustomPool.connect();

    try {
        const text = 'SELECT * FROM inventario.productos';
        const tabla = (await client.query(text)).rows;

        json = [];
        tabla.forEach(fila => {
            json.push({
                barcode: fila.id_producto,
                nombre: fila.nombre,
                pasillo: fila.id_pasillo,
                en_bodega: fila.unidades_bodega,
                en_pasillo: fila.unidades_pasillo,
            });
        });

        return json;
    } catch (err) {
    } finally {
        client.release();
    }
}

module.exports = { model_BodegaGetProductos };
