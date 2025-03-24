CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,          
    title VARCHAR(255) NOT NULL,   
    completed BOOLEAN DEFAULT FALSE,
    datefin TIMESTAMP DEFAULT NULL
);

INSERT INTO tasks (title, completed, datefin) 
VALUES 
    ('Faire le ménage', false, NOW() + INTERVAL 'random() * 65 - 5 days'),
    ('Créer la base de données', false, NOW() + INTERVAL 'random() * 65 - 5 days'),
    ('Acheter des chips chèvre piment d''Espelette', false, NOW() + INTERVAL 'random() * 65 - 5 days'),
    ('Appeler ma mère', false, NOW() + INTERVAL 'random() * 65 - 5 days'),
    ('Préparer le Iftar', false, NOW() + INTERVAL 'random() * 65 - 5 days'),
    ('Finir les contrôleurs de la SAE', false, NOW() + INTERVAL 'random() * 65 - 5 days'),
    ('Ranger ma chambre', false, NOW() + INTERVAL 'random() * 65 - 5 days'),
    ('Faire la vaisselle', false, NOW() + INTERVAL 'random() * 65 - 5 days'),
    ('Arrêter le Redbull dès 8h du matin', false, NOW() + INTERVAL 'random() * 65 - 5 days'),
    ('Trouver un stage', false, NOW() + INTERVAL 'random() * 65 - 5 days'),
    ('Répondre à mes mails', false, NOW() + INTERVAL 'random() * 65 - 5 days'),
    ('Acheter une oie sur Amazon', false, NOW() + INTERVAL 'random() * 65 - 5 days'),
    ('J en ai aucune idée (Berkan)', false, NOW() + INTERVAL 'random() * 65 - 5 days'),
    ('Préparer les vacances', false, NOW() + INTERVAL 'random() * 65 - 5 days'),
    ('Gadget éméri', false, NOW() + INTERVAL 'random() * 65 - 5 days');
