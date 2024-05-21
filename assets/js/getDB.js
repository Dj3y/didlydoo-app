export function getDB(){
    const apiUrl = 'http://localhost:3000/api/events';
    const divEvent = document.querySelector('.events');
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data)=>{
        console.log(data);
        // efface les événement précédents
        // sectionEvent.innerHTML = '';
        
        //affichage des événements existants
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

            const table = document.createElement('table');
            const tableRowDates = document.createElement('tr');
            const tableRowVide = document.createElement('td');
            const tableDataDates = document.createElement('td');

            // const tableRowUtil = document.createElement('tr');
            // const tableDataUtil = document.createElement('tr');

            divEvent.appendChild(table);
            table.appendChild(tableRowDates);
            tableRowDates.appendChild(tableRowVide);
            tableRowDates.appendChild(tableDataDates);
            // table.appendChild(tableRowUtil);
            // tableRowUtil.appendChild(tableDataUtil);

            element.dates.forEach((dateInfo) => {
                const tableRow = document.createElement('tr');
                const tableCell = document.createElement('td');
                tableCell.textContent = dateInfo.date;
                tableRow.appendChild(tableCell);
                const attendeesCell = document.createElement('td');
                const attendeesList = dateInfo.attendees.map(attendee => attendee.name).join(', ');
                attendeesCell.textContent = attendeesList;
                tableRow.appendChild(attendeesCell);
                table.appendChild(tableRow);
            })
        });

        
    })
    .catch((error) => {
        console.log("Error loading: ", error);
    })
}