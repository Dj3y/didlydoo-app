import { validateForm } from "./validation_form.js";

// création formulaire
export function createForm(){
    const divForm = document.querySelector('.form');
    const form = document.createElement('form');
    form.id='form';
    // form.setAttribute('action', '/index.html');
    divForm.appendChild(form);

    // bouton pour cacher le formulaire
    const btnFermer = document.createElement('button');
    btnFermer.classList.add('btn-fermer');
    btnFermer.textContent = "X";
    btnFermer.setAttribute('type', 'submit');
    form.appendChild(btnFermer);
    btnFermer.addEventListener('click', event=>{
        divForm.display = "none";
    });
    // titre 
    const labelTitle = document.createElement('label');
    labelTitle.textContent = "Titre: ";
    labelTitle.setAttribute('for', 'event-title');
    form.appendChild(labelTitle);
    const inputTitle = document.createElement('input');
    inputTitle.setAttribute('type', 'text');
    inputTitle.setAttribute('id', 'event-title');
    inputTitle.setAttribute('name', 'event-title');
    form.appendChild(inputTitle);

    // auteur
    const labelAuthor = document.createElement('label');
    labelAuthor.textContent = "Auteur: ";
    labelAuthor.setAttribute('for', 'event-author');
    form.appendChild(labelAuthor);
    const inputAuthor = document.createElement('input');
    inputAuthor.setAttribute('type', 'text');
    inputAuthor.setAttribute('id', 'event-author');
    inputAuthor.setAttribute('name', 'event-author');
    form.appendChild(inputAuthor);

    // date
    const labelDate = document.createElement('label');
    labelDate.textContent = "Date: ";
    labelDate.setAttribute('for', 'event-date');
    form.append(labelDate);
    const inputDate = document.createElement('input');
    inputDate.setAttribute('type', 'date');
    inputDate.setAttribute('id', 'event-date');
    inputDate.setAttribute('name', 'event-date');
    form.append(inputDate);

    // description
    const labelDescription = document.createElement('label');
    labelDescription.textContent = "Description: ";
    labelDescription.setAttribute('for', 'event-description');
    form.append(labelDescription);
    const inputDescription = document.createElement('input');
    inputDescription.setAttribute('type', 'text');
    inputDescription.setAttribute('id', 'event-description');
    inputDescription.setAttribute('name', 'event-description');
    form.append(inputDescription);

    // bouton 
    const btnForm = document.createElement('button');
    btnForm.classList.add('btnForm');
    btnForm.textContent = "Ajouter";
    btnForm.setAttribute('type', 'submit');
    form.appendChild(btnForm);
    btnForm.addEventListener('click', validateForm);

    
    form.style.display='none';
}