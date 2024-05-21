import { createForm } from "./form.js";


//Display of Form
function displayForm() {
    const selectButton = document.querySelector('#AddButton');
    console.log(selectButton);

    if (selectButton) {
        selectButton.addEventListener('click', (event) => {
            const displayForm = document.querySelector('.form form');
            if (displayForm) {
                // displayForm.style.display = 'block'; e
                // console.log(displayForm);
                console.log("tu cliques sur moi bien joué");
            } else {
                console.error("Le formulaire avec la classe '.form' n'a pas été trouvé.");
            }
        });
    } else {
        console.error("Le bouton avec l'ID 'AddButton' n'a pas été trouvé.");
    }
}


//take value of input
function takeInputValue(){

    let addInfo = document.querySelector('#form');

    addInfo.addEventListener('submit', (elem) =>{
        elem.preventDefault();
        console.log("test de l'event : "+addInfo);
        let title = document.querySelector('#event-title');
        console.log("le titre = "+title.value);
    
    })


}

export { displayForm };
export { takeInputValue };