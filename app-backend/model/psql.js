const { Client } = require('pg');

const psql_admin = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123123',
    database: 'gpx',
});

// -- exports -- exports -- exports -- exports -- exports --
module.exports = {psql_admin};
