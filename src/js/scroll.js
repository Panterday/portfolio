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

    gsap.from('#imageP1', {
        scrollTrigger: {
            trigger: '#imageP1',
            start: 'top 80%',
        }, 
        y: 50,
        alpha: 0,
        duration: 1.5
    })

    gsap.from('#description1', {
        scrollTrigger: {
            trigger: '#description1',
            start: 'top 80%',
        }, 
        x: 50,
        alpha: 0,
        duration: 1.5
    })

    gsap.from('#imageP2', {
        scrollTrigger: {
            trigger: '#imageP2',
            start: 'top 80%',
        }, 
        y: 50,
        alpha: 0,
        duration: 1.5
    })

    gsap.from('#description2', {
        scrollTrigger: {
            trigger: '#description2',
            start: 'top 80%',
        }, 
        x: 50,
        alpha: 0,
        duration: 1.5
    })

    gsap.from('#imageP3', {
        scrollTrigger: {
            trigger: '#imageP3',
            start: 'top 80%',
        }, 
        y: 50,
        alpha: 0,
        duration: 1.5
    })

    gsap.from('#description3', {
        scrollTrigger: {
            trigger: '#description3',
            start: 'top 80%',
        }, 
        x: 50,
        alpha: 0,
        duration: 1.5
    })

    gsap.from('#imageP4', {
        scrollTrigger: {
            trigger: '#imageP4',
            start: 'top 80%',
        }, 
        y: 50,
        alpha: 0,
        duration: 1.5
    })

    gsap.from('#description4', {
        scrollTrigger: {
            trigger: '#description4',
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