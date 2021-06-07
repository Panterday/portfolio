import { initParticles } from "./particles-function";
import { scrollAnimations } from "./scroll";

const startPreloadLogo = ()=>{
    window.addEventListener('load', ()=>{
        //Starting animations. 
        scrollAnimations();
        initParticles(); 
        document.querySelector('.preload').style.display = 'none'; 
    }); 

    /* window.addEventListener('resize', ()=>{
        initParticles(); 
    }) */
}

export{
    startPreloadLogo
}