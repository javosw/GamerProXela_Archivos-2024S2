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

const model_BodegaAddProducto = async (barcode,sucursal,nombre,precio,en_bodega) => {
    client = await CustomPool.connect();

    try {
        const text = 'SELECT inventario.add_producto($1, $2, $3, $4, $5)';
        const values = [barcode,sucursal,nombre,precio,en_bodega];
        await client.query(text, values);

        return true;
    } catch (err) {
    } finally {
        client.release();
    }
    return false;
}



module.exports = { 
    model_BodegaGetProductos, 
    model_BodegaAddProducto 
};
