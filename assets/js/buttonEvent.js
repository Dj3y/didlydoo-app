console.log("TEST");
function displayForm() {
  const selectButton = document.querySelector('#AddButton');
  console.log(selectButton);

  if (selectButton) {
    selectButton.addEventListener("click", (event) => {
      console.log("tu cliques sur moi bien joué");
    });
  } else{
    console.error("Le bouton avec l'ID 'AddButton' n'a pas été trouvé.");
    
  }
}
export { displayForm };