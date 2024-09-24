const { CustomPool } = require('./psql');


const model_AuthGetUser = async (username,password) => {
    client = await CustomPool.connect();

    try {
        const text = 'SELECT * FROM administracion.empleados WHERE username=$1 AND password=$2';
        const values = [username,password];
        const tabla = (await client.query(text, values)).rows;

        const fila = tabla[0];
        const json = {
            username: fila.username,
            rol: fila.rol,
            nombre: fila.nombre,
            sucursal: fila.id_sucursal
        };
        return json;
    } catch (err) {
        //console.error(err);
    } finally {
        client.release();
        //await sql_admin.end();
    }
}

// -- exports -- exports -- exports -- exports -- exports --
module.exports = { model_AuthGetUser };
