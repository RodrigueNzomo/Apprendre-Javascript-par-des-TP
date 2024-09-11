// 1. Changer le texte d'un élément
// Modifions le contenu d'un élément HTML, comme un paragraphe ou un titre.
// function changerTexte() {
//   document.getElementById("titre").innerText =
//     "Manipulation du DOM (Document Object Model)";
// }
// Déclare un état pour suivre quel texte est actuellement affiché
let estTexteOriginal = true;

function changerTexte() {
  const titreElement = document.getElementById("titre");

  if (estTexteOriginal) {
    titreElement.innerText = "Manipulation du DOM (Document Object Model)";
  } else {
    titreElement.innerText = "Interactions utilisateur";
  }

  // Alterne l'état à chaque clic
  estTexteOriginal = !estTexteOriginal;
}
// 2. Changer le style d'un élément
// Modifions l'apparence d'un élément en utilisant JavaScript pour modifier son style.
// function changerStyle() {
//   document.getElementById("texteStyle").style.color = "red";
//   document.getElementById("texteStyle").style.fontSize = "24px";
// }
// Variable pour suivre l'état du style (original ou modifié)
let estStyleOriginal = true;

function changerStyle() {
  const texteElement = document.getElementById("texteStyle");

  if (estStyleOriginal) {
    // Nouveau style
    texteElement.style.color = "red";
    texteElement.style.fontSize = "24px";
    texteElement.style.fontWeight = "bold";
  } else {
    // Retour au style original
    texteElement.style.color = "black";
    texteElement.style.fontSize = "16px";
    texteElement.style.fontWeight = "normal";
  }

  // Alterne l'état à chaque clic
  estStyleOriginal = !estStyleOriginal;
}
// 3. Ajouter du contenu dynamiquement
// Ajoutons un nouvel élément dans la page (comme un paragraphe ou une liste) lorsqu'un utilisateur interagit avec un bouton.
function ajouterContenu() {
  let nouveauParagraphe = document.createElement("p");
  nouveauParagraphe.innerText =
    "Voici un nouveau paragraphe ajouté dynamiquement.";
  document.getElementById("conteneur").appendChild(nouveauParagraphe);
  //   La fonction createElement crée un nouvel élément paragraphe, puis il est ajouté au conteneur à l'aide de appendChild.
}
//4. Supprimer un élément du DOM
// Supprimons un élément spécifique du DOM lorsqu'un bouton est cliqué.
// function supprimerElement() {
//   let element = document.getElementById("aSupprimer");
//   element.remove();
// }
// Variable pour suivre l'état de l'élément (présent ou supprimé)
let estSupprime = false;
let elementSupprime = null; // Variable pour stocker l'élément supprimé

function alternerSuppression() {
  const container = document.getElementById("container");

  if (!estSupprime) {
    // Si l'élément est présent, on le supprime
    elementSupprime = document.getElementById("aSupprimer");
    elementSupprime.remove();
    estSupprime = true;
  } else {
    // Si l'élément est supprimé, on le restaure
    container.appendChild(elementSupprime);
    estSupprime = false;
  }
}
// 5. Modifier plusieurs éléments en même temps
// Changeons le style de tous les éléments d'une certaine classe à la fois.
function modifierTous() {
  let elements = document.getElementsByClassName("paragraphe");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "lightblue";
    elements[i].style.padding = "10px";
  }
}
// 6. Remplacer complètement un élément HTML
// Remplaçons un élément existant par un autre élément avec du contenu différent.
function remplacerElement() {
  let nouvelElement = document.createElement("div");
  nouvelElement.innerText = "Contenu complètement remplacé.";

  let ancienElement = document.getElementById("remplacer");
  ancienElement.replaceWith(nouvelElement);
}
// // 6. Remplacer complètement un élément HTML
// let estRemplace = false;
// let ancienElement = null;

// function remplacerElement() {
//   const container = document.getElementById("conteneur");
//   if (container) {
//     if (!estRemplace) {
//       const nouvelElement = document.createElement("div");
//       nouvelElement.innerText = "Contenu complètement remplacé.";
//       ancienElement = document.getElementById("remplacer");
//       if (ancienElement) {
//         ancienElement.replaceWith(nouvelElement);
//         estRemplace = true;
//       } else {
//         console.warn("L'élément à remplacer n'existe pas.");
//       }
//     } else {
//       if (ancienElement) {
//         container.appendChild(ancienElement);
//         estRemplace = false;
//       }
//     }
//   } else {
//     console.warn("Le conteneur n'existe pas.");
//   }
// }
// // Variable pour suivre l'état de remplacement
// let estRemplace1 = false;
// let ancienElement1 = null; // Variable pour stocker l'élément remplacé

// function remplacerElement() {
//   const conteneur = document.getElementById("conteneur");

//   if (!conteneur) {
//     console.warn("Le conteneur n'existe pas.");
//     return;
//   }

//   if (!estRemplace) {
//     // Créer un nouvel élément pour remplacer l'élément existant
//     const nouvelElement = document.createElement("div");
//     nouvelElement.innerText = "Contenu complètement remplacé.";

//     // Obtenir l'élément à remplacer
//     ancienElement = document.getElementById("remplacer");
//     if (ancienElement) {
//       // Remplacer l'élément existant
//       ancienElement.replaceWith(nouvelElement);
//       estRemplace = true;
//     } else {
//       console.warn("L'élément à remplacer n'existe pas.");
//     }
//   } else {
//     // Restaurer l'ancien élément
//     if (ancienElement) {
//       // Ajouter l'ancien élément au conteneur
//       conteneur.appendChild(ancienElement);
//       estRemplace = false;
//     }
//   }
// }
// 7. Modifier des attributs d'un élément
// Modifions les attributs d'un élément, comme une image ou un lien.
function changerImage() {
  // Get the image element
  const imageElement = document.getElementById("monImage");

  // Check if the element exists to avoid potential errors
  if (imageElement) {
    const newSrc = "image/image2.png"; // Correct path and extension

    // Change the image only if it's not already set to the new image
    if (imageElement.src !== newSrc) {
      imageElement.src = newSrc;
      imageElement.alt = "Image 2";
    }
  } else {
    console.error("Element with id 'monImage' not found.");
  }
}
// 8. Cacher et afficher un élément
// Ajoutons une fonction pour cacher ou afficher un élément en fonction de son état actuel.
function toggleAffichage() {
  let texte = document.getElementById("texteCache");
  if (texte.style.display === "none") {
    texte.style.display = "block";
  } else {
    texte.style.display = "none";
  }
}
