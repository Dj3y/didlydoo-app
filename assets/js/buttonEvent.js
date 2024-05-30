import { createForm } from "./form.js";

// Display of Form
function displayForm() {
  const selectButton = document.querySelector("#AddButton");
  console.log(selectButton);

  if (selectButton) {
    selectButton.addEventListener("click", (event) => {
      const displayFormElement = document.querySelector(".form form");
      if (displayFormElement) {
        displayFormElement.style.display = 'flex';
        console.log(displayFormElement);
        // console.log("tu cliques sur moi bien joué");
      } else {
        console.error(
          "Le formulaire avec la classe '.form' n'a pas été trouvé."
        );
      }
    });
  } else {
    console.error("Le bouton avec l'ID 'AddButton' n'a pas été trouvé.");
  }
}

// Take value of input
function takeInputValue() {
  let addInfo = document.querySelector("#form");
  
//localStorage ==============================================================================================================
  if (addInfo) {
    // Pré-remplir les champs du formulaire avec les valeurs du localStorage s'ils existent
    document.querySelector("#event-title").value = localStorage.getItem('event-title') || '';
    document.querySelector("#event-author").value = localStorage.getItem('event-author') || '';
    document.querySelector("#event-date").value = localStorage.getItem('event-date') || '';
    document.querySelector("#event-description").value = localStorage.getItem('event-description') || '';

    // Ajouter des écouteurs d'événements pour stocker les valeurs des champs dans le localStorage
    document.querySelector("#event-title").addEventListener("input", (e) => {
      localStorage.setItem('event-title', e.target.value);
    });

    document.querySelector("#event-author").addEventListener("input", (e) => {
      localStorage.setItem('event-author', e.target.value);
    });

    document.querySelector("#event-date").addEventListener("input", (e) => {
      localStorage.setItem('event-date', e.target.value);
    });

    document.querySelector("#event-description").addEventListener("input", (e) => {
      localStorage.setItem('event-description', e.target.value);
    });

    addInfo.addEventListener("submit", (elem) => { //Event sur le bouton d'envoi des données vers l'API
      elem.preventDefault();


      let title = document.querySelector("#event-title");
      console.log("le titre = " + title.value);

      let author = document.querySelector("#event-author");
      console.log(author.value);

      let date = document.querySelector("#event-date");
      console.log(date.value);

      let description = document.querySelector("#event-description");
      console.log(description.value);

//localStorage ==============================================================================================================

      const eventData =  //on va stocker les valeurs des inputs dans un objet, qu'on va ensuite envoyer à l'API avec les éléments nécessaires
        {
          "name": title.value,
          "dates": [date.value],
          "author": author.value,
          "description": description.value
        }

      fetch('http://localhost:3000/api/events/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventData)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Effacer les valeurs du localStorage après soumission réussie
        // localStorage.removeItem('event-title');
        // localStorage.removeItem('event-author');
        // localStorage.removeItem('event-date');
        // localStorage.removeItem('event-description');
      })
      .catch(error => console.error('Error:', error));

      addInfo.style.display = "none";
    });
  } else {
    console.error("Le formulaire avec l'ID 'form' n'a pas été trouvé.");
  }
}

// Appeler la fonction pour initialiser le formulaire
takeInputValue();


export { displayForm, takeInputValue };
