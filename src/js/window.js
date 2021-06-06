import { scrollAnimations } from "./scroll";

const startPreloadLogo = ()=>{
    window.addEventListener('load', ()=>{
        //Starting animations. 
        scrollAnimations();
        document.querySelector('.preload').style.display = 'none'; 
    });  
}

export{
    startPreloadLogo
}