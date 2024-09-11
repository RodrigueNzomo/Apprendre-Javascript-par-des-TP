// 1. Changer le texte d'un élément
let estTexteOriginal = true;

function changerTexte() {
  const titreElement = document.getElementById("titre");
  titreElement.innerText = estTexteOriginal
    ? "Manipulation du DOM (Document Object Model)"
    : "Interactions utilisateur";
  estTexteOriginal = !estTexteOriginal;
}

// 2. Changer le style d'un élément
let estStyleOriginal = true;

function changerStyle() {
  const texteElement = document.getElementById("texteStyle");
  if (texteElement) {
    texteElement.style.color = estStyleOriginal ? "red" : "black";
    texteElement.style.fontSize = estStyleOriginal ? "24px" : "16px";
    texteElement.style.fontWeight = estStyleOriginal ? "bold" : "normal";
    estStyleOriginal = !estStyleOriginal;
  } else {
    console.warn("L'élément avec l'ID 'texteStyle' n'existe pas.");
  }
}

// 3. Ajouter du contenu dynamiquement
function ajouterContenu() {
  const conteneur = document.getElementById("conteneur");
  if (conteneur) {
    const nouveauParagraphe = document.createElement("p");
    nouveauParagraphe.innerText =
      "Voici un nouveau paragraphe ajouté dynamiquement.";
    conteneur.appendChild(nouveauParagraphe);
  } else {
    console.warn("Le conteneur n'existe pas.");
  }
}

// 4. Supprimer ou restaurer un élément
let estSupprime = false;
let elementSupprime = null;

function alternerSuppression() {
  const container = document.getElementById("conteneur");
  if (container) {
    if (!estSupprime) {
      elementSupprime = document.getElementById("aSupprimer");
      if (elementSupprime) {
        elementSupprime.remove();
        estSupprime = true;
      } else {
        console.warn("L'élément à supprimer n'existe pas.");
      }
    } else {
      if (elementSupprime) {
        container.appendChild(elementSupprime);
        estSupprime = false;
      }
    }
  } else {
    console.warn("Le conteneur n'existe pas.");
  }
}

// 5. Modifier plusieurs éléments en même temps
function modifierTous() {
  const elements = document.getElementsByClassName("paragraphe");
  for (let element of elements) {
    element.style.backgroundColor = "lightblue";
    element.style.padding = "10px";
  }
}
