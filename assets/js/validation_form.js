// fonction pour vérification du formulaire
export function validateForm(){
    const inputTitle = document.getElementById('event-title');
    const inputTitleValue = inputTitle.value;
    // vérification qu'il y a du contenu dans l'input
    if (inputTitleValue.length === 0){
        alert('veillez écrire un titre');
        return false;
    }
    // vérification que la longueur ne depasse pas 256 caractères
    else if(inputTitleValue.length >= 256){
        alert('le titre ne doit pas dépasser 256 caractères.');
        return false;
    }

    const inputAuthor = document.getElementById('event-author');
    const inputAuthorValue = inputAuthor.value;
    if(inputAuthorValue.length === 0){
        alert('veillez écrire le nom de l\'auteur');
        return false;
    }
    else if (inputAuthorValue.length >= 256){
        alert('le nom de l\'auteur ne doit pas dépasser 256 caractères.');
        return false;
    }

    const inputDate = document.getElementById('event-date');
    const inputDateValue = new Date(inputDate.value);    
    const dateToday = new Date();
    console.log(dateToday);
    if (inputDateValue === dateToday){
        alert('Vous ne pouvez pas choisir la date d\'aujourd\'hui');
        return false;
    }

    const inputDescription = document.getElementById('event-description');
    const inputDescriptionValue = inputDescription.value;
   if(inputDescriptionValue.length === 0){
        alert('veillez écrire une déscription de l\'évenemtnt');
        return false;
   }
    else if(inputDescriptionValue.length >= 256){
        alert('la description ne doit pas dépasser 256 caractères.');
        return false;
    }
    // le formulaire est valide
    return true;
}