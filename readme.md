------------------------------------------------------
|  Projet d'application de gestion de tâche à faire  |
------------------------------------------------------


réalisé par :
► Berkan AKIN    ◄ 
► Mathis FRAPPIN ◄
► Mano BERTHET   ◄


--------------------------------
|  Lancement de l'application  |
--------------------------------

→ Avec Visual studio.

    -Clonez le dépôt dans le dossier souhaité
        -Lien du GitHub : https://github.com/Urashy/R4A08---BA-MF-MB.git

    -Ouvrez le terminal de commande à partir de la barre des menus (en haut à gauche de l'application, entre "Run" et "Help") :
        - Terminal → New Terminal et placez-vous dans le dossier souhaité.

    -Entrez cette commande dans la console apparue (en bas de l'application) :
        docker compose up -d

    \o/ C'est bon, votre application est lancée !! \o/

    -Pour y accéder, copiez-collez ce lien dans votre navigateur  : http://localhost:3001/



→ Sans Visual studio.


    -Ouvrez une invite de commande et déplacez-vous dans le dossier souhaité.

    -Clonez le dépôt :
         git clone https://github.com/Urashy/R4A08---BA-MF-MB.git

    -Déplacez-vous dedans :
        cd R4A08---BA-MF-MB

    -Lancez l'application :
        docker compose up -d

    \o/ C'est bon, votre application est lancée !! \o/

    -Pour y accéder, copiez-collez ce lien dans votre navigateur  : http://localhost:3001/


---------------------------------
|  Descriptif de l'application  |
---------------------------------

  |
  |-----------------------
  |  Frontend :        |
  |      HTML CSS JS   |
  |  Backend :         |
  |      Docker        |
  |  Base de donnée :  |
  |      Postgres SQL  |
  |  + NodeJs          |
-----------------------|
                       |

L'application a 2 principales fonctions :


1. L'ajout de tâches a faire            |
----------------------------------------|

    À l'aide du champ "Ajouter une nouvelle tâche", vous pouvez entrer le titre de la tâche que vous devez faire ainsi que la date butoir (sois en jj/mm/yyyy ou avec un calendrier).
    Une fois qu'elle vous convient, il suffit de cliquer sur le bouton "Ajouter" et la tâche apparaîtra dans la liste des tâches à faire.



2. Validation ou suppression de tâches  |
----------------------------------------|

   → Validation d'une tâche
        À l'aide du bouton vert à côté de votre tâche, vous pouvez valider votre tâche.
        Elle passera donc dans la colonne "Terminé".

        /!\ Si vous vous êtes trompé, vous pouvez toujours remettre la tâche en "A faire" à l'aide du bouton : "↩" /!\

    → Suppression d'une tâche
        À l'aide du bouton rouge à côté de votre tâche, vous pouvez supprimer votre tâche.

    
3. Autres fonctions                     |
----------------------------------------|

    → Suppression de toutes les tâches
        Lorsque vous avez beaucoup de tâches términées, à l'aide du bouton rouge sous forme de barre en dessous de la liste "Terminé", vous pouvez supprimer toutes ces tâches.
        Appuyez sur ce bouton, la page vous demandera "Êtes-vous sûr de vouloir supprimer toutes les tâches terminées ?".
        Cliquez sur "OK" et vos tâches seront supprimées.

    → Système de code couleur
        Nous avons fait en sorte que l'affichage de chaque tâche soit accompagné d'une couleur en fonction de sa date.
            - Bordure verte si la date butoir est dans plus de 7 jours.
            - Bordure orange si la date butoir est dans moins de 7 jours.
            - Bordure rouge si la date butoir est dans moins de 2 jours.
            - Bordure violette si la date butoir est aujourd'hui.
            - Case totalement rouge si la date butoir a déja été dépassée.

    → Système de compteur
        Au-dessus de chaque liste se trouve un petit compteur placé dans une bulle. 
        Il renvoie le nombre de tâches présentes dans chacune des listes.

    → Mode Sombre
        Nous avons également rajouté un mode sombre pour le comfort de nos utilisateurs.
        Pour activer / désactiver ce dernier il vous suffit de cliquer sur le bouton , prévu à cet effet, en haut à droite de la page.

    

