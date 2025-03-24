# Projet d'Application de Gestion de Tâches à Faire

## Réalisé par :
- **Berkan AKIN**
- **Mathis FRAPPIN**
- **Mano BERTHET**

---

## Lancement de l'Application

### Avec Visual Studio
1. **Clonez le dépôt** dans le dossier souhaité :  
   ```bash
   git clone https://github.com/Urashy/R4A08---BA-MF-MB.git
   ```
2. **Ouvrez le terminal** de Visual Studio :  
   - Menu supérieur → "Terminal" → "New Terminal"
3. **Déplacez-vous dans le dossier du projet** :  
   ```bash
   cd R4A08---BA-MF-MB
   ```
4. **Lancez l'application** :  
   ```bash
   docker compose up -d
   ```
5. **Accédez à l'application** :  
   Ouvrez votre navigateur et allez sur **[http://localhost:3001/](http://localhost:3001/)**

### Sans Visual Studio
1. **Ouvrez une invite de commande** et déplacez-vous dans le dossier souhaité.
2. **Clonez le dépôt** :  
   ```bash
   git clone https://github.com/Urashy/R4A08---BA-MF-MB.git
   ```
3. **Déplacez-vous dans le dossier** :  
   ```bash
   cd R4A08---BA-MF-MB
   ```
4. **Lancez l'application** :  
   ```bash
   docker compose up -d
   ```
5. **Accédez à l'application** :  
   Ouvrez votre navigateur et allez sur **[http://localhost:3001/](http://localhost:3001/)**

---

## Description de l'Application

### Technologies utilisées :
- **Frontend** : HTML, CSS, JavaScript
- **Backend** : Node.js, Docker
- **Base de données** : PostgreSQL

### Fonctionnalités principales :

#### 1. Ajout de tâches
- Utilisez le champ **"Ajouter une nouvelle tâche"**.
- Entrez un titre et une date butoir (**jj/mm/yyyy** ou via un calendrier).
- Cliquez sur **"Ajouter"** pour enregistrer la tâche dans la liste.

#### 2. Validation ou suppression de tâches
- **Validation** : Cliquez sur le bouton ✅ pour déplacer la tâche en **"Terminé"**.
  - Une tâche validée peut être remise en "À faire" grâce au bouton ↩.
- **Suppression** : Cliquez sur le bouton ❌ pour supprimer une tâche.

#### Autres fonctionnalités
- **Suppression de toutes les tâches terminées** :
  - Un bouton sous forme de barre rouge permet de vider la liste des tâches terminées après confirmation.
- **Système de code couleur** :
  - 🟢 Bordure verte : plus de 7 jours restants.
  - 🟠 Bordure orange : moins de 7 jours restants.
  - 🔴 Bordure rouge : moins de 2 jours restants.
  - 🟣 Bordure violette : échéance aujourd'hui.
  - ❌ Case rouge complète : échéance dépassée.
- **Compteur de tâches** :
  - Chaque liste affiche un compteur du nombre de tâches.
- **Mode sombre 🌙** :
  - Activez/Désactivez le mode sombre avec le bouton en haut à droite de la page.

---

**L'application est maintenant prête à l'emploi !**