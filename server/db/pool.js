// ✍️ TODO 1: Import dotenv and run config()
require('dotenv').config()
const { Pool } = require('pg');

// ✍️ TODO 2: Replace hard-coded values with process.env

const config = {
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  // user: 'username',
  // password: 'password',
};

// ✍️ TODO 3: Create a separate config for production environments that use a connectionString
const prodConfig = {
  connectionString: process.env.PG_CONNECTION_STRING,
}

// ✍️ TODO 4: If PG_CONNECTION_STRING is available, use the prodConfig, otherwise use devConfig
const pool = new Pool(prodConfig);

module.exports = pool;
