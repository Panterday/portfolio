import {animaMenuMobile} from './animations'

const showMenu = ()=>{
    const menu = document.querySelector('#logoMenuResp');

    menu.addEventListener('click', ()=>{
        let divMenu = document.querySelector('.menuMobile');
        divMenu.style.display = 'flex';
        animaMenuMobile('.menuMobile');
    })
}

const startMobile = ()=>{
    showMenu(); 
}

export{
    startMobile
}