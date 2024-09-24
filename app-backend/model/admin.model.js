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

        /*const fila = tabla[0];
        const json = {
            username: fila.username,
            rol: fila.rol,
            nombre: fila.nombre,
            sucursal: fila.id_sucursal
        };*/

        return json;
    } catch (err) {
        //console.error(err);
    } finally {
        client.release();
        //await sql_admin.end();
    }
}

// -- exports -- exports -- exports -- exports -- exports --
module.exports = { model_AdminGetEmpleados };
