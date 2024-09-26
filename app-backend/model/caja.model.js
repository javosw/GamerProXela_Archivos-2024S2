const { CustomPool } = require('./psql');

const model_CajaGetPrecio = async (sucursal, barcode) => {
    client = await CustomPool.connect();

    try {
        const text = 'SELECT * FROM inventario.productos WHERE id_sucursal=$1 AND id_producto=$2';
        const values = [sucursal, barcode];
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

const model_CajaAddVenta = async (username, nit, total, fecha, productos) => {
    client = await CustomPool.connect();

    fueExitoso = false;
    try {
        await client.query('BEGIN');
    
        const add_venta = 'INSERT INTO caja.ventas (username, nit, total, total_descuento, fecha) VALUES ($1, $2, $3, 0, $4) RETURNING id_factura';
        const id_factura = (await client.query(add_venta, [username, nit, total, fecha])).rows[0].id_factura;

        for (const producto of productos) {
            const add_producto_vendido = 'INSERT INTO caja.productos_facturados (id_factura, id_producto, unidades, subtotal) VALUES ($1, $2, $3, $4)';
            await client.query(add_producto_vendido, [id_factura, producto.barcode, producto.unidades, producto.subtotal]);

            const mod_inventario = 'UPDATE inventario.productos SET unidades_pasillo = unidades_pasillo - $1, unidades_vendidas = unidades_vendidas + $1 WHERE id_producto = $2';
            await client.query(mod_inventario, [producto.unidades, producto.barcode]);
        }

        const mod_cliente = 'UPDATE caja.clientes SET total_historico = total_historico + $1 WHERE nit = $2';
        await client.query(mod_cliente, [total, nit]);

        await client.query('COMMIT');

        fueExitoso = true;
    } catch (err) {
        await client.query('ROLLBACK');
        fueExitoso = false;
    } finally {
        client.release();
    }
    return fueExitoso;
}

const model_CajaAddCliente = async (nit, nombre) => {

    client = await CustomPool.connect();

    fueExitoso = false;
    try {
        await client.query('BEGIN');
    
        const add_venta = 'INSERT INTO caja.clientes VALUES ($1, $2, 0)';
        await client.query(add_venta, [nit, nombre]);

        await client.query('COMMIT');

        fueExitoso = true;
    } catch (err) {
        await client.query('ROLLBACK');
        fueExitoso = false;
    } finally {
        client.release();
    }
    return fueExitoso;
}
const model_CajaModCliente = async (nit, nombre, username, password) => {

    client = await CustomPool.connect();

    fueExitoso = false;
    try {
        await client.query('BEGIN');
    
        const get_admin = `SELECT * FROM administracion.empleados WHERE rol='administracion' AND username=$1 AND password=$2`;
        const tabla = (await client.query(get_admin, [username, password])).rows;

        if(username == tabla[0].username){
            const add_cliente = 'UPDATE caja.clientes SET nombre=$1 WHERE nit=$2';
            await client.query(add_cliente, [nombre, nit]);
        }

        await client.query('COMMIT');

        fueExitoso = true;
    } catch (err) {
        await client.query('ROLLBACK');
        fueExitoso = false;
    } finally {
        client.release();
    }
    return fueExitoso;
}


//SELECT caja.add_factura('programARRS',151439858,55553,'2024-05-05');

module.exports = {
    model_CajaGetPrecio,
    model_CajaGetCliente,
    model_CajaAddVenta,
    model_CajaAddCliente,
    model_CajaModCliente
}
