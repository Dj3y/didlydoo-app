// création formulaire
export function createForm(){
    const divForm = document.querySelector('.form');
    const form = document.createElement('form');
    divForm.appendChild(form);

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
    btnForm.textContent = "Ajouter";
    form.appendChild(btnForm);
}