const { Pool } = require('pg');

const CustomPool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123123',
    database: 'gpx',
});

// -- exports -- exports -- exports -- exports -- exports --
module.exports = {CustomPool};
