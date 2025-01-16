const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432
});

pool.connect()
  .then(() => console.log('Conected to Posgre SQL'))
  .catch(err => console.error('Error to conect to Postgre SQL', err));

module.exports = pool;