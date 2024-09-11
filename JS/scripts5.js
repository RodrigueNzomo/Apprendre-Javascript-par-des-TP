function chargerDonnees() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.txt", true); // Charger un fichier texte, JSON ou autre depuis le serveur

  xhr.onload = function () {
    if (xhr.status === 200) {
      document.getElementById("resultat").innerHTML = xhr.responseText; // Affiche le contenu du fichier
    } else {
      document.getElementById("resultat").innerHTML = "Erreur de chargement.";
    }
  };

  xhr.onerror = function () {
    document.getElementById("resultat").innerHTML = "Erreur de réseau.";
  };

  xhr.send();
}
// Explication :
// XMLHttpRequest est utilisé pour envoyer une requête GET vers le serveur afin de charger le fichier data.txt sans recharger la page. Le résultat est affiché dans un div avec l’ID resultat.
// Explication :
// Un formulaire simple envoie une requête POST avec le nom saisi dans un champ de texte.
// event.preventDefault() empêche le formulaire de recharger la page lors de la soumission.
// Les données sont envoyées en utilisant xhr.send(), et la réponse est affichée dans la div avec l'ID resultat.
function envoyerDonnees(event) {
  event.preventDefault(); // Empêche le rechargement de la page

  const xhr = new XMLHttpRequest();
  const nom = document.getElementById("nom").value;

  xhr.open("POST", "serveur.php", true); // Envoi d'une requête POST vers le serveur
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onload = function () {
    if (xhr.status === 200) {
      document.getElementById("resultat").innerHTML = xhr.responseText; // Affiche la réponse du serveur
    } else {
      document.getElementById("resultat").innerHTML = "Erreur lors de l'envoi.";
    }
  };

  xhr.onerror = function () {
    document.getElementById("resultat").innerHTML = "Erreur de réseau.";
  };

  xhr.send("nom=" + encodeURIComponent(nom));
}
// 3. Utilisation de fetch pour charger des données depuis le serveur
// Cet exemple utilise l'API fetch, une approche moderne et plus simple que XMLHttpRequest.
function chargerDonneesFetch() {
  fetch("data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erreur lors du chargement");
      }
      return response.json(); // Parse le JSON
    })
    .then((data) => {
      document.getElementById("resultat").innerHTML = JSON.stringify(
        data,
        null,
        2
      );
    })
    .catch((error) => {
      document.getElementById("resultat").innerHTML =
        "Erreur : " + error.message;
    });
}
// Explication :
// fetch est utilisé pour envoyer une requête GET vers un fichier JSON et afficher les données dans la div resultat.
// response.json() parse la réponse JSON et l'affiche dans un format lisible.
// 4. Envoyer des données via fetch en utilisant POST
// Voici un exemple où les données sont envoyées au serveur via une requête POST en utilisant l’API fetch.
function envoyerDonneesFetch(event) {
  event.preventDefault(); // Empêche le rechargement de la page

  const nom = document.getElementById("nom").value;

  fetch("serveur.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "nom=" + encodeURIComponent(nom),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }
      return response.text(); // Parse la réponse en texte
    })
    .then((data) => {
      document.getElementById("resultat").innerHTML = data; // Affiche la réponse
    })
    .catch((error) => {
      document.getElementById("resultat").innerHTML =
        "Erreur : " + error.message;
    });
}
// Explication :
// Ici, l'API fetch est utilisée pour envoyer une requête POST avec le nom saisi dans le champ de texte.
// Le résultat est affiché dynamiquement dans l'élément resultat sans recharger la page.
