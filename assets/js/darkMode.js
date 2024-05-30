console.log("JE SUIS LE MEILLEUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUR");

export function darkMode(){
    let darkMode = localStorage.getItem('darkMode');
    const btndDarkMode = document.querySelector('#dark_mode'); 
    console.log("DARKMODE"+btndDarkMode);
    let img = document.createElement('img');
    btndDarkMode.appendChild(img);
    img.setAttribute('src', './assets/images/moon.png');
    img.setAttribute('alt','icon moon');
    const activeDarkMode = () => {
        document.body.classList.add('darkmode');
        localStorage.setItem('darkMode', 'active');
        img.setAttribute('src', './assets/images/sun.png');
    }
    const desibleDarkMode = () => {
        document.body.classList.remove('darkmode');
        localStorage.setItem('darkMode', null);
        img.setAttribute('src', './assets/images/moon.png');
    }
    if (darkMode === "active"){
        activeDarkMode();        
    }
    btndDarkMode.addEventListener('click', () => {
        darkMode = localStorage.getItem('darkMode');
        if(darkMode !== 'active'){
            activeDarkMode();
            console.log(darkMode);
        }
        else{
            desibleDarkMode();
            console.log(darkMode);
        }
    })
}