import { createForm } from "./form.js";

// Display of Form
function displayForm() {
  const selectButton = document.querySelector("#AddButton");
  console.log(selectButton);

  if (selectButton) {
    selectButton.addEventListener("click", (event) => {
      const displayFormElement = document.querySelector(".form form");
      if (displayFormElement) {
        // displayFormElement.style.display = 'block';
        // console.log(displayFormElement);
        console.log("tu cliques sur moi bien joué");
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

  if (addInfo) {
    addInfo.addEventListener("submit", (elem) => {
      elem.preventDefault();

      // console.log("test de l'event : "+addInfo);

      let title = document.querySelector("#event-title");
      console.log("le titre = " + title.value);

      let author = document.querySelector("#event-author");
      console.log(author.value);

      let date = document.querySelector("#event-date");
      console.log(date.value);

      let description = document.querySelector("#event-description");
      console.log(description.value);

      const eventData = 
        {
          "name": title.value,
          "dates":[date.value],
          "author" : author.value,
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
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
    });
  } else {
    console.error("Le formulaire avec l'ID 'form' n'a pas été trouvé.");
  }
}

export { displayForm, takeInputValue };
