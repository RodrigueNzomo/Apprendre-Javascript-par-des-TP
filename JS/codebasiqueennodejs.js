// // Chargement du module HTTP natif de Node.js
// const http = require("http");

// // Création d'un serveur simple
// const serveur = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Bonjour, voici une réponse du serveur Node.js !\n");
// });

// // Le serveur écoute sur le port 3000
// serveur.listen(3000, () => {
//   console.log("Le serveur fonctionne sur http://localhost:3000/");
// });
// var message = "Bonjour le monde";
// console.log(message); // Affiche : Bonjour le monde
// let age = 40;

// if (age < 18) {
//   console.log("Vous êtes mineur.");
// } else if (age >= 18 && age < 65) {
//   console.log("Vous êtes adulte.");
// } else {
//   console.log("Vous êtes senior.");
// }
// if (condition) {
//   // Code exécuté si la condition est vraie
// } else if (autreCondition) {
//   // Code exécuté si la première condition est fausse mais celle-ci est vraie
// } else {
//   // Code exécuté si toutes les conditions précédentes sont fausses
// }
// console.log("Bonjour depuis la console !");
// let x = 10;
// let y = 20;
// console.log(x + y); // Affiche 30
// function additionner(a, b) {
//   console.log("Paramètre a :", a);
//   console.log("Paramètre b :", b);
//   return a + b;
// }

// additionner(5, 10); // Affiche "Paramètre a : 5" et "Paramètre b : 10"
// var message = "Bonjour le monde";
// console.log(message); // Affiche : Bonjour le monde
// let age = 25;
// console.log(age); // Affiche : 25
// const PI = 3.1416;
// console.log(PI); // Affiche : 3.1416
// const PI = 3.1416;
// PI = 3; // Erreur : Assignment to constant variable
// // Avec var
// var nom = "Alice";
// var nom = "Bob";
// console.log(nom); // Affiche : Bob

// // Avec let
// let prenom = "Alice";
// let prenom = "Bob"; // Erreur : Identifier 'prenom' has already been declared
// // Avec var
// var x;
// x = 10;

// // Avec let
// let y;
// y = 20;

// // Avec const
// const z; // Erreur : Missing initializer in const declaration
// let message = "Bonjour";
// let autreMessage = 'Hello';
// let templateString = `Bienvenue, ${message}`;
// let entier = 42;
// let decimal = 3.14;
// let negatif = -10;
// let a = 10;
// let b = 5;
// console.log(a + b); // Addition : 15
// console.log(a - b); // Soustraction : 5
// console.log(a * b); // Multiplication : 50
// console.log(a / b); // Division : 2
// console.log(a % b); // Modulo : 0
// let estVrai = true;
// let estFaux = false;

// let comparaison = (5 > 3); // true
// let valeurNulle = null;
// let valeurIndefinie;
// console.log(valeurIndefinie); // Affiche : undefined
// let personne = {
//   nom: "Alice",
//   age: 30,
//   saluer: function() {
//     console.log("Bonjour, je m'appelle " + this.nom);
//   }
// };

// personne.saluer(); // Affiche : Bonjour, je m'appelle Alice
// console.log(typeof "Bonjour"); // Affiche : string
// console.log(typeof 42);        // Affiche : number
// console.log(typeof true);      // Affiche : boolean
// console.log(typeof undefined); // Affiche : undefined
// console.log(typeof null);      // Affiche : object (c'est une particularité historique)
// console.log(typeof {});        // Affiche : object
// console.log(typeof Symbol());  // Affiche : symbol
// console.log(typeof function(){}); // Affiche : function
// let variables = [42, "texte", true, undefined, null, { nom: "Alice" }, [1, 2, 3], function(){}];

// variables.forEach(function(element) {
//   console.log(element + " est de type " + typeof element);
// });
// // 42 est de type number
// // texte est de type string
// // true est de type boolean
// // undefined est de type undefined
// // null est de type object
// // [object Object] est de type object
// // 1,2,3 est de type object
// // function(){} est de type function
// let compteur = 1;
// compteur = 2; // OK

// const PI = 3.14;
// PI = 3.1416; // Erreur : Assignment to constant variable

// var x = 10;
// var x = 20; // Possible avec var, mais déconseillé
// function maFonction() {
//   var variableVar = "Je suis var";
//   let variableLet = "Je suis let";
//   const variableConst = "Je suis const";

//   console.log(variableVar);   // Accessible
//   console.log(variableLet);   // Accessible
//   console.log(variableConst); // Accessible
// }

// maFonction();

// // En dehors de la fonction :
// console.log(variableVar);   // Erreur : variableVar is not defined
// console.log(variableLet);   // Erreur : variableLet is not defined
// console.log(variableConst); // Erreur : variableConst is not defined
// if (true) {
//   var variableVar = "Je suis var";
//   let variableLet = "Je suis let";
//   const variableConst = "Je suis const";
// }

// console.log(variableVar);   // Accessible : "Je suis var"
// console.log(variableLet);   // Erreur : variableLet is not defined
// console.log(variableConst); // Erreur : variableConst is not defined
// let nombre = 123;
// let chaine = String(nombre); // "123"
// console.log(typeof chaine);  // string
// let chaine = "123";
// let nombre = Number(chaine); // 123
// console.log(typeof nombre);  // number
// console.log(Boolean(1));      // true
// console.log(Boolean(0));      // false
// console.log(Boolean("salut"));// true
// console.log(Boolean(""));     // false
// let resultat = "5" + 2; // "52" (concaténation)
// console.log(resultat);

// resultat = "5" - 2; // 3 (la chaîne "5" est convertie en nombre)
// console.log(resultat);

// resultat = "5" * 2; // 10
// console.log(resultat);

// resultat = "5" / 2; // 2.5
// console.log(resultat);
// console.log("5" + true); // "5true" (true est converti en chaîne)
// console.log("5" - true); // 4 (true est converti en 1)
// console.log("5" * false); // 0 (false est converti en 0)
// console.log("5" + true); // "5true" (true est converti en chaîne)
// console.log("5" - true); // 4 (true est converti en 1)
// console.log("5" * false); // 0 (false est converti en 0)
// let a = 10;
// let b = 5;

// console.log(a + b); // 15 (addition)
// console.log(a - b); // 5  (soustraction)
// console.log(a * b); // 50 (multiplication)
// console.log(a / b); // 2  (division)
// console.log(a % b); // 0  (modulo, reste de la division)
// let x = 10;
// x++; // équivaut à x = x + 1
// console.log(x); // 11

// let y = 5;
// y--; // équivaut à y = y - 1
// console.log(y); // 4
// let base = 2;
// let puissance = 3;
// console.log(base ** puissance); // 8 (équivalent à 2^3)
// let z = 10;
// z += 5;  // équivaut à z = z + 5
// console.log(z); // 15

// z *= 2;  // équivaut à z = z * 2
// console.log(z); // 30

// z /= 3;  // équivaut à z = z / 3
// console.log(z); // 10
// console.log(5 == '5');  // true (comparaison après conversion)
// console.log(5 === '5'); // false (comparaison stricte)

// console.log(5 != '5');  // false (5 est égal à '5' après coercition)
// console.log(5 !== '5'); // true (types différents)
// let a = 10;
// let b = 5;

// console.log(a > b);  // true (a est supérieur à b)
// console.log(a < b);  // false (a n'est pas inférieur à b)
// console.log(a >= 10); // true (a est supérieur ou égal à 10)
// console.log(b <= 5);  // true (b est inférieur ou égal à 5)
// let a = 10;
// let b = 5;

// console.log(a > b);  // true (a est supérieur à b)
// console.log(a < b);  // false (a n'est pas inférieur à b)
// console.log(a >= 10); // true (a est supérieur ou égal à 10)
// console.log(b <= 5);  // true (b est inférieur ou égal à 5)
// let x = 10;
// let y = 20;

// console.log(x > 5 && y > 15); // true (les deux conditions sont vraies)
// console.log(x > 15 && y > 15); // false (seule la deuxième condition est vraie)
// let a = 10;
// let b = 5;

// console.log(a > 5 || b > 10); // true (seule la première condition est vraie)
// console.log(a < 5 || b > 10); // false (aucune des deux conditions n'est vraie)
// let age = 25;
// let estEtudiant = true;

// if (age > 18 && age < 30 && estEtudiant) {
//     console.log("La personne est un jeune étudiant.");
// }
// // condition ? expression_si_vrai : expression_si_faux;
// Utilisation de l’opérateur ternaire
// L'opérateur ternaire est une forme concise de la structure conditionnelle if...else. Il permet d'évaluer une condition et de retourner une des deux valeurs, en fonction de cette condition.

// Syntaxe :

// condition ? expression_si_vrai : expression_si_faux;

// // let age = 18;
// // let statut = (age >= 18) ? "Adulte" : "Mineur";
// // console.log(statut); // Adulte
// // L'opérateur ternaire peut également être utilisé pour des expressions plus complexes, bien que dans certains cas, il soit préférable d'utiliser des structures conditionnelles classiques pour plus de lisibilité.

// // let score = 75;
// // let resultat = (score >= 50) ? "Réussi" : "Échoué";
// // console.log(resultat); // Réussi
// // L'opérateur ternaire peut être imbriqué, mais cela peut rapidement rendre le code difficile à lire. Voici un exemple d’imbrication :

// // javascript
// // Copier le code
// // let age = 25;
// // let categorie = (age < 18) ? "Mineur" : (age < 65) ? "Adulte" : "Senior";
// // console.log(categorie); // Adulte
// // Dans ce cas, il serait plus lisible d’utiliser une structure if...else.

// // Exemple complet avec un formulaire :
// // Supposons que nous souhaitons afficher un message en fonction de l’âge saisi dans un formulaire. Nous pouvons utiliser l’opérateur ternaire pour simplifier la logique :

// let age = 20;
// let message = (age >= 18) ? "Vous êtes majeur." : "Vous êtes mineur.";
// console.log(message); // Affiche : Vous êtes majeur.
// // Résumé des bonnes pratiques avec les opérateurs :
// // Utilisez l'opérateur ternaire pour des conditions simples, mais pour des cas plus complexes, privilégiez if...else pour la lisibilité.
// // Privilégiez === à == pour éviter les erreurs liées à la coercition de types.
// // Combinez les opérateurs logiques pour créer des conditions plus complexes, mais veillez à ce que les expressions restent compréhensibles.
// // Incrémentation (++) et décrémentation (--) peuvent être utilisés pour modifier rapidement une valeur numérique.
// // Évitez les imbrications trop complexes d’opérateurs ternaires, car cela rend le code difficile à lire.
// // En comprenant les opérateurs et expressions en JavaScript, vous gagnerez en flexibilité et pourrez écrire des conditions et des calculs plus complexes avec plus de clarté et d'efficacité.
// // Boucles et conditions en JavaScript
// // Les boucles et les conditions permettent d’exécuter des blocs de code en fonction de certaines conditions ou de manière répétée. Cette section couvre les structures conditionnelles telles que if, else, else if, et switch, ainsi que les différentes boucles disponibles en JavaScript (for, while, do...while, for...in, for...of). Nous aborderons également l’utilisation des instructions break et continue pour contrôler le flux d'exécution.
// // // 1. Conditions en JavaScript
// // Les conditions permettent d'exécuter certaines portions de code en fonction de la valeur d'une expression booléenne (true ou false).

// // Structure if, else if, else
// // La structure if, else if, et else permet de tester plusieurs conditions et d’exécuter différents blocs de code en fonction des résultats de ces tests.

// // Syntaxe :

// // javascript
// // Copier le code
// if (condition) {
//     // Code exécuté si la condition est vraie
// } else if (autreCondition) {
//     // Code exécuté si la première condition est fausse mais celle-ci est vraie
// } else {
//     // Code exécuté si toutes les conditions précédentes sont fausses
// }
// // Exemple :

// // javascript
// // Copier le code
// let age = 20;

// if (age < 18) {
//     console.log("Vous êtes mineur.");
// } else if (age >= 18 && age < 65) {
//     console.log("Vous êtes adulte.");
// } else {
//     console.log("Vous êtes senior.");
// }
// // Structure switch
// // La structure switch est utile lorsqu'il s'agit de comparer une variable ou une expression à plusieurs valeurs possibles. Elle est souvent utilisée pour remplacer des chaînes d'instructions if...else if lorsqu'il s'agit de comparer des valeurs spécifiques.

// // Syntaxe :

// // javascript
// // Copier le code
// switch (expression) {
//     case valeur1:
//         // Code exécuté si expression correspond à valeur1
//         break;
//     case valeur2:
//         // Code exécuté si expression correspond à valeur2
//         break;
//     default:
//         // Code exécuté si expression ne correspond à aucune des valeurs précédentes
// }
// // Exemple :

// // javascript
// // Copier le code
// let jour = "lundi";

// switch (jour) {
//     case "lundi":
//         console.log("Aujourd'hui, c'est lundi.");
//         break;
//     case "mardi":
//         console.log("Aujourd'hui, c'est mardi.");
//         break;
//     case "mercredi":
//         console.log("Aujourd'hui, c'est mercredi.");
//         break;
//     default:
//         console.log("Jour inconnu.");
// }
// // Le mot-clé break est important pour arrêter l'exécution des autres blocs case une fois qu'une correspondance a été trouvée.

// // 2. Boucles en JavaScript
// // Les boucles permettent de répéter l’exécution d’un bloc de code tant qu'une condition reste vraie.

// // Boucle for
// // La boucle for est utilisée lorsque vous savez à l'avance combien de fois le code doit être exécuté.

// // Syntaxe :

// // javascript
// // Copier le code
// for (initialisation; condition; incrémentation) {
//     // Code à exécuter à chaque itération
// }
// // Exemple :

// // javascript
// // Copier le code
// for (let i = 0; i < 5; i++) {
//     console.log("Itération n°", i);
// }
// // Boucle while
// // La boucle while continue d'exécuter le code tant que la condition est vraie.

// // Syntaxe :

// // javascript
// // Copier le code
// while (condition) {
//     // Code à exécuter tant que la condition est vraie
// }
// // Exemple :

// // javascript
// // Copier le code
// // let compteur = 0;

// while (compteur < 5) {
//     console.log("Compteur :", compteur);
//     compteur++;
// }
// // Boucle do...while
// // La boucle do...while est similaire à la boucle while, sauf qu'elle exécute toujours le code au moins une fois, car la condition est vérifiée après l'exécution du bloc.

// // Syntaxe :

// // javascript
// // Copier le code
// do {
//     // Code exécuté au moins une fois
// } while (condition);
// // Exemple :

// // javascript
// // Copier le code
// let compteur = 0;

// do {
//     console.log("Compteur :", compteur);
//     compteur++;
// } while (compteur < 5);
// // Boucle for...in
// // La boucle for...in est utilisée pour parcourir les propriétés d'un objet.

// // Syntaxe :

// // javascript
// // Copier le code
// for (propriété in objet) {
//     // Code à exécuter pour chaque propriété de l'objet
// }
// // Exemple :

// // javascript
// // Copier le code
// let personne = {
//     nom: "John",
//     âge: 30,
//     ville: "Paris"
// };

// for (let clé in personne) {
//     console.log(clé + ": " + personne[clé]);
// }
// // Dans cet exemple, la boucle parcourt chaque propriété de l’objet personne et affiche son nom et sa valeur.

// // Boucle for...of
// // La boucle for...of est utilisée pour parcourir les éléments d’un objet itérable comme un tableau, une chaîne de caractères, ou un objet Map/Set.

// // Syntaxe :

// // javascript
// // Copier le code
// for (élément of objetItérable) {
//     // Code à exécuter pour chaque élément
// }
// // Exemple :

// // javascript
// // Copier le code
// let nombres = [10, 20, 30, 40];

// for (let nombre of nombres) {
//     console.log(nombre);
// }
// Ici, la boucle for...of parcourt les éléments du tableau et affiche chaque nombre.

// 3. Les instructions break et continue
// Les instructions break et continue permettent de contrôler le flux d'exécution des boucles et des structures conditionnelles.

// Instruction break
// L'instruction break permet de sortir prématurément d'une boucle ou d'un switch.

// Exemple avec une boucle :

// javascript
// Copier le code
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break; // Sort de la boucle lorsque i vaut 5
//     }
//     console.log(i);
// }
// Exemple avec un switch :

// javascript
// Copier le code
// let fruit = "pomme";

// switch (fruit) {
//     case "pomme":
//         console.log("C'est une pomme.");
//         break;
//     case "banane":
//         console.log("C'est une banane.");
//         break;
//     default:
//         console.log("Fruit inconnu.");
// }
// Instruction continue
// L'instruction continue saute l’itération en cours d’une boucle et passe directement à l’itération suivante.

// Exemple :

// javascript
// Copier le code
// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//         continue; // Passe à l'itération suivante si i est pair
//     }
//     console.log(i); // Affiche uniquement les nombres impairs
// }
// Dans cet exemple, tous les nombres pairs sont ignorés grâce à l’instruction continue.

// Résumé des bonnes pratiques avec les boucles et conditions :
// Utilisez les structures if, else if, et else pour les tests de conditions complexes.
// Employez switch lorsque vous devez comparer une même variable à plusieurs valeurs possibles.
// Utilisez la boucle for lorsque vous connaissez le nombre d’itérations à l’avance, et while ou do...while pour des répétitions conditionnelles.
// Préférez la boucle for...in pour parcourir les objets et for...of pour parcourir les tableaux ou autres objets itérables.
// Utilisez break pour sortir d'une boucle ou d'un switch et continue pour passer à l'itération suivante d'une boucle sans terminer l'itération en cours.
// // En maîtrisant ces structures, vous serez capable d'écrire du code plus flexible et efficace pour résoudre des problèmes variés en JavaScript.
// Fonctions de base en JavaScript
// Les fonctions sont un élément fondamental en JavaScript. Elles permettent de regrouper des instructions à exécuter plusieurs fois ou à la demande. Dans cette section, nous allons voir la définition et l'appel de fonctions, l'utilisation de paramètres et valeurs de retour, ainsi que les fonctions anonymes et fléchées (arrow functions).

// 1. Définition et appel de fonctions
// Une fonction en JavaScript est un bloc de code conçu pour effectuer une tâche spécifique. Une fois définie, une fonction peut être appelée à tout moment.

// Définition d'une fonction
// La syntaxe pour définir une fonction en JavaScript est la suivante :

// javascript
// Copier le code
// function nomDeLaFonction() {
//     // Instructions à exécuter
// }
// Exemple :

// javascript
// Copier le code
// function saluer() {
//     console.log("Bonjour tout le monde !");
// }
// Appel d'une fonction
// Une fois qu’une fonction est définie, vous pouvez l’appeler à tout moment en utilisant son nom suivi de parenthèses.

// javascript
// Copier le code
// saluer(); // Affiche : Bonjour tout le monde !
// 2. Paramètres et valeurs de retour
// Les fonctions peuvent accepter des paramètres et retourner des valeurs.

// Passage de paramètres
// Les paramètres sont des variables que vous pouvez passer à une fonction pour lui fournir des informations nécessaires à son exécution.

// Syntaxe :

// javascript
// Copier le code
// function nomDeLaFonction(param1, param2) {
//     // Utiliser param1 et param2 dans la fonction
// }
// Exemple :

// javascript
// Copier le code
// function saluer(nom) {
//     console.log("Bonjour, " + nom + " !");
// }

// saluer("Alice"); // Affiche : Bonjour, Alice !
// saluer("Bob");   // Affiche : Bonjour, Bob !
// Valeurs par défaut pour les paramètres
// Vous pouvez également attribuer des valeurs par défaut aux paramètres dans une fonction.

// Exemple :

// javascript
// Copier le code
// function saluer(nom = "inconnu") {
//     console.log("Bonjour, " + nom + " !");
// }

// saluer();         // Affiche : Bonjour, inconnu !
// saluer("Alice");  // Affiche : Bonjour, Alice !
// Valeurs de retour
// Une fonction peut retourner une valeur à l’aide du mot-clé return. Une fois que return est exécuté, la fonction s’arrête immédiatement.

// Syntaxe :

// javascript
// Copier le code
// function nomDeLaFonction() {
//     return valeur;
// }
// Exemple :

// javascript
// Copier le code
// function additionner(a, b) {
//     return a + b;
// }

// let resultat = additionner(5, 3); // 8
// console.log(resultat); // Affiche : 8
// Dans cet exemple, la fonction additionner prend deux paramètres (a et b), et retourne leur somme. La valeur retournée est ensuite stockée dans la variable resultat.

// Sans return
// Si une fonction ne contient pas d’instruction return, elle retourne automatiquement undefined.

// Exemple :

// javascript
// Copier le code
// function sansRetour() {
//     console.log("Cette fonction ne retourne rien.");
// }

// let resultat = sansRetour(); // Affiche "Cette fonction ne retourne rien."
// console.log(resultat); // Affiche : undefined
// 3. Fonctions anonymes
// Une fonction anonyme est une fonction qui n'a pas de nom. Les fonctions anonymes sont souvent utilisées comme fonctions de rappel (callback), par exemple lorsqu'elles sont passées en argument à une autre fonction.

// Fonction anonyme affectée à une variable
// Syntaxe :

// javascript
// Copier le code
// let maFonction = function() {
//     console.log("C'est une fonction anonyme !");
// };
// Exemple :

// javascript
// Copier le code
// let saluer = function(nom) {
//     console.log("Bonjour, " + nom + " !");
// };

// saluer("Charlie"); // Affiche : Bonjour, Charlie !
// Fonction anonyme comme callback
// Exemple :

// javascript
// Copier le code
// setTimeout(function() {
//     console.log("Cette fonction anonyme est exécutée après 2 secondes.");
// }, 2000);
// Dans cet exemple, une fonction anonyme est passée en argument à setTimeout, qui l’exécute après 2 secondes.

// 4. Fonctions fléchées (arrow functions)
// Les fonctions fléchées ou arrow functions sont une syntaxe plus concise introduite en ES6 pour définir des fonctions anonymes. Elles simplifient la syntaxe tout en offrant un comportement lexical pour le mot-clé this (ceci est particulièrement utile dans certains contextes comme les objets et les méthodes).

// Syntaxe d’une fonction fléchée
// javascript
// Copier le code
// let nomDeLaFonction = (param1, param2) => {
//     // Instructions
//     return valeur;
// };
// Si une fonction fléchée a un seul paramètre, vous pouvez omettre les parenthèses.

// Si elle contient une seule instruction, vous pouvez également omettre les accolades et l'instruction return.

// Exemple basique :
// javascript
// Copier le code
// let additionner = (a, b) => a + b;

// console.log(additionner(5, 3)); // Affiche : 8
// Ici, additionner est une fonction fléchée qui prend deux paramètres (a et b) et retourne leur somme. Elle est définie en une seule ligne.

// Exemple avec un seul paramètre :
// javascript
// Copier le code
// let saluer = nom => console.log("Bonjour, " + nom + " !");

// saluer("Sophie"); // Affiche : Bonjour, Sophie !
// Exemple avec plusieurs instructions :
// javascript
// Copier le code
// let calculerSomme = (a, b) => {
//     let somme = a + b;
//     console.log("La somme est : " + somme);
//     return somme;
// };

// calculerSomme(10, 15); // Affiche : La somme est : 25
// Dans cet exemple, comme la fonction contient plusieurs instructions, les accolades sont nécessaires, et le return doit être explicite.

// Arrow functions et this
// Les fonctions fléchées ont un comportement particulier avec le mot-clé this. Contrairement aux fonctions classiques, elles ne créent pas leur propre contexte this, mais héritent de celui du bloc parent.

// Exemple :

// javascript
// Copier le code
// function Personne(nom) {
//     this.nom = nom;

//     setTimeout(() => {
//         console.log("Bonjour, " + this.nom + " !");
//     }, 1000);
// }

// let personne = new Personne("Alice"); // Affiche : Bonjour, Alice !
// Dans cet exemple, la fonction fléchée permet d'accéder à la propriété this.nom qui fait référence à l'objet Personne. Avec une fonction traditionnelle, this aurait été indéfini dans ce contexte.

// Résumé des bonnes pratiques pour les fonctions :
// Utilisez des fonctions nommées lorsque vous avez besoin de réutiliser une fonction ou pour améliorer la lisibilité.
// Utilisez des fonctions anonymes dans des contextes où vous avez besoin d’une fonction temporaire, par exemple dans des callbacks.
// Privilégiez les arrow functions pour les callbacks ou lorsque vous voulez hériter du this du contexte parent.
// Retournez toujours une valeur explicite avec return dans les fonctions qui doivent produire un résultat.
// N'utilisez pas trop de paramètres dans une fonction. Si votre fonction a besoin de trop d’arguments, il pourrait être plus logique de regrouper certains d'entre eux dans un objet.
// Les fonctions sont un pilier de JavaScript, et bien maîtriser leur utilisation vous permettra d’écrire un code plus structuré, maintenable et réutilisable.
