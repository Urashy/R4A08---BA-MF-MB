CREATE TABLE TodoList (
    idlist SERIAL PRIMARY KEY,          
    NomTache VARCHAR(255) NOT NULL,   
    EstFini BOOLEAN DEFAULT FALSE,
    CONSTRAINT pk_todo_list PRIMARY KEY (id)
);


INSERT INTO TodoList (idlist, NomTache, EstFini) VALUES (1, 'Faire le ménage', false);
INSERT INTO TodoList (idlist, NomTache, EstFini) VALUES (2, 'Créer la base de données', true);
INSERT INTO TodoList (idlist, NomTache, EstFini) VALUES (3, 'Acheter des chips chèvre piment d Espelette', false);
INSERT INTO TodoList (idlist, NomTache, EstFini) VALUES (4, 'Appeler ma mère', false);
INSERT INTO TodoList (idlist, NomTache, EstFini) VALUES (5, 'Préparer le Iftar', false);
INSERT INTO TodoList (idlist, NomTache, EstFini) VALUES (6, 'Finir les contrôleurs de la SAE', false);
INSERT INTO TodoList (idlist, NomTache, EstFini) VALUES (7, 'Ranger ma chambre', false);
INSERT INTO TodoList (idlist, NomTache, EstFini) VALUES (8, 'Faire la vaisselle', false);
INSERT INTO TodoList (idlist, NomTache, EstFini) VALUES (9, 'Arrêter le Redbull dès 8h du matin', false);
INSERT INTO TodoList (idlist, NomTache, EstFini) VALUES (10, 'Trouver un stage', false);
INSERT INTO TodoList (idlist, NomTache, EstFini) VALUES (11, 'Répondre à mes mails', false);
INSERT INTO TodoList (idlist, NomTache, EstFini) VALUES (12, 'Acheter une oie sur Amazon', false);
INSERT INTO TodoList (idlist, NomTache, EstFini) VALUES (13, 'Jen ai aucune idée (Berkan)', false);
INSERT INTO TodoList (idlist, NomTache, EstFini) VALUES (14, 'Préparer les vacances', false);
INSERT INTO TodoList (idlist, NomTache, EstFini) VALUES (15, 'Gadget émérie', false);