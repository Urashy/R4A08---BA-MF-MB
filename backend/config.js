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
  .then(() => console.log("✅ Connecté à PostgreSQL"))
  .catch(err => console.error("❌ Erreur de connexion :", err));

app.use(express.json());
app.use(cors());

// Exporter `pool`
module.exports = pool;

// Définir le chemin absolu vers le dossier "front"
const frontPath = path.resolve(__dirname, './front');

console.log("📁 Chemin du front :", frontPath);

// Servir les fichiers statiques du dossier "front"
app.use(express.static(frontPath));

// Routes API
const tasksRoutes = require('./routes/task'); 
app.use('/api', tasksRoutes);

// Rediriger toutes les requêtes vers index.html (sauf les API)
app.get('*', (req, res) => {
    res.sendFile(path.join(frontPath, 'index.html'));
});

// Lancer le serveur
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
