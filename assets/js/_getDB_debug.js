export function getDBdebug(){
    const apiUrl = 'http://localhost:3000/api/events';
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
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

    for(let element of data){
        // création de html pour afficher le titre, l'auteur et la description de l'événmenet
        const sectionEvent = document.createElement('section');
        divEvent.appendChild(sectionEvent);
        
        const eventName = document.createElement('h3');
        eventName.textContent = element.name;
        console.log("titre evenement: " + eventName.textContent);
        sectionEvent.appendChild(eventName);

        const eventAuthor = document.createElement('h4');
        eventAuthor.textContent = element.author;
        sectionEvent.appendChild(eventAuthor);

        const eventDescription = document.createElement('p');
        eventDescription.textContent = element.description;
        sectionEvent.appendChild(eventDescription);

        // création du tableau, à l'extérieur de la boucle pour afficher la date si non répétion de la cellule nom / dates 
        const table =document.createElement('table');
        sectionEvent.appendChild(table);

        const headerRow = document.createElement('tr');
        table.appendChild(headerRow);
        
        const nameHeader = document.createElement('th');
        headerRow.appendChild(nameHeader);
        nameHeader.textContent = 'Nom / Dates';


        for(let eventDates of element.dates){
            const cell = document.createElement('td');
            headerRow.appendChild(cell);
            cell.textContent = eventDates.date;


            const rowAttendees = document.createElement('tr');
            const cellAttendees = document.createComment('td');
            const cellName = document.createComment('th');
            cellName.textContent = attendantsList;
            rowAttendees.appendChild(cellName);
            for (let attendee of eventDates.attendees){
                if(attendee.available === null){
                    cellAttendees.innerHTML = "pas de réponse";
                }
                else if (!attendee.available){
                    cellAttendees.textContent = "non";
                }
                else{
                    cellAttendees.textContent = "oui";
                }
            }
            rowAttendees.appendChild(cellAttendees);
            table.appendChild(rowAttendees);
        }
    };
}