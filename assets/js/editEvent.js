// import { getDB } from "./getDB.js";
// getDB();

export function editEvents(id){
    console.log(id);
    const titleEvent =document.getElementsByClassName('event-title-edit').value;
    const descriptionEvent = document.getElementsByClassName('event-description-edit').value;
    const edit = {
        name: titleEvent,
        description : descriptionEvent
    };

    // updateEvent(id, edit)
    // .then(editEvent => {
    //   console.log(editEvent);
    //   alert('Event mise à jour!');
    // })
    // .catch(error => console.error(error));

    async function updateEvent(id, edit){
        const response = await fetch(`http://localhost:3000/api/events/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(edit),
        });
        if(response.ok){
            console.log('uptate fait');
        }
        else{
            console.log('erreur');
        }
        return response.json();
    }
}