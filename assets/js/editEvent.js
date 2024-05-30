// import { getDB } from "./getDB.js";
// getDB();

export function editEvents(id){



    console.log(id);
    const titleEvent =document.querySelector('.event-title-edit').value;
    console.log("ligne 8  = "+titleEvent);
    const descriptionEvent = document.querySelector('.event-description-edit').value;
    console.log("ligne 10 = "+descriptionEvent);
    
    const authorEvent = document.querySelector('.event-author-edit').value;
    console.log("ligne 13 = "+authorEvent);
    
    // let titleEdit = document.querySelector("#event-title");
    //   titleEdit.textContent='';

    //   let authorEdit  = document.querySelector("#event-author");
    //   authorEdit.textContent='';

    //   let dateEdit  = document.querySelector("#event-date");
    //   dateEdit.textContent='';

    //   let descriptionEdit  = document.querySelector("#event-description");
    //   descriptionEdit.textContent='';
    const edit =  {
        name: titleEvent,
        author: authorEvent,
        description: descriptionEvent
      }
        // "author": author.value,
    // updateEvent(id, edit)
    // .then(editEvent => {
    //   console.log(editEvent);
    //   alert('Event mise à jour!');
    // })
    // .catch(error => console.error(error));

    // async function updateEvent(id, edit){
    //     const response = await fetch(`http://localhost:3000/api/events/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type' : 'application/json',
    //         },
    //         body : JSON.stringify(edit),
    //     });
    //     if(response.ok){
    //         console.log('uptate fait');
    //     }
    //     else{
    //         console.log('erreur');
    //     }
    //     return response.json();
    // }
}