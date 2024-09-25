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

// -- exports -- exports -- exports -- exports -- exports --
module.exports = { model_AdminGetEmpleados, model_AdminAddEmpleado };
