
// Script pour ajouter un nouveau collaborateur lorsque l'utilisateur clique sur Ajouter un collaborateur

// Ajouter un événement lorsque l'utilisateur clique sur le bouton "ajouterCollaborateur"
document.getElementById('ajouterCollaborateur').addEventListener('click', function() {

    // Récupérer la div des collaborateurs : il s'agit de la div qui contient tous les collaborateurs
    const collaborateursDiv = document.getElementById('collaborateurs');

    // Créer un nouveau div pour un collaborateur
    const newCollaborateurDiv = document.createElement('div');
    newCollaborateurDiv.classList.add('collaborateur');

    // Création d'un nouveau champ de saisie pour Id_collaborateur
    const idInput = document.createElement('input');
    idInput.type = 'text';
    idInput.name = `id_employe${collaborateursDiv.children.length + 1}`;
    idInput.size = 10;
    idInput.placeholder = `Id_Collaborateur${collaborateursDiv.children.length + 1}`;

    // Création d'un nouveau champ de saisie pour le prénom et nom du collaborateur
    const nomInput = document.createElement('input');
    nomInput.type = 'text';
    nomInput.name = `nom_employe${collaborateursDiv.children.length + 1}`;
    nomInput.size = 35;
    nomInput.placeholder = 'Prénom + Nom';

    // Ajouter les champs créés précédemment dans le nouveau div
    newCollaborateurDiv.appendChild(idInput);
    newCollaborateurDiv.appendChild(document.createTextNode(' ')); // Espacement
    newCollaborateurDiv.appendChild(nomInput);
    newCollaborateurDiv.appendChild(document.createElement('br')); // Retour à la ligne
    newCollaborateurDiv.appendChild(document.createElement('br'));

    // Ajouter le div au container des collaborateurs
    collaborateursDiv.appendChild(newCollaborateurDiv);
});

	
/*Script pour envoyer certaines informations vers la page "mes_projets" */	
	// Ajouter un événement sur la soumission du formulaire
		document.getElementById('new_project_form').addEventListener('submit', function(event) {
            	event.preventDefault();  // Empêche l'envoi du formulaire classique

            // Récupération des données nécessaires
            const idProjet = document.getElementById('id_projet').value;
            const intituleProjet = document.getElementById('id_intitule_projet').value;
            const dateDebut = document.getElementById('id_date_debut').value;
            const dateEcheance = document.getElementById('id_date_echeance').value;

            // Création de l'objet projet avec les informations à envoyer vers la page "mes_projets"
            const projet = {
                id: idProjet,
                intitule: intituleProjet,
                debut: dateDebut,
                echeance: dateEcheance,
                statut: 'en attente',  // Valeur par défaut
            };

            // Récupérer les projets déjà enregistrés dans le localStorage (s'il y en a)
            let projets = JSON.parse(localStorage.getItem('projets')) || [];

            // Ajouter le projet à la liste
            projets.push(projet);

            // Sauvegarder la liste mise à jour dans le localStorage
            localStorage.setItem('projets', JSON.stringify(projets));

            // Rediriger l'utilisateur vers la page des projets (mes_projets.html)
            window.location.href = 'mes_projets.html';
        });
        
        
  // Script pour calculer le coût total automatiquement
  
  // Attendre que le DOM soit entièrement chargé
document.addEventListener("DOMContentLoaded", function() {

    // Sélectionner les champs de saisie des coûts
    const masseSalariale = document.getElementById('masseSalariale');
    const materiel = document.getElementById('materiel');
    const sousTraitance = document.getElementById('sousTraitance');
    const frais = document.getElementById('frais');
    const coutTotal = document.getElementById('coutTotal');

    // Fonction pour calculer la somme des montants
    function calculerCoutTotal() {
        const masseSalarialeValue = parseInt(masseSalariale.value) || 0; // Conversion des données saisies en entier
        const materielValue = parseInt(materiel.value) || 0;
        const sousTraitanceValue = parseInt(sousTraitance.value) || 0;
        const fraisValue = parseInt(frais.value) || 0;

        // Calculer le total
        const total = masseSalarialeValue + materielValue + sousTraitanceValue + fraisValue;

        // Afficher le total dans le champ "Coût Total"
        coutTotal.value = total
    }

    // Ajouter des écouteurs d'événements pour chaque champ de coût
    masseSalariale.addEventListener('input', calculerCoutTotal);
    materiel.addEventListener('input', calculerCoutTotal);
    sousTraitance.addEventListener('input', calculerCoutTotal);
    frais.addEventListener('input', calculerCoutTotal);

});

