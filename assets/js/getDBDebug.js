export async function getDBdebug() {
      const divEvent = document.querySelector(".events");
    
      try {
            const RESPONSE = await fetch("http://localhost:3000/api/events/");
        
            let allInfoApi = {};
            let attendeeTab = [];
        
            if (!RESPONSE.ok) {
                  console.log("Fetch Error");
                } else {
                      const RESULT = await RESPONSE.json();
                      console.log(RESULT);
                
                        // Accéder aux propriétés de l'objet sans afficher les détails
                        // RESULT.forEach(event => {
                        // console.log(`ID: ${event.id}`);
                    
                    
                        // // console.log(`Name: ${event.name}`);
                        // console.log(`Description: ${event.description}`);
                        // console.log(`Author: ${event.author}`);
                        // const ADDP = document.createElement('p');
                        // ADDP.textContent=''+event.dates.attendees[0].name;
                        // let QueryTest = document.querySelector('.events');
                    
                        // QueryTest.appendChild(ADDP);
                        // console.log(`Created At: ${event.created_at}`);
                        // console.log(`Last Modification: ${event.last_modification}`);
                        // console.log(`Number of Modifications: ${event.num_modification}`);
                    
                        // console.log(`Dates:`);
                        // event.dates.forEach(dateObj => {
                        //       console.log(`  Date: ${dateObj.date}`);
                        //     });
                        //   });
                        
                        
                          for (let i = 0; i < RESULT.length; i++) {
                                let id, name, author, description, last_modification, num_modification, dates_of_date, name_attendee, available_attendee ;
                                id = RESULT[i].id;
                                name = RESULT[i].name;
                                author = RESULT[i].author;
                                description = RESULT[i].description;
                                last_modification = RESULT[i].last_modification;
                                num_modification = RESULT[i].num_modification;
                            
                                // name_attendee = RESULT[i].id;
                                // available_attendee = RESULT[i].id;
                            
                                    // for(let y = 0; y<RESULT[1].dates.length;y++){
                                    //         dates_of_date = RESULT[y].dates[y].date;
                                    //         console.log(dates_of_date);
                                    //     }
                                
                                console.log(id);
                                console.log(name);
                                console.log(author);
                                console.log(description);
                                console.log(last_modification);
                                console.log(num_modification);
                                
                                // console.log(name_attendee);
                                // console.log(available_attendee);
                                
                                
                                name = RESULT.name;
                                author = RESULT.author;
                                description = RESULT.description;
                                last_modification = RESULT.last_modification;
                                num_modification = RESULT.num_modification;
                                dates_of_date = RESULT.dates[i].date;
                                name_attendee = RESULT.dates[i].attendees[i].name;
                                available_attendee = RESULT.dates[i].attendees[i].available;
                                console.log("TEST " + i);
                                  }
                            }
  } catch (error) {
      console.log("Fetch not found: ", error);
    }
}

//  }
 
//  export function getDBdebug(){
//     const apiUrl = 'http://localhost:3000/api/events';
//     const divEvent = document.querySelector('.events');
//     fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//         divEvent.innerHTML = "";
//         data.forEach(element => {
//             // création de html pour afficher le titre, l'auteur et la description de l'événmenet
//             const sectionEvent = document.createElement('section');
//             const eventName = document.createElement('h3');
//             eventName.textContent = element.name;
//             console.log("titre evenement: " + eventName.textContent);
//             divEvent.appendChild(sectionEvent);
//             sectionEvent.appendChild(eventName);
//             const eventAuthor = document.createElement('h4');
//             eventAuthor.textContent = element.author;
//             sectionEvent.appendChild(eventAuthor);

//             const eventDescription = document.createElement('p');
//             eventDescription.textContent = element.description;
//             sectionEvent.appendChild(eventDescription);

//             // création du tableau; à l'extérieur de la boucle pour afficher la date si non répétion de la cellule nom / dates 
//             const table =document.createElement('table');
//             sectionEvent.appendChild(table);
//             const headerRow = document.createElement('tr');
//             const dateHeader = document.createElement('th');
//             dateHeader.textContent = 'Nom / Dates';
//             headerRow.appendChild(dateHeader);
//             table.appendChild(headerRow);

//             element.dates.forEach((dateInfo)=>{
//                 const dataCell = document.createElement('td');
//                 dataCell.textContent = dateInfo.date;
//                 headerRow.appendChild(dataCell);
                
//                 console.log("TEEEEEEEEEEEEEEEEEEEEEEEST = "+dateInfo.date)
//                 if(dateInfo.attendees && Array.isArray(dateInfo.attendees) && dateInfo.attendees.length > 0) {
//                     dateInfo.attendees.forEach((attendee) => {
//                         const attendeesRow =document.createElement('tr');
//                         const attendeeCell = document.createElement('td');
//                         const availableCell = document.createElement('td');
//                         attendeeCell.textContent = attendee.name;
//                         availableCell.textContent = attendee.available;
//                         attendeesRow.appendChild(attendeeCell);
//                         attendeesRow.appendChild(availableCell);
//                         table.appendChild(attendeesRow);
//                     }) 
//                 }
//             })
//         });
//     })
//     .catch((error) => {
//         console.log("Error loading: ", error);
//     })
// }
