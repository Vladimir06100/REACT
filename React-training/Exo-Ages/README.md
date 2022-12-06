# Bocal Academy

## React - Compte en banque

### Notions utilisées

- Utiliser fetch
- Utiliser une fonction en props

#### Get Started

- Clone the git Repository

- Install dependencies: npm install

- Launch the projet: npm start

### Enoncé 

- Vous devez créer une application avec une seule page contenant 2 Composants:

    - App.js
        - On stock l'historique des recherches dans une variable d'état (history) ([{firstName: "bella", age: 42}])
        - Une fonction pour ajouter une recherche
        - Quand j'appel le composant Search, je lui passe la fonction en paramètre

    - Le premier composant Search.js
        - il a un input (Prénom)
        - La valeur de cette input doit être stocké dans une variable d'état. (firstNameInput)
        - Un bouton pour valider la recherche
        - Quand l'utilisateur valide la recherche, il faut utiliser l'api https://api.agify.io?name=bella
        - Quand vous avez reçu l'age, vous renvoyé au composant App le prénom et l'age. App stockera cette valeur dans une variable d'état

    - Deuxième composant: History.js l'historique des recherches
        - Afficher l'historique des recherches