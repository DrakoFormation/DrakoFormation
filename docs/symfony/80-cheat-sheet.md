---
date: 2021-02-25
---

# Pense-bêtes

[[toc]]

## Démarrer un projet Symfony (de zéro)

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/6f2ef2737c6c42ebb5bdc837e34c8214" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

- `symfony new --webapp nomDeVotreProjet`
- `cd nomDeVotreProjet`
- `git remote add origin UrlVersLeRepository`
- `git branch -M main`
- `git push -u origin main`

## Récupérer un projet (clone)

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/39f3f96a690f401cb77610c2c0b58739" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

- `git clone UrlVersLeRepository chemin/vers/le/repository` (exemple : `git clone git@github.com:Dreeckan/symfony-computer.git symfony-computer`)
- `cd chemin/vers/le/repository` (exemple : `cd symfony-computer`)
- `composer install` (pour mettre à jour le contenu du dossier `vendor` et récupérer les dépendances, telles que Symfony)
- Vous êtes prêts à travailler

S'il a déjà une BdD initialisée (avec des migrations), il faut aussi les appliquer (pour mettre à jour votre BdD) :
- `php bin/console doctrine:database:create` (si vous n'avez pas déjà la BdD)
- `php bin/console doctrine:migrations:migrate -n`

Si le projet a des Fixtures, les appliquer avec :
- `php bin/console doctrine:fixtures:load -n`

## Travailler sur un projet

- Ouvrir Wamp/Mamp pour la BdD et PhpMyAdmin (ou les avoir installés)
- Ouvrir un terminal (dans votre IDE par exemple)
- `symfony serve` qui vous dira sur quelle adresse vous connecter pour tester votre site

## Créer une page 

- Créer un controller ou une action dans un controller existant
- Ajouter/modifier la ou les routes liées à votre action 
- Adapter le contenu de l'action (s'assurer que les noms sont cohérents)
- Créer/modifier le template associé, s'il y en a un.

## Commandes composer

- `composer install` pour récupérer les dépendances définies dans le `.lock`
- `composer update` pour mettre à jour les dépendances et le `.lock`
- `composer require nomDuPaquet` pour installer une dépendance (suivre la doc de la dépendance)

## Dé-buguer

- `dump` ou `dd` dans un fichier PHP
- `dump` dans un Twig
- `php bin/console` montre l'intégralité des commandes dont dispose Symfony (dont plusieurs commencent par `debug:` ou `lint:`)

## Générer des entités et des migrations

- Pour générer/modifier une entité : `php bin/console make:entity`
- Répéter autant que nécessaire
- Générer une migration `php bin/console make:migration`
- Appliquer les migrations `php bin/console doctrine:migrations:migrate -n`
- Votre BdD est à jour

## Doctrine

- Pour faire des requêtes `SELECT`, utiliser un repository (lié à une table/entité)
- Pour les `UPDATE` / `DELETE`, utiliser l'Entity Manager (`EntityManagerInterface`)

## Formulaires

- Souvent lié à une classe / entité
- Un `FormType` pour gérer les différents champs, leurs types et leurs options
- Des assertions directement dans la classe / entité pour la validation
- Dans un controller, utiliser `$this->createForm()` pour générer un formulaire (objet de traitement), puis utiliser `->createView()` sur ce formulaire pour le transmettre à une vue Twig (objet `FormView`)
- Afficher le formulaire et ses différentes lignes avec `form_start`, `form_end` et `form_row`

## Bundles utiles

- [VichUploader](https://github.com/dustin10/VichUploaderBundle/blob/master/docs/index.md) pour utiliser des images liées à vos entités
- [EasyAdmin](https://symfony.com/doc/current/bundles/EasyAdminBundle/index.html) pour générer un espace d'administration pour vos entités
- [Doctrine extensions](https://symfony.com/doc/current/bundles/StofDoctrineExtensionsBundle/index.html) pour ajouter des comportements à vos entités (Timestampable, Sluggable, etc.)
- [Knp Paginator](https://github.com/KnpLabs/KnpPaginatorBundle) pour gérer la pagination de vos listes
- [Knp Menu](https://github.com/KnpLabs/KnpMenuBundle/) pour gérer vos menus sous forme d'objets **propres**
- [ApiPlatform](https://api-platform.com/docs/distribution/#using-symfony-and-composer) vous permet de créer une API rapidement dans votre Symfony, à partir de vos entités.