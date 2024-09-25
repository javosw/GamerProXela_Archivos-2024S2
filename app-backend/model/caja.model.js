const { CustomPool } = require('./psql');

const model_CajaGetPrecio = async (sucursal,barcode) => {
    client = await CustomPool.connect();

    try {
        const text = 'SELECT * FROM inventario.productos WHERE id_sucursal=$1 AND id_producto=$2';
        const values = [sucursal,barcode];
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

const model_CajaAddVenta = async (username,nit,total,fecha) => {
    client = await CustomPool.connect();

    try {
        const text = 'SELECT caja.add_factura($1,$2,$3,$4)';
        const values = [username,nit,total,fecha];
        const tabla = (await client.query(text, values)).rows;
        console.log(tabla);
        console.log(tabla[0].add_factura);

        return true;
    } catch (err) {
    } finally {
        client.release();
    }
    return false;
}

//SELECT caja.add_factura('programARRS',151439858,55553,'2024-05-05');

/* 

export type AddProductoVenta = {
    barcode:string;
    unidades:number;
    subtotal:number;
}

export type AddVenta = {
    username:string;
    nit:number;
    total:number;
    fecha:string;
    productos:AddProductoVenta[]
}
*/

module.exports = {
    model_CajaGetPrecio,
    model_CajaGetCliente,
    model_CajaAddVenta
}
