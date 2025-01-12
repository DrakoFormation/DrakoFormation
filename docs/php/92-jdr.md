---
date: 2022-02-01
---

# Projet - Personnages de Jeux de Rôle

[[toc]]

Nous allons mettre en place un projet Php, rendu sur Github/Gitlab, en utilisant des tickets (outil à définir). Le processus de travail doit être comme suit : 
- utiliser Git pour enregistrer les modifications de chaque développeur
- une branche doit être créée pour chaque ticket de code
  - lorsque le ticket est terminé, une Pull/Merge Request (appelée MR par la suite) doit être créée
  - cette MR doit être relue par un autre développeur pour :
    - remonter des incohérences
    - vérifier que le code écrit répond à la demande
    - vérifier que le code écrit correspond aux normes de codage défini au sein de l'équipe (et peut permettre de les définir)

Ce projet est prévu pour une équipe de 2 à 3 personnes.

## La demande client

Wizards of the Cost, notre client, veut que ses joueurs de PâteFinder (leur dernier jeu de rôle papier) puissent gérer leurs feuilles de personnages en ligne. 

Une feuille de personnage contient :
- le nom du personnage
- le nom du joueur / de la joueuse
- des caractéristiques 
- des compétences
- des équipements

Les caractéristiques d'un personnage :
  - son initiative (maximum 10)
  - points de vie maximum
  - points de vie actuels
  - points de magie maximum
  - points de magie actuels
  - la force (maximum 20)
  - la dextérité (maximum 20)
  - la constitution (maximum 20)
  - l'intelligence (maximum 20)
  - la sagesse (maximum 20)
  - la chance (maximum 20)

Une compétence contient :
- un nom
- une caractéristique associée
- un niveau (nombre entier entre 0 et 5)

Un équipement est défini par :
- un nom
- des dégâts (nombre supérieur ou égal à 0)
- une portée (nombre entier entre 0 et 5)

Chaque joueur pourra se connecter et voir / créer / modifier ses fiches de personnages. Son espace personnel contiendra donc une liste de ses fiches, avec quelques informations.

### Fonctionnalités supplémentaires pour le Maître de Jeu (optionnelles)

Le client veut, si possible et dans un second temps, ajouter un ensemble de fonctionnalités pour le <abbr title="Maître de Jeu">MJ</abbr>, lui permettant de créer des feuilles de personnage pour ses joueurs et de les mettre à jour.


## Page de connexion

Pour utiliser le site, un utilisateur **doit** être connecté. Si un utilisateur n'est pas connecté, mais cherche à accéder à une autre page, il sera renvoyé vers la page de connexion.

Ce formulaire demandera un nom d'utilisateur et un mot de passe. Les informations seront conservées dans la session si elles correspondent à une entrée en <abbr title="Base de Données">BdD</abbr>. Sinon, on affichera un message d'erreur approprié.


## Accueil de l'utilisateur

Quand un utilisateur s'est connecté, il peut accéder à la liste de ses fiches de personnage. 

Il doit pouvoir accéder à un formulaire pour créer un nouveau personnage depuis cette page.

Chaque fiche doit présenter :
- le nom du personnage
- ses caractéristiques
- la liste des compétences
- la liste des équipements
- un lien pour modifier les informations de base et les caractéristiques
- un lien pour modifier une compétence
- un lien pour ajouter une compétence
- un lien pour modifier un équipement
- un lien pour ajouter un équipement
- un lien pour voir la fiche en entier
- un lien pour supprimer la fiche


## Voir une fiche

Cette fonctionnalité affiche **toutes** les informations d'une fiche de personnage de manière plus lisible, afin d'être utilisée pendant une partie de <abbr title="Jeu de Rôle">JdR</abbr>.


## Créer / modifier les informations de base

Le propriétaire de la fiche doit pouvoir mettre à jour tous les éléments de base et les caractéristiques de la fiche.

Les éléments de base modifiable : 
- le nom du personnage
- le nom du joueur / de la joueuse
- des caractéristiques 
- des compétences
- des équipements

Les caractéristiques du personnage :
  - son initiative (maximum 10)
  - points de vie maximum
  - points de vie actuels (inférieur ou égal aux points de vie maximum)
  - points de magie maximum
  - points de magie actuels (inférieur ou égal aux points de magie maximum)
  - la force (compris entre 5 et 20)
  - la dextérité (compris entre 5 et 20)
  - la constitution (compris entre 5 et 20)
  - l'intelligence (compris entre 5 et 20)
  - la sagesse (compris entre 5 et 20)
  - la chance (compris entre 5 et 20)

Pour un **nouveau** personnage, la somme totale des caractéristiques doit être comprise entre 60 et 80. Cette règle n'est plus vraie pour un personnage modifié, dont les caractéristiques vont évoluer avec les parties.


## Créer / modifier un équipement

La création / modification d'un équipement se fait pour un personnage et permet de définir les informations suivantes :
- un nom
- des dégâts (nombre supérieur ou égal à 0)
- une portée (nombre entier entre 0 et 5)


## Créer / modifier une compétence

La création / modification d'une compétence se fait pour un personnage et permet de définir les informations suivantes :
- un nom
- une caractéristique associée
- un niveau (nombre entier entre 0 et 5)


## Suppression de la fiche

La suppression d'une feuille de personnage supprime tous les éléments associés. Il ne doit pas y avoir de données orphelines dans la <abbr title="Base de Données">BdD</abbr>.


## Fonctionnalités <abbr title="Maître de Jeu">MJ</abbr> (optionnelles)

Un <abbr title="Maître de Jeu">MJ</abbr> est un type d'utilisateur à part entière. Il peut créer / modifier des tables (ses parties), y associer des joueurs et leur assigner des personnages. Il peut également créer / modifier des personnages (y compris les personnages de ses joueurs), des équipements et des compétences.

Cette fonctionnalité désactive la création / modification de personnages côté joueur et seul l'affichage de ses fiches lui est disponible.

Le <abbr title="Maître de Jeu">MJ</abbr> peut créer des fiches des personnages, des équipements et des compétences sans les assigner à des joueurs ou des personnages. Équipements et compétences peuvent alors être sélectionnés dans une liste déroulante, lors de la création / modification d'un personnage.


## Fonctionnalités de gestion de parties (optionnelles)

:warning: nécessite les fonctionnalités de <abbr title="Maître de Jeu">MJ</abbr>.

### Lancers de dés

Lors d'une partie, les joueurs comme le <abbr title="Maître de Jeu">MJ</abbr> aimeraient avoir une page pour gérer leurs lancers de dés. Ils peuvent sélectionner un nombre de dés (entre 1 et 50) et un type de dé (nombre de faces possibles : 2, 4, 6, 8, 10, 12, 20 ou 100).

Les lancés de dés se font dans le cadre d'une partie et sont liés à un personnage ou un <abbr title="Maître de Jeu">MJ</abbr> et on veut un historique des lancers de chaque joueur et du <abbr title="Maître de Jeu">MJ</abbr>. Chaque joueur ne peut voir que ses lancers, alors que le <abbr title="Maître de Jeu">MJ</abbr> peut voir les lancers de tout le monde et leurs historiques.


### Filtres et tris

Pour facilité la gestion d'un grand nombre de personnages, d'équipements et de compétences, on aimerait un ensemble de tris et de filtres sur les différentes listes.

#### Équipements 

Il faudrait pouvoir filtrer la liste des équipements par :
- portée (avec un min et un max)
- dégâts (avec un min et un max)

On veut pouvoir trier (ordres croissant ou décroissant) la liste par :
- nom
- portée
- dégâts

#### Compétences 

Il faudrait pouvoir filtrer la liste des compétences par :
- caractéristique associée
- un niveau (avec un min et un max)

On veut pouvoir trier (ordres croissant ou décroissant) la liste par :
- nom
- niveau

#### Fiches de personnages

Il faudrait pouvoir filtrer la liste des personnages par :
- nom du personnage (champ de recherche, où l'on veut entrer tout ou partie du nom)
- nom du joueur / de la joueuse (choisir dans les joueurs disponibles)

On veut pouvoir trier (ordres croissant ou décroissant) la liste par :
- nom du personnage
- nom du joueur

### Gestionnaire de parties

Un utilisateur ayant les droits <abbr title="Maître de Jeu">MJ</abbr> doit pouvoir gérer les parties : les lister, les mettre à jour, en archiver (on ne les supprime pas, mais une partie archivée n'est plus visible par défaut) ou en créer de nouvelles. 

Une partie a :
- un <abbr title="Maître de Jeu">MJ</abbr>
- des joueurs (peut ne pas en avoir)
- des fiches de personnage
- une date de création
- des dates de jeu (dates où la partie a été ou va être jouée par les joueurs et le <abbr title="Maître de Jeu">MJ</abbr>)

Il faudrait pouvoir filtrer la liste des parties par :
- joueur
- date de création
- date de jeu

On veut pouvoir trier (ordres croissant ou décroissant) la liste par :
- nombre de joueurs
- date de création
- date de jeu

### Extension des parties à tous les joueurs

Pour étendre le système et refléter au mieux la réalité des <abbr title="Jeu de Rôle">JdR</abbr>, il faut que les joueurs puissent devenir <abbr title="Maître de Jeu">MJ</abbr> et *vice versa*. Un utilisateur sera <abbr title="Maître de Jeu">MJ</abbr> sur une ou des parties, pourra en créer, etc. et pourra être joueur sur d'autres.

Un utilisateur pourra donc modifier/archiver des parties où il est <abbr title="Maître de Jeu">MJ</abbr>, mais pas celles où il est simplement joueur.


## Critères d'acceptation (notation)

Pour valider le rendu, voici ce qui est attendu par votre chef de projet, pour chacun d'entre vous : 

- Création/manipulation d'au moins une classe/objet.
- Création de requêtes de <abbr title="Base de Données">BdD</abbr> (au moins une insertion, une mise à jour et une récupération de données) avec gestion des erreurs.
- Manipulation d'un formulaire complexe (filtre, création/modification d'un objet, etc. avec validation et affichage des données et requête(s) associées).
- Travail d'équipe (lecture des <abbr title="Pull Requests">PRs</abbr> et remontée des problèmes, création de <abbr title="Pull Request">PR</abbr>, utilisation de `git rebase` pour simplifier l'historique et gérer les conflits, etc.).

Bonus :
- Respect des [normes PSR (1, 12 et 4)](10-doc.md) pour tout le code.

Éléments communs à fournir (conseil : ajoutez-les dans le projet, dans un dossier `docs`, `resources` ou autre nom) :
- Un schéma de base de données (fichier Looping, schéma image ou autre).
- un dump de la base de données finale.
- un fichier `README.md` affichant : 
  - Le schéma de la BdD.
  - La démarche pour installer le projet (le chef de projet doit pouvoir le faire sans erreurs).
