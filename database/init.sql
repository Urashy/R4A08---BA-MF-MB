CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,          
    title VARCHAR(255) NOT NULL,   
    completed BOOLEAN DEFAULT FALSE,
    datefin TIMESTAMP DEFAULT NULL
);

INSERT INTO tasks (title, completed) VALUES ('Faire le ménage', false);
INSERT INTO tasks (title, completed) VALUES ('Créer la base de données', true);
INSERT INTO tasks (title, completed) VALUES ('Acheter des chips chèvre piment d''Espelette', false);
INSERT INTO tasks (title, completed) VALUES ('Appeler ma mère', false);
INSERT INTO tasks (title, completed) VALUES ('Préparer le Iftar', false);
INSERT INTO tasks (title, completed) VALUES ('Finir les contrôleurs de la SAE', false);
INSERT INTO tasks (title, completed) VALUES ('Ranger ma chambre', false);
INSERT INTO tasks (title, completed) VALUES ('Faire la vaisselle', false);
INSERT INTO tasks (title, completed) VALUES ('Arrêter le Redbull dès 8h du matin', false);
INSERT INTO tasks (title, completed) VALUES ('Trouver un stage', false);
INSERT INTO tasks (title, completed) VALUES ('Répondre à mes mails', false);
INSERT INTO tasks (title, completed) VALUES ('Acheter une oie sur Amazon', false);
INSERT INTO tasks (title, completed) VALUES ('J en ai aucune idée (Berkan)', false);
INSERT INTO tasks (title, completed) VALUES ('Préparer les vacances', false);
INSERT INTO tasks (title, completed) VALUES ('Gadget éméri', false);