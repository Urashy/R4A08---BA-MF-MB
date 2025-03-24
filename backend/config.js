const { Pool } = require('pg');
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Configuration de la base de données
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'todo_db',
  port: 5432
});

pool.connect()
  .then(() => console.log("Connecté à PostgreSQL"))
  .catch(err => console.error("Erreur de connexion :", err));

app.use(express.json());
app.use(cors());

module.exports = pool;

// Définir le chemin vers front
const frontPath = path.resolve(__dirname,'./front');

console.log("Chemin du front :", frontPath);
app.use(express.static(frontPath));
const tasksRoutes = require('./routes/task'); 
app.use('/api', tasksRoutes);

// Redirige vers index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(frontPath, 'index.html'));
});

//Run
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
