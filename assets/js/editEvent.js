import { getDB } from "./getDB.js";
getDB();

export function editEvents(id, newData){
    console.log("editEvents " + id);
    const titleEvent =document.getElementsByClassName('event-title-edit');
    const authorEvent = document.getElementsByClassName('event-author-edit');
    const descriptionEvent = document.getElementsByClassName('event-description-edit');
    const btnEdit = document.getElementsByClassName('event-btn-edit');
    console.log("bouton edit " + btnEdit);
    // const btnFormEdit = document.createElement('button');
    btnEdit.addEventListener('click', (event) =>{
        console.log("editEvent ligne 13 " + btnEdit);
        const edit = {
            name: titleEvent.value,
            author: authorEvent.value,
            description : descriptionEvent.value
        };
        // updateEvent(id, edit)
        // .then(editEvent => {
        //   console.log(editEvent);
        //   alert('Event mise à jour!');
        // })
        // .catch(error => console.log(error));
    
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
    })

    const divFormEdit = document.getElementsByClassName('div-form-edit');
    titleEvent.value = newData[0].name;
    authorEvent.value = newData[0].author;
    descriptionEvent.value = newData[0].description;
    
}
