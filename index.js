// Sélection des éléments du formulaire
	const connexionForm = document.getElementById('connexionForm'); // Récupération de l'élément du formulaire via son ID
	const username = document.getElementById('idUserName'); // Champ de saisie pour le nom d'utilisateur
	const password = document.getElementById('idPassword'); // Champ de saisie pour le mot de passe
	const errorMessage = document.getElementById('error-message'); // Élément où afficher les messages d'erreur

// Écouter l'événement submit
connexionForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Empêcher le comportement par défaut du formulaire (rechargement de la page)

    // Récupérer les valeurs des champs
    const usernameValue = username.value.trim(); // Supprimer les espaces inutiles autour de la saisie
    const passwordValue = password.value.trim(); // Faire de même pour le mot de passe

    // Validation simple
    if (usernameValue == '' || passwordValue == '') {
        errorMessage.textContent = "Tous les champs sont obligatoires."; // Message d'erreur pour champs vides
    } else if (usernameValue == 'admin' && passwordValue !== 'Niit@2024') {
        // Vérification des valeurs entrées contre des identifiants codés en dur
        errorMessage.textContent = "Le mot de passe saisi est incorrect !!!"; // Message d'erreur pour mot de passe incorrect
    } else if (usernameValue !== 'admin' && passwordValue === 'Niit@2024') {
        // Vérification des valeurs entrées contre des identifiants codés en dur
        errorMessage.textContent = "Le nom d'utilisateur saisi est incorrect !!!"; // Message d'erreur pour nom d'utilisateur incorrect
    } 
    
    else {
        // Si tout est correct, supprimer les messages d'erreur
        errorMessage.textContent = "";

        // Redirection vers la page de tableau de bord
        window.location.href = 'principale.htm';
    }
});
