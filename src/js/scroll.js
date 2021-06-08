import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger); 

export const scrollAnimations = ()=>{
    gsap.from('#titlePortfolio', {
        scrollTrigger: {
            trigger: '.imgP1',
            start: 'top 80%',
        }, 
        x: 50,
        alpha: 0,
        duration: 1.5
    })


    gsap.from('#line1', {
        scrollTrigger: {
            trigger: '.imgP1',
            start: 'top 80%',
        }, 
        y: -50,
        alpha: 0,
        duration: 1.5
    })

    gsap.from('.imgP1', {
        scrollTrigger: {
            trigger: '.imgP1',
            start: 'top 80%',
        }, 
        y: 50,
        alpha: 0,
        duration: 1.5
    })

    gsap.from('.description', {
        scrollTrigger: {
            trigger: '.description',
            start: 'top 80%',
        }, 
        x: 50,
        alpha: 0,
        duration: 1.5
    })

    gsap.from('#skillSetTitle', {
        scrollTrigger: {
            trigger: '#skillSetTitle',
            start: 'top 80%'
        }, 
        x: 50,
        alpha: 0,
        duration: 1.5
    })

    gsap.from('#line2', {
        scrollTrigger: {
            trigger: '#skillSetTitle',
            start: 'top 80%',
        }, 
        y: -50,
        alpha: 0,
        duration: 1.5
    })

    gsap.from('#divSkills', {
        scrollTrigger: {
            trigger: '#divSkills',
            start: 'top 80%',
        }, 
        y: 50,
        alpha: 0,
        duration: 1.5
    })

    gsap.from('#idTitleExperience', {
        scrollTrigger: {
            trigger: '#idTitleExperience',
            start: 'top 80%',
        }, 
        x: 50,
        alpha: 0,
        duration: 1.5
    })

    gsap.from('#line3', {
        scrollTrigger: {
            trigger: '#idTitleExperience',
            start: 'top 80%',
        }, 
        y: -50,
        alpha: 0,
        duration: 1.5
    })

    gsap.from('#idContentExperience', {
        scrollTrigger: {
            trigger: '#idContentExperience',
            start: 'top 80%',
        }, 
        y: 50,
        alpha: 0,
        duration: 1.5
    })

    gsap.from('#idTitleContact', {
        scrollTrigger: {
            trigger: '#idTitleContact',
            start: 'top 90%'
        }, 
        x: -50,
        alpha: 0,
        duration: 1.5
    })

    gsap.from('#line4', {
        scrollTrigger: {
            trigger: '#idTitleContact',
            start: 'top 90%',
        }, 
        y: -50,
        alpha: 0,
        duration: 1.5
    })

    gsap.from('#divContactme', {
        scrollTrigger: {
            trigger: '#idTitleContact',
            start: 'top 90%'
        }, 
        y: 50,
        alpha: 0,
        duration: 1.5
    })

    gsap.from('.logo', {
        scrollTrigger: {
            trigger: '.logo',
            start: 'top 90%'
        }, 
        x: -50,
        alpha: 0,
        duration: 1.5
    })

    gsap.from('.descLogo', {
        scrollTrigger: {
            trigger: '.logo',
            start: 'top 90%',
        }, 
        alpha: 0,
        duration: 1.5
    })
}