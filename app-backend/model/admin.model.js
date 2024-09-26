const { CustomPool } = require('./psql');

const model_AdminGetEmpleados = async () => {
    client = await CustomPool.connect();

    try {
        const text = 'SELECT * FROM administracion.empleados';
        const tabla = (await client.query(text)).rows;

        json = [];
        tabla.forEach(fila => {
            json.push({
                username: fila.username,
                rol: fila.rol,
                sucursal: fila.id_sucursal,
                nombre: fila.nombre,
                dpi: fila.dpi
            });
        });

        return json;
    } catch (err) {
    } finally {
        client.release();
    }
}

const model_AdminAddEmpleado = async (dpi, nombre, sucursal, rol, username, password) => {
    client = await CustomPool.connect();

    try {
        const text = 'SELECT administracion.add_empleado($1, $2, $3, $4, $5, $6)';
        const values = [dpi,nombre,sucursal,rol,username,password];
        await client.query(text, values);

        return true;
    } catch (err) {
    } finally {
        client.release();
    }
    return false;
}


const model_AdminMejoresVentas = async (fecha1,fecha2) => {
    client = await CustomPool.connect();

    try {
        const text = 'SELECT * FROM administracion.mejores_ventas($1,$2)';
        const tabla = (await client.query(text,[fecha1,fecha2])).rows;

        json = [];
        tabla.forEach(fila => {
            json.push({
                nit: fila.nit,
                total: fila.total,
                fecha: fila.fecha,
            });
        });

        return json;
    } catch (err) {
    } finally {
        client.release();
    }
}

//SELECT * FROM administracion.mejores_clientes;
const model_AdminMejoresClientes = async () => {
    client = await CustomPool.connect();

    try {
        const text = 'SELECT * FROM administracion.mejores_clientes';
        const tabla = (await client.query(text)).rows;

        json = [];
        tabla.forEach(fila => {
            json.push({
                nit: fila.nit,
                nombre: fila.nombre,
                total: fila.total_historico,
            });
        });

        return json;
    } catch (err) {
    } finally {
        client.release();
    }
}


// -- exports -- exports -- exports -- exports -- exports --
module.exports = { 
    model_AdminGetEmpleados, 
    model_AdminAddEmpleado,
    model_AdminMejoresVentas,
    model_AdminMejoresClientes
};
