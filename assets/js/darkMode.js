export function darkMode(){
    let darkMode = localStorage.getItem('darkMode');
    const btnDarkMode = document.querySelector('#dark_mode'); 
    // console.log("DARKMODE " + btnDarkMode);
    let img = document.createElement('img');
    btnDarkMode.appendChild(img);
    img.setAttribute('src', './assets/images/moon.png');
    img.setAttribute('alt', 'icon moon');
    const activeDarkMode = () => {
        document.body.classList.add('darkmode');
        document.body.classList.remove('lightmode');
        localStorage.setItem('darkMode', 'active');
        localStorage.setItem('lightMode', null);
        img.setAttribute('src', './assets/images/sun.png');
    }
    const disableDarkMode = () => {
        document.body.classList.remove('darkmode');
        document.body.classList.add('lightmode');
        localStorage.setItem('darkMode', null);
        localStorage.setItem('lightMode', 'active');
        img.setAttribute('src', './assets/images/moon.png');
    }
    if (darkMode === "active"){
        activeDarkMode();        
    }
    btnDarkMode.addEventListener('click', () => {
        darkMode = localStorage.getItem('darkMode');
        if(darkMode !== 'active'){
            activeDarkMode();
            // console.log(darkMode);
        }
        else{
            disableDarkMode();
            // console.log(darkMode);
        }
    });
}

export function lightMode(){
    let lightMode = localStorage.getItem('lightMode');
    const btnLightMode = document.querySelector('#light_mode'); 
    // console.log("LIGHTMODE " + btnLightMode);
    let img = document.createElement('img');
    btnLightMode.appendChild(img);
    img.setAttribute('src', './assets/images/sun.png');
    img.setAttribute('alt', 'icon sun');
    const activeLightMode = () => {
        document.body.classList.add('lightmode');
        document.body.classList.remove('darkmode');
        localStorage.setItem('lightMode', 'active');
        localStorage.setItem('darkMode', null);
        img.setAttribute('src', './assets/images/moon.png');
    }
    const disableLightMode = () => {
        document.body.classList.remove('lightmode');
        document.body.classList.add('darkmode');
        localStorage.setItem('lightMode', null);
        localStorage.setItem('darkMode', 'active');
        img.setAttribute('src', './assets/images/sun.png');
    }
    if (lightMode === "active"){
        activeLightMode();        
    }
    btnLightMode.addEventListener('click', () => {
        lightMode = localStorage.getItem('lightMode');
        if(lightMode !== 'active'){
            activeLightMode();
            // console.log(lightMode);
        }
        else{
            disableLightMode();
            // console.log(lightMode);
        }
    });
}
