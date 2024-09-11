// function validerFormulaire() {
//   const nom = document.getElementById("nom").value;
//   const messageErreur = document.getElementById("messageErreur");

//   if (nom === "") {
//     messageErreur.innerText = "Le champ nom ne peut pas être vide.";
//     return false; // Empêche l'envoi du formulaire
//   }

//   messageErreur.innerText = ""; // Clear error message
//   return true; // Permet d'envoyer le formulaire
// }
function validerChampsObligatoires() {
  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;
  const telephone = document.getElementById("telephone").value;
  const messageErreurObligatoires = document.getElementById(
    "messageErreurObligatoires"
  );

  if (!nom || !email || !telephone) {
    messageErreurObligatoires.innerText = "Tous les champs sont obligatoires.";
    messageErreurObligatoires.classList.add("erreur"); // Appliquer la classe CSS pour le style
    return false; // Empêche l'envoi du formulaire
  }

  messageErreurObligatoires.innerText = ""; // Réinitialise le message d'erreur
  messageErreurObligatoires.classList.remove("erreur");
  return true; // Permet d'envoyer le formulaire
}
// 1. Validation d'un champ de texte vide
// Valider si un champ de texte a été rempli avant de soumettre le formulaire.
function validerFormulaire() {
  const nom = document.getElementById("nom1").value;
  const messageErreur = document.getElementById("messageErreur");

  if (nom === "") {
    messageErreur.innerText = "Le champ nom ne peut pas être vide.";
    return false; // Empêche l'envoi du formulaire
  }

  messageErreur.innerText = ""; // Clear error message
  return true; // Permet d'envoyer le formulaire
}
// 2. Validation d'une adresse email
// Vérifier si l'utilisateur a entré une adresse email valide.
function validerEmail() {
  const email = document.getElementById("email").value;
  const messageErreurEmail = document.getElementById("messageErreurEmail");
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regexEmail.test(email)) {
    messageErreurEmail.innerText = "Veuillez entrer une adresse email valide.";
    return false; // Empêche l'envoi du formulaire
  }

  messageErreurEmail.innerText = ""; // Clear error message
  return true; // Permet d'envoyer le formulaire
}
// 3. Validation des mots de passe
// Valider si les mots de passe respectent une longueur minimale et si les deux mots de passe correspondent.
function validerMotDePasse() {
  const motDePasse = document.getElementById("motDePasse").value;
  const confirmationMotDePasse = document.getElementById(
    "confirmationMotDePasse"
  ).value;
  const messageErreurMotDePasse = document.getElementById(
    "messageErreurMotDePasse"
  );

  if (motDePasse.length < 6) {
    messageErreurMotDePasse.innerText =
      "Le mot de passe doit contenir au moins 6 caractères.";
    return false;
  }

  if (motDePasse !== confirmationMotDePasse) {
    messageErreurMotDePasse.innerText =
      "Les mots de passe ne correspondent pas.";
    return false;
  }

  messageErreurMotDePasse.innerText = ""; // Clear error message
  return true;
}
// 4. Validation d'une case à cocher (Acceptation des conditions d'utilisation)
// Valider si l'utilisateur a coché une case pour accepter les conditions d'utilisation avant de soumettre le formulaire.
function validerConditions() {
  const conditions = document.getElementById("conditions").checked;
  const messageErreurConditions = document.getElementById(
    "messageErreurConditions"
  );

  if (!conditions) {
    messageErreurConditions.innerText =
      "Vous devez accepter les conditions d'utilisation.";
    return false; // Empêche l'envoi du formulaire
  }

  messageErreurConditions.innerText = ""; // Clear error message
  return true;
}
// 5. Validation de la longueur d'un numéro de téléphone
// Vérifier si le numéro de téléphone entré est de la bonne longueur.
function validerNumeroTelephone() {
  const telephone = document.getElementById("telephone").value;
  const messageErreurTelephone = document.getElementById(
    "messageErreurTelephone"
  );

  if (telephone.length !== 10) {
    messageErreurTelephone.innerText =
      "Le numéro de téléphone doit contenir exactement 10 chiffres.";
    return false; // Empêche l'envoi du formulaire
  }

  messageErreurTelephone.innerText = ""; // Clear error message
  return true;
}
// 6. Validation des champs obligatoires multiples
// Valider plusieurs champs obligatoires (nom, email, et téléphone) avant de permettre l'envoi du formulaire.
function validerChampsObligatoires() {
  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;
  const telephone = document.getElementById("telephone").value;
  const messageErreurObligatoires = document.getElementById(
    "messageErreurObligatoires"
  );

  if (!nom || !email || !telephone) {
    messageErreurObligatoires.innerText = "Tous les champs sont obligatoires.";
    return false; // Empêche l'envoi du formulaire
  }

  messageErreurObligatoires.innerText = ""; // Clear error message
  return true;
}
