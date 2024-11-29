
// Script pour valider les informations saisies par l'utilisateur 


document.getElementById('form-inscription').addEventListener('submit', function(event) {
  // Empêcher la soumission par défaut pour effectuer la validation
  event.preventDefault();

  // Récupération des valeurs saisies par l'utilisateur
  const prenom = document.getElementById('prenom').value;
  const nom = document.getElementById('nom').value;
  const tel = document.getElementById('tel').value;
  const nomUtilisateur = document.getElementById('nom-utilisateur').value;
  const motDePasse1 = document.getElementById("motDePasse1").value;
  const motDePasse2 = document.getElementById("motDePasse2").value;

  // Fonction pour valider prénom : première lettre majuscule, le reste minuscule
  function validerPrenom(prenom) {
    const regexPrenom = /^[A-Z][a-z]*$/; // Expression régulière
    return regexPrenom.test(prenom);
  }

  // Fonction pour valider nom : tout en majuscules
  function validerNom(nom) {
    const regexNom = /^[A-Z]+$/;
    return regexNom.test(nom);
  }

  // Fonction pour valider téléphone : format ##-###-##-##
  function validerTelephone(tel) {
    const regexTel = /^\d{2}-\d{3}-\d{2}-\d{2}$/;
    return regexTel.test(tel);
  }

  // Fonction pour valider nom d'utilisateur : commence par une lettre, puis lettres, chiffres ou caractères spéciaux
  function validerNomUtilisateur(nomUtilisateur) {
    const regexNomUtilisateur = /^[a-zA-Z][a-zA-Z0-9_-]*$/;
    return regexNomUtilisateur.test(nomUtilisateur);
  }

  // Fonction pour valider mot de passe
  function validerMotDePasse(motDePasse) {
    // Vérifier que le mot de passe contient au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial
    const regexMotDePasse = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    return regexMotDePasse.test(motDePasse);
  }
  
  
  // Vérifier les champs
  if (!validerPrenom(prenom)) {
    alert("Le prénom doit commencer par une lettre majuscule.");
    return;
  }
  
  if (!validerNom(nom)) {
    alert("Le nom doit être en majuscule.");
    return;
  }
  
  if (!validerTelephone(tel)) {
    alert("Le téléphone doit être sous le format ##-###-##-##.");
    return;
  }
  
  if (!validerNomUtilisateur(nomUtilisateur)) {
    alert("Le nom d'utilisateur doit commencer par une lettre et peut contenir des lettres, des chiffres, des tirets (-) ou des underscores (_).");
    return;
  }
  
  // Vérification des mots de passe
  if (!validerMotDePasse(motDePasse1)) {
    alert("Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.");
    return;
  }

  if (motDePasse1 !== motDePasse2) {
    alert("Les mots de passe ne correspondent pas.");
    return;
  }

  // Si tout est valide, rediriger vers la page de connexion
  window.location.href = "index.html";
  
});	// Ferméture addEventListener et function(event)









