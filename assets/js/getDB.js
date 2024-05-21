export function getDB(){
    const apiUrl = 'http://localhost:3000/api/events';
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data)=>{
        console.log(data);
    })
    .catch((error) => {
        console.log("Error loading: ", error);
    })
}