// ✍️ TODO 1: Import dotenv and run config()

const { Pool } = require('pg');

// ✍️ TODO 2: Replace hard-coded values with process.env

const config = {
  host: 'localhost',
  port: 5432,
  database: 'users_db',
  // user: 'username',
  // password: 'password',
};

// ✍️ TODO 3: Create a separate config for production environments that use a connectionString

// ✍️ TODO 4: If PG_CONNECTION_STRING is available, use the prodConfig, otherwise use devConfig

const pool = new Pool(config);

module.exports = pool;
