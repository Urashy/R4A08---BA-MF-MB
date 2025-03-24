const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'todo_db',
  port: 5432
});

pool.connect()
  .then(() => console.log("✅ Connecté à PostgreSQL !"))
  .catch(err => console.error("❌ Erreur de connexion :", err));

module.exports = pool;
