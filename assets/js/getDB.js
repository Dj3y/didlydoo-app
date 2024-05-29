import { editEvents } from "./editEvent.js";

export function getDB(){
    const apiUrl = 'http://localhost:3000/api/events';
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data)=>{
        console.log(data);
        eventsInfos(data);        
    })
    .catch((error) => {
        console.log("Error loading: ", error);
    })
}
const attendantsList = (dateInfo) => {
    let attendeesSet = new Set();
    for (let date of dateInfo){
        date.attendees.forEach((attendee) => attendeesSet.add(attendee.name));
    }
    return [...attendeesSet];
}

function eventsInfos(data) {
    // div dans laquelle les événement vont être afficher
    const divEvent = document.querySelector('.events');
    // vider le div
    divEvent.innerHTML = "";    
    console.log("nom " + attendantsList);  
    for (let element of data){
         // création de html pour afficher le titre, l'auteur et la description de l'événmenet
        const divEventInfo = document.createElement('div');
        divEventInfo.classList.add('div-events-info');
        divEvent.appendChild(divEventInfo);

        const sectionInfoEvent = document.createElement('section');
        sectionInfoEvent.classList.add('section-infos-event');
        divEventInfo.appendChild(sectionInfoEvent);

        const divInfoEditEvent = document.createElement('div');
        divInfoEditEvent.classList.add('div-info-edit-event'); 
         
        const eventName = document.createElement('h3');
        eventName.classList.add('event-title');
        eventName.textContent = element.name;
        // console.log("titre evenement: " + eventName.textContent);
        sectionInfoEvent.appendChild(eventName);
 
        const eventAuthor = document.createElement('h4');
        eventAuthor.classList.add('event-author');
        eventAuthor.textContent = element.author;
        sectionInfoEvent.appendChild(eventAuthor);
 
        const eventDescription = document.createElement('p');
        eventDescription.classList.add('event-description');
        eventDescription.textContent = element.description;
        sectionInfoEvent.appendChild(eventDescription);
         //  edit et delete bouton 
        const divEditDelete = document.createElement('div');
        divEditDelete.classList.add('div-btn-edit-delete');

        const btnEdit = document.createElement('img');
        btnEdit.setAttribute('src', 'assets/images/pencil-solid.svg');
        btnEdit.classList.add('btn-edit');
        btnEdit.id = element.id;
        // console.log("id " + btnEdit.id);
        divEventInfo.appendChild(divEditDelete);

        const btnDelete = document.createElement('img');

        btnDelete.setAttribute('src', 'assets/images/trash-can-solid.svg');  
        btnDelete.id = element.id+1;
        btnDelete.classList.add('trashDelete');
        divEditDelete.appendChild(btnEdit);
        divEditDelete.appendChild(btnDelete);
        divInfoEditEvent.appendChild(divEditDelete);
        divInfoEditEvent.appendChild(sectionInfoEvent);
        divEventInfo.appendChild(divInfoEditEvent);
        

        btnEdit.addEventListener('click',() => {
            // console.log("ligne 78 " + element.id);
            // formEdit(btnEdit.id);
            // formulaire pour modification
            const divFormEdit = document.createElement('div');
            divFormEdit.classList.add('div-form-edit');
            const formEdit = document.createElement('form');
            formEdit.id='edit-form';
            divFormEdit.appendChild(formEdit);
            const divBtnEdit = document.querySelector('.div-btn-edit-delete');
            divBtnEdit.appendChild(divFormEdit);
            // titre
            const labelTitleEdit = document.createElement('label');
            labelTitleEdit.textContent = "Titre: ";
            labelTitleEdit.setAttribute('for', 'event-title-edit');
            formEdit.append(labelTitleEdit);
            const inputTitleEdit = document.createElement('input');
            inputTitleEdit.setAttribute('type', 'text');
            inputTitleEdit.setAttribute('id', 'event-title-edit');
            inputTitleEdit.setAttribute('name', 'event-title-edit');
            formEdit.appendChild(inputTitleEdit);

            const labelAuthorEdit = document.createElement('label');
            labelAuthorEdit.textContent = "Author: ";
            labelAuthorEdit.setAttribute('for', 'event-author-edit');
            formEdit.appendChild(labelAuthorEdit);
            const inputAuthorEdit = document.createElement('input');
            inputAuthorEdit.setAttribute('type', 'text');
            inputAuthorEdit.setAttribute('id', 'event-author-edit');
            inputAuthorEdit.setAttribute('name', 'event-author-edit');
            formEdit.appendChild(inputAuthorEdit);
        
            // description
            const labelDescriptionEdit = document.createElement('label');
            labelDescriptionEdit.textContent = "Description: ";
            labelDescriptionEdit.setAttribute('for', 'event-description-edit');
            formEdit.append(labelDescriptionEdit);
            const inputDescriptionEdit = document.createElement('input');
            inputDescriptionEdit.setAttribute('type', 'text');
            inputDescriptionEdit.setAttribute('id', 'event-description-edit');
            inputDescriptionEdit.setAttribute('name', 'event-description-edit');
            formEdit.append(inputDescriptionEdit);
            // bouton 
            const btnFormEdit = document.createElement('button');
            btnFormEdit.textContent = "Mise à jour";
            btnFormEdit.setAttribute('type', 'submit');
            formEdit.appendChild(btnFormEdit);
            // console.log("ligne 112 " + btnEdit.id);
            // console.log(inputTitleEdit.value);
            btnFormEdit.addEventListener('click', editEvents(btnEdit.id));
            }
        );

    

        const dateEvent = attendantsList(element.dates);
        const sectionAttendees = document.createElement('div');
        sectionAttendees.classList.add("attendees-list");
        divEventInfo.appendChild(sectionAttendees);
         

        const sectionDetailAttendees = document.createElement('section');
        sectionDetailAttendees.classList.add("attendees-detail");
        sectionAttendees.appendChild(sectionDetailAttendees);
        sectionDetailAttendees.innerHTML ='<h4 class="utilisateurs">utilisateurs</h4>';
        for (let utilisateur of dateEvent){
            sectionDetailAttendees.innerHTML += `<p>${utilisateur}</p>`;
         }
        for (let eventDate of element.dates){
            const sectionDate = document.createElement('section');
            sectionDate.classList.add('date-event');
            sectionDate.innerHTML = `<h4>${eventDate.date}</h4>`;
            sectionAttendees.appendChild(sectionDate);

            const attendees = document.createElement('div');
            sectionDate.appendChild(attendees);
            attendees.classList.add("attendees");

            for (let attendee of eventDate.attendees){
                if (attendee.available === null){
                    attendees.innerHTML += "<p>pas de réponse</p>";
                }
                else if(attendee.available){
                    attendees.innerHTML += "<p>oui</p>";
                }
                else {
                    attendees.innerHTML += "<p>non</p>";
                }
            }
         }
        
    }
    let trash = document.querySelector('.trashDelete'); // Assurez-vous de remplacer '.your-trash-element' par le sélecteur approprié
    trash.addEventListener('click', (event) => {
        let test = console.log("je suis trooop fort zebi");
    });
}



