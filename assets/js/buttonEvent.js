import { createForm } from "./form.js";

// Appeler la fonction createForm pour créer le formulaire lors du chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    createForm();
    displayForm();
});

function displayForm() {
    const selectButton = document.querySelector('#AddButton');
    console.log(selectButton);

    if (selectButton) {
        selectButton.addEventListener('click', (event) => {
            const displayForm = document.querySelector('.form form');
            if (displayForm) {
                displayForm.style.display = 'block'; // Afficher le formulaire
                console.log(displayForm);
                console.log("tu cliques sur moi bien joué");
            } else {
                console.error("Le formulaire avec la classe '.form' n'a pas été trouvé.");
            }
        });
    } else {
        console.error("Le bouton avec l'ID 'AddButton' n'a pas été trouvé.");
    }
}

export { displayForm };