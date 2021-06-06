import { animaHeaderShow} from "./animations"

const hideHeader = ()=>{
    document.querySelector('#skills').addEventListener('click', ()=>{
        document.querySelector('.header').style.display = 'none'
    })
    document.querySelector('#myLink').addEventListener('click', ()=>{
        document.querySelector('.header').style.display = 'none'
    })
    document.querySelector('#experienceLink').addEventListener('click', ()=>{
        document.querySelector('.header').style.display = 'none'
    })
    document.querySelector('#contactLink').addEventListener('click', ()=>{
        document.querySelector('.header').style.display = 'none'
    })
}

const showHeader = ()=>{
    window.addEventListener('wheel', (event)=>{
        console.log(document.querySelector('.header').style.display);
        if(event.deltaY < 0){
            if(document.querySelector('.header').style.display != 'inline' && document.querySelector('.header').style.display != ''){
                document.querySelector('.header').style.display = 'inline'
                animaHeaderShow('.header'); 
                console.log('inside')
            }
        }else{
            document.querySelector('.header').style.display = 'none'
        }
    })
}

const startEvents = ()=>{
    hideHeader(); 
    showHeader(); 
}

export{
    startEvents
}