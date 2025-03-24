# Utilisation d'une image Node.js légère
FROM node:18-alpine

# Définition du dossier de travail
WORKDIR /app

# Copie des fichiers et installation des dépendances
COPY package.json package-lock.json ./
RUN npm install

# Copie du code source
COPY . .

# Exposition du port de l’API
EXPOSE 3000

# Lancement du serveur
CMD ["npm", "start"]
