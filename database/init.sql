CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,          
    title VARCHAR(255) NOT NULL,   
    completed BOOLEAN DEFAULT FALSE,
    datefin TIMESTAMP DEFAULT NULL
);

INSERT INTO tasks (title, completed, datefin) 
VALUES 
    ('Faire le ménage', false, NOW() + (random() * 65 - 5) * INTERVAL '1 day'),
    ('Créer la base de données', false, NOW() + (random() * 65 - 5) * INTERVAL '1 day'),
    ('Acheter des chips chèvre piment d''Espelette', false, NOW() + (random() * 65 - 5) * INTERVAL '1 day'),
    ('Appeler ma mère', false, NOW() + (random() * 65 - 5) * INTERVAL '1 day'),
    ('Préparer le Iftar', false, NOW() + (random() * 65 - 5) * INTERVAL '1 day'),
    ('Finir les contrôleurs de la SAE', false, NOW() + (random() * 65 - 5) * INTERVAL '1 day'),
    ('Ranger ma chambre', false, NOW() + (random() * 65 - 5) * INTERVAL '1 day'),
    ('Faire la vaisselle', false, NOW() + (random() * 65 - 5) * INTERVAL '1 day'),
    ('Arrêter le Redbull dès 8h du matin', false, NOW() + (random() * 65 - 5) * INTERVAL '1 day'),
    ('Trouver un stage', false, NOW() + (random() * 65 - 5) * INTERVAL '1 day'),
    ('Répondre à mes mails', false, NOW() + (random() * 65 - 5) * INTERVAL '1 day'),
    ('Acheter une oie sur Amazon', false, NOW() + (random() * 65 - 5) * INTERVAL '1 day'),
    ('J en ai aucune idée (Berkan)', false, NOW() + (random() * 65 - 5) * INTERVAL '1 day'),
    ('Préparer les vacances', false, NOW() + (random() * 65 - 5) * INTERVAL '1 day'),
    ('Gadget éméri', false, NOW() + (random() * 65 - 5) * INTERVAL '1 day');
