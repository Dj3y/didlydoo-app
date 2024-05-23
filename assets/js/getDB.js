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

         const dateEvent = attendantsList(element.dates);
         const sectionAttendees = document.createElement('div');
         sectionAttendees.classList.add("attendees-list");
         sectionEvent.appendChild(sectionAttendees);
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

}


