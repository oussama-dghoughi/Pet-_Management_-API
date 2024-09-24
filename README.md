# Pet Management API

## Description

Pet Management API est une application backend développée avec NestJS et TypeORM, permettant de gérer les informations sur les propriétaires d'animaux et leurs animaux de compagnie. 
Cette API permet de créer, lire, mettre à jour et supprimer (CRUD) des données relatives aux personnes et aux animaux.

## Table des matières

- [Caractéristiques](#caractéristiques)
- [Technologies utilisées](#technologies-utilisées)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration de l'environnement](#configuration-de-lenvironnement)
- [Utilisation](#utilisation)
- [Endpoints API](#endpoints-api)
- [Contributions](#contributions)
- [Licence](#licence)

## Caractéristiques

- Gestion des propriétaires d'animaux (personnes)
- Gestion des animaux de compagnie
- Fonctionnalités CRUD pour les personnes et les animaux
- Utilisation de TypeORM pour la gestion de la base de données

## Technologies utilisées

- [NestJS](https://nestjs.com/) - Framework Node.js
- [TypeORM](https://typeorm.io/) - ORM pour TypeScript et JavaScript
- [MySQL](https://www.mysql.com/) - Système de gestion de base de données relationnelle

## Prérequis

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [MySQL](https://www.mysql.com/) installé et en cours d'exécution
- [Git](https://git-scm.com/) pour cloner le dépôt

## Installation

1. **Clonez le dépôt :**
   ```bash
   git clone https://github.com/oussama-dghoughi/Pet-_Management_-API.git
   cd Pet-_Management_-API
2. Installez les dépendances :
   -> npm install
3. Configurez la base de données :
      . Créez une base de données MySQL pour l'application.
      . Modifiez le fichier ormconfig.json (ou app.module.ts selon votre configuration) pour ajouter vos informations de connexion MySQL.
4. Configuration de l'environnement
  Assurez-vous de créer un fichier .env à la racine de votre projet pour stocker vos variables d'environnement.
  Voici un exemple de contenu :
    DATABASE_HOST=localhost
  DATABASE_PORT=3306
  DATABASE_USERNAME=your_username
  DATABASE_PASSWORD=your_password
  DATABASE_NAME=your_database_name
5. Utilisation
  Démarrer le serveur :
      ->En mode développement :
        bash:
                npm run dev
      ->En mode production :
        :bash
              npm run start
6. Accéder à l'API :
        L'API sera disponible à l'adresse http://localhost:3000.

******Endpoints API******
      ***Personnes****
GET /people - Récupérer tous les propriétaires
GET /people/:id - Récupérer un propriétaire par ID
POST /people - Créer un nouveau propriétaire
PUT /people/:id - Mettre à jour un propriétaire existant
DELETE /people/:id - Supprimer un propriétaire

    ***Animaux**
GET /animal - Récupérer tous les animaux
GET /animal/:id - Récupérer un animal par ID
POST /animal - Créer un nouvel animal
PUT /animal/:id - Mettre à jour un animal existant
DELETE /animal/:id - Supprimer un animal


