import gsap from 'gsap';

let flag = true;
let menuState = 0; 

const myAnimations = ()=>{
    gsap.from('#logo', {opacity: 0, duration: 2, x: -80, ease: 'Power2.easeOut'})

    gsap.from('.menu', {duration: 2, y: -80, ease: 'Power2.easeOut'})

    gsap.from('#title', {opacity: 0, duration: 3, x: 200, ease: 'Power2.easeOut'})

    gsap.from('#desc', {opacity: 0, duration: 3, y: 200, ease: 'Power2.easeOut'})

    gsap.from('.nav-bar', {opacity: 0, duration: 2})

    let t1 = gsap.timeline({
        repeat: -1
    }); 

    t1.from('#mail', {
        y: 0, 
        alpha: 0.2,
        duration: 2
    })

    t1.to('#mail', {
        y: 0, 
        alpha: 0.2,
        duration: 2
    })

}
//Animating header
const animaHeaderShow =(name)=>{
    
    if(flag){
        flag=false; 
        gsap.from(name, {
            opacity: 0, 
            duration: 0.5, 
            y: -80, 
            ease: 'Power2.easeOut', 
            onComplete: ()=>{flag=true}
        })
    }
}

const animaMenuMobile =(name)=>{
    if(menuState == 0){
        menuState = 1; 
        gsap.set(name, {
            y: 0,
            x: 0
        }); 
        if(flag){
            flag=false; 
            gsap.from(name, {
                opacity: 0, 
                duration: 0.5, 
                x: -80, 
                ease: 'Power2.easeOut', 
                onComplete: ()=>{flag=true}
            })
        }
    }else{
        menuState = 0;
        gsap.set(name, {
            y: 0,
            x: 0 
        }); 
        if(flag){
            flag=false; 
            gsap.to(name, {
                opacity: 0.8, 
                duration: 0.5, 
                x: 80, 
                ease: 'Power2.easeOut', 
                onComplete: ()=>{flag=true; document.querySelector('.menuMobile').style.display = 'none';}
            })
        }
    }

}


export{
    myAnimations,
    animaHeaderShow,
    animaMenuMobile,
}