export function getDB(){
    const apiUrl = 'http://localhost:3000/api/events';
    const divEvent = document.querySelector('.events');
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data)=>{
        console.log(data);
        // efface les événement précédents
        divEvent.innerHTML = '';
            for(let i = 1; i <= data.length; i++){
                console.log("longeur : " + data.length);
                const sectionEvent = document.createElement('section');
                const eventName= document.createElement('h3');
                eventName.textContent =data.name;
                console.log(data.name);
                divEvent.appendChild(sectionEvent);
                sectionEvent.appendChild(eventName);
    
                const eventAuthor = document.createElement('h4');
                eventAuthor.textContent = data.author;
                sectionEvent.appendChild(eventAuthor);
    
                const eventDescription = document.createElement('p');
                eventDescription.textContent = data.description;
                sectionEvent.appendChild(eventDescription);
    
                // création du tableau 
                // création des en-têtes 
                const table = document.createElement('table');
                const headerRow = document.createElement('tr');
                const dateHeader = document.createElement('th');
                dateHeader.textContent = 'Nom / Dates';
                headerRow.appendChild(dateHeader);
    
                sectionEvent.appendChild(table);
                table.appendChild(headerRow);
                headerRow.appendChild(dateHeader);
            }
         
        // //affichage des événements existants
        data.forEach((element) => {
            const sectionEvent = document.createElement('section');
            const eventName= document.createElement('h3');
            eventName.textContent = element.name;
            console.log(element.name);
            divEvent.appendChild(sectionEvent);
            sectionEvent.appendChild(eventName);

            const eventAuthor = document.createElement('h4');
            eventAuthor.textContent = element.author;
            sectionEvent.appendChild(eventAuthor);

            const eventDescription = document.createElement('p');
            eventDescription.textContent = element.description;
            sectionEvent.appendChild(eventDescription);

            // création du tableau 
            // création des en-têtes 
            const table = document.createElement('table');
            const headerRow = document.createElement('tr');
            const dateHeader = document.createElement('th');
            dateHeader.textContent = 'Nom / Dates';
            headerRow.appendChild(dateHeader);

            sectionEvent.appendChild(table);
            table.appendChild(headerRow);
            headerRow.appendChild(dateHeader);
           

            element.dates.forEach((dateInfo) => {
                const dataCell = document.createElement('td');
                dataCell.textContent = dateInfo.date;
                // console.log(dataCell.textContent);
                headerRow.appendChild(dataCell);

                const attendeesRow = document.createElement('tr');
                const attendeesCell =document.createElement('td');
                const attendeesList = dateInfo.attendees.map(attendee => attendee.name);
                // récuperation du nom SOUCI
                const attendeesLength = dateInfo.attendees.length;
                console.log(attendeesLength);
                // const attendeesList = dateInfo.attendees.name;
                attendeesRow.textContent = attendeesList;
                console.log(attendeesRow.textContent);
                // attendeesCell.appendChild(attendeesList);
                attendeesRow.appendChild(attendeesCell);
                table.appendChild(attendeesRow);

            //     const availableCell = document.createElement('tr');
            //     const availableList =document.createElement('td');
            //     const availableListContent = dateInfo.attendees.map(attendee => attendee.available).join(', ');
            //     availableList.textContent = availableListContent;
            //     availableCell.textContent =availableList;
            })
        });
        
    })
    .catch((error) => {
        console.log("Error loading: ", error);
    })
}