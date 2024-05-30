import { getDB } from "./getDB.js";
getDB();


export function editEvents(id){
  // let testButtonEdit = document.querySelector('.event-btn-edit');
  testButtonEdit.addEventListener('click', (edit)=>{
      const takeTitle = document.querySelector('.event-title-edit');
      console.log('TEST TAKE TITLE = '+takeTitle);
  })
    // console.log("l'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiid = "+id);

    // console.log("j'essaie de récupérer l'id du bouton = "+test);
    // const titleEvent =document.querySelector('.event-title-edit').value;
    // console.log("TEEEEEEEEEEEEEST = "+titleEvent)
    // const descriptionEvent = document.querySelector('.event-description-edit').value;

    // let titleEdit = document.querySelector("#event-title");
    //   // titleEdit.textContent='';
    //   console.log(titleEdit);

    //   let authorEdit  = document.querySelector("#event-author");
    //   // authorEdit.textContent='';

    //   let dateEdit  = document.querySelector("#event-date");
    //   // dateEdit.textContent='';

    //   let descriptionEdit  = document.querySelector("#event-description");
    //   // descriptionEdit.textContent='';
    // const edit =  {
    //     name: titleEvent,
    //     author: authorEvent,
    //     description: descriptionEvent
    //   }
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