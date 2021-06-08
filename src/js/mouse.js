import { animaHeaderShow, animaMenuMobile} from "./animations"

const hideHeader = ()=>{
    document.querySelector('#skills').addEventListener('click', ()=>{
        document.querySelector('.header').style.display = 'none'
    })
    document.querySelector('#myLink').addEventListener('click', ()=>{
        document.querySelector('.header').style.display = 'none'; 
    })
    document.querySelector('#experienceLink').addEventListener('click', ()=>{
        document.querySelector('.header').style.display = 'none'
    })
    document.querySelector('#contactLink').addEventListener('click', ()=>{
        document.querySelector('.header').style.display = 'none'
    })
}

const showHeader = ()=>{
    let lastScrollTop = 0; 
    document.addEventListener('scroll', ()=>{
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if(st>lastScrollTop){
            document.querySelector('.header').style.display = 'none'
        }else{
            if(document.querySelector('.header').style.display != 'inline' && document.querySelector('.header').style.display != ''){
                document.querySelector('.header').style.display = 'inline'
                animaHeaderShow('.header'); 
            }
        }
        lastScrollTop = st <= 0 ? 0 : st;
    })
}

const divMenu = ()=>{
    document.getElementById('myLinkM').addEventListener('click', ()=>{
        animaMenuMobile('.menuMobile'); 
    })
    document.getElementById('skillsM').addEventListener('click', ()=>{
        animaMenuMobile('.menuMobile'); 
    })
    document.getElementById('experienceLinkM').addEventListener('click', ()=>{
        animaMenuMobile('.menuMobile'); 
    })
    document.getElementById('contactLinkM').addEventListener('click', ()=>{
        animaMenuMobile('.menuMobile'); 
    })
}

const startEvents = ()=>{
    hideHeader(); 
    showHeader(); 
    divMenu(); 
}

export{
    startEvents
}