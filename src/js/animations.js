import gsap from 'gsap'; 

const myAnimations = ()=>{
    gsap.from('#logo', {opacity: 0, duration: 1, y: -50})
}

export{
    myAnimations
}