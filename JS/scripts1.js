// Tableaux de textes pour alterner les messages
// textesID1 contient plusieurs messages qui s'afficheront dans le premier élément ID1.
let textesID1 = [
  "Le JavaScript côté client est exécuté dans le navigateur de l’utilisateur.",
  "Le JavaScript est léger, interprété, et fonctionne avec HTML et CSS.",
  "JavaScript permet des interactions dynamiques dans les pages web.",
  "Avec JavaScript, on peut manipuler le DOM pour modifier le contenu.",
];
// textesID2 contient plusieurs messages pour le deuxième élément ID2.
let textesID2 = [
  "JavaScript a pu être exécuté en dehors du navigateur, notamment sur un serveur.",
  "Node.js permet l'exécution de JavaScript côté serveur.",
  "Avec JavaScript côté serveur, on peut créer des APIs RESTful.",
  "Le JavaScript côté serveur est souvent utilisé pour des applications temps réel.",
];
// compteurID1 et compteurID2 sont utilisés pour suivre la position dans les tableaux de textes.
// À chaque clic, la fonction incrémente le compteur et affiche le texte suivant dans le tableau correspondant.
// Variables de compteur
let compteurID1 = 0;
let compteurID2 = 0;
// Cyclage des textes :
// Les compteurs sont remis à zéro après avoir atteint la fin du tableau grâce à l'opérateur modulo (%). Ainsi, les textes sont affichés en boucle.
function changerTexte1() {
  document.getElementById("ID1").innerText = textesID1[compteurID1];
  compteurID1 = (compteurID1 + 1) % textesID1.length; // Revenir au début quand on atteint la fin
}

function changerTexte2() {
  document.getElementById("ID2").textContent = textesID2[compteurID2];
  compteurID2 = (compteurID2 + 1) % textesID2.length; // Revenir au début quand on atteint la fin
}
// illustrations de  différentes interactions utilisateur basées sur des événements courants en JavaScript, tels que les clics, les mouvements de souris, la soumission de formulaires, etc. Chaque exemple montre comment créer une action en réponse à ces événements.
// 1. Événement de clic (Click Event)
// Tableau de textes pour alterner les messages
const textesID3 = [
  "Cet exemple modifie le texte d'un élément lorsqu'un bouton est cliqué.",
  "1. Événement de clic (Click Event)",
  // "Chaque clic fait défiler les différents messages.",
  // "Continuez à cliquer pour voir plus de messages!",
];

// Variable de compteur
let compteurID3 = textesID3.length - 1; // Démarrer à la fin du tableau

document.getElementById("bouton").addEventListener("click", function () {
  document.getElementById("ID3").innerText = textesID3[compteurID3];
  compteurID3 = (compteurID3 - 1 + textesID3.length) % textesID3.length; // Revenir au début quand on atteint la fin
});

// 2. Événement de survol (Mouseover Event)
// Ici, le texte change lorsque la souris passe au-dessus d'un élément, puis revient à la normale lorsque la souris s'en éloigne.

const titreSurvol = document.getElementById("ID4 titreSurvol");

titreSurvol.addEventListener("mouseover", function () {
  titreSurvol.innerText =
    "Ici, le texte change lorsque la souris passe au-dessus d'un élément, puis revient à la normale lorsque la souris s'en éloigne.";
});

titreSurvol.addEventListener("mouseout", function () {
  titreSurvol.innerText = "2. Événement de survol (Mouseover Event)";
});
// 3. Événement de soumission de formulaire (Submit Event)
// Cet exemple empêche le formulaire de soumettre et affiche une alerte lorsque l'utilisateur appuie sur le bouton de soumission.

document
  .getElementById("ID5 monFormulaire")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche la soumission réelle du formulaire
    alert("Formulaire soumis : " + document.getElementById("nom").value);
  });
// 4. Événement de saisie (Input Event)
// Cet exemple met à jour en temps réel un élément HTML avec le texte saisi dans un champ de texte.
// Référence au champ de texte et à l'élément d'affichage
const champTexte = document.getElementById("ID6 saisieTexte");
const texteAffiche = document.getElementById("ID6 texteAffiche");

// Fonction pour mettre à jour le texte en direct
function mettreAJourTexte() {
  texteAffiche.innerText = champTexte.value;
}

// Événement d'entrée pour mettre à jour le texte en direct
champTexte.addEventListener("input", mettreAJourTexte);

// Fonction pour vider le champ de texte après 10 secondes
function viderChampTexte() {
  champTexte.value = ""; // Vider le champ de texte
  mettreAJourTexte(); // Mettre à jour l'affichage pour refléter le texte vide
}

// Définir un délai de 10 secondes pour vider le champ de texte
setTimeout(viderChampTexte, 10000); // 10000 ms = 10 secondes

// document
//   .getElementById("ID6 saisieTexte")
//   .addEventListener("input", function () {
//     document.getElementById("ID6 texteAffiche").innerText = this.value;
//   });
// 5. Événement de double clic (Double Click Event)
// Dans cet exemple, un message s'affiche lorsque l'utilisateur effectue un double clic sur un bouton.
// document
document
  .getElementById("doubleClickBtn")
  .addEventListener("dblclick", function () {
    document.getElementById("doubleClickMessage").innerText =
      "5. Événement de double clic (Double Click Event)!";
  });

// 6. Événement de touche pressée (Keydown Event)
// Ce code affiche un message lorsque l'utilisateur appuie sur une touche spécifique du clavier.
document
  .getElementById("champTexte")
  .addEventListener("keydown", function (event) {
    document.getElementById("messageClavier").innerText =
      "Touche appuyée : " + event.key;
  });
// 7. Événement de redimensionnement de la fenêtre (Resize Event)
// Un message s'affiche à chaque fois que la fenêtre du navigateur est redimensionnée.
window.addEventListener("resize", function () {
  document.getElementById("tailleFenetre").innerText =
    "Largeur de la fenêtre : " +
    window.innerWidth +
    "px, Hauteur : " +
    window.innerHeight +
    "px";
});
// 8. Événement de défilement (Scroll Event)
// Ce script surveille l'événement de défilement et affiche la position actuelle du défilement sur la page.
window.addEventListener("scroll", function () {
  document.getElementById("scrollPosition").innerText =
    "Position de défilement : " + window.scrollY + "px";
});
// 9. Événement de changement de sélection (Change Event)
// Cet exemple affiche le choix sélectionné par l'utilisateur dans un menu déroulant.
document.getElementById("choix").addEventListener("change", function () {
  document.getElementById("selectionAffiche").innerText = this.value;
});
// 10. Événement de chargement de la page (Load Event)
// Cet exemple affiche un message lorsque la page est complètement chargée.
window.addEventListener("load", function () {
  document.getElementById("chargementMessage").innerText =
    "La page est complètement chargée!";
});
// 1. Interaction avec un bouton (clic)
// Dans cet exemple, un clic sur un bouton change la couleur d'arrière-plan du texte.
function changerCouleur() {
  // Générer une couleur aléatoire en hexadécimal
  var couleurAleatoire =
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  // Appliquer la couleur aléatoire à l'arrière-plan de l'élément avec l'ID "titre"
  document.getElementById("titre").style.backgroundColor = couleurAleatoire;
}
// 2. Détection du mouvement de la souris (mousemove)
// Ici, le mouvement de la souris sur un élément HTML met à jour en temps réel les coordonnées de la souris.
function afficherCoordonnees(event) {
  var x = event.clientX;
  var y = event.clientY;
  document.getElementById("position").innerText =
    "Coordonnées : (" + x + ", " + y + ")";
}
// 3. Soumission de formulaire
// Cet exemple montre comment gérer la soumission d'un formulaire en affichant une alerte lorsque le formulaire est soumis.
function soumettreFormulaire() {
  var nom = document.getElementById("nom").value;
  alert("Formulaire soumis. Nom: " + nom);
  return false; // Empêche la soumission réelle du formulaire pour cet exemple
}
// 4. Double clic (dblclick)
// Dans cet exemple, un double-clic sur un paragraphe change sa couleur.
function changerCouleurDoubleClick() {
  document.getElementById("paragraphe").style.color = "red";
}
// 5. Changement de sélection (change)
// Cet exemple montre comment capturer l'événement change d'un élément select pour mettre à jour le texte affiché en fonction de l'option choisie.
function afficherChoix() {
  var choix = document.getElementById("menu").value;
  if (choix) {
    document.getElementById("affichageChoix").innerText =
      "Vous avez sélectionné : " + choix;
  } else {
    document.getElementById("affichageChoix").innerText =
      "Veuillez sélectionner une option.";
  }
}
// 6. Survol avec la souris (mouseover / mouseout)
// Cet exemple change l'arrière-plan d'un élément lorsque la souris passe dessus et revient à sa couleur d'origine lorsque la souris quitte l'élément.
function changerFond() {
  document.getElementById("zone").style.backgroundColor = "lightblue";
}

function retablirFond() {
  document.getElementById("zone").style.backgroundColor = "";
}
// 7. Appui sur une touche (keydown)
// Cet exemple écoute l'événement keydown et affiche la touche appuyée dans un paragraphe.
// document.addEventListener("keydown", function (event) {
//   document.getElementById("toucheAppuyee").innerText =
//     "Touche appuyée : " + event.key;
// });
// Sélectionner une fois l'élément pour éviter des recherches répétées dans le DOM
// const toucheAppuyeeElem = document.getElementById("toucheAppuyee");

// // Vérifier si l'élément existe avant d'ajouter l'écouteur d'événement
// if (toucheAppuyeeElem) {
//   document.addEventListener("keydown", (event) => {
//     toucheAppuyeeElem.innerText = `Touche appuyée : ${event.key}`;
//   });
// }
// Basic Keydown Listener
// document.addEventListener("keydown", function (event) {
//   const keyPressed = event.key; // Get the key that was pressed
//   const display = document.getElementById("output1"); // Get the output paragraph
//   display.innerText = `You pressed: ${keyPressed}`; // Display the pressed key
// });
// document.addEventListener("keydown", function (event) {
//   document.getElementById("toucheAppuyee").innerText =
//     "Touche appuyée : " + event.key;
// });
// // Keydown Listener using Arrow Function
// document.addEventListener("keydown", (event) => {
//   const keyPressed = event.key; // Get the key that was pressed
//   const display = document.getElementById("output2"); // Get the output paragraph
//   display.innerText = `You pressed: ${keyPressed}`; // Display the pressed key
// });
// Keydown Listener displaying Key Code
// document.addEventListener("keydown", function (event) {
//   const keyPressed = event.key; // Get the key that was pressed
//   const keyCode = event.code; // Get the key code
//   const display = document.getElementById("output3"); // Get the output paragraph
//   display.innerText = `You pressed: ${keyPressed} (Key Code: ${keyCode})`; // Display the pressed key and its code
// });
// 8. Focus sur un champ de texte (focus / blur)
// Cet exemple met en surbrillance un champ de texte lorsque l'utilisateur y entre (focus) et le remet à son état normal lorsqu'il en sort (blur).
function mettreEnSurbrillance() {
  document.getElementById("champTexte1").style.backgroundColor = "yellow";
}

function retirerSurbrillance() {
  document.getElementById("champTexte1").style.backgroundColor = "";
}
// ********************************************
function mettreEnSurbrillance() {
  document.getElementById("champTexte2").style.border = "2px solid blue";
}

function retirerSurbrillance() {
  document.getElementById("champTexte2").style.border = "";
}
