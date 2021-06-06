import img1 from '../assets/pizza1.png'
import img2 from '../assets/img2.png'
import logoJS from '../assets/logoJS.svg'
import logoHTML from '../assets/logoHTML.svg'
import logoCSS from '../assets/logoCSS.svg'
import logoWB from '../assets/logoWP.svg'
import logoJAVA from '../assets/logoJAVA.png'

import logoNODE from '../assets/logoNODE.svg'
import logoMONGO from '../assets/logoMONGO.svg'
import logoGSAP from '../assets/logoGSAP.svg'
import { secundaryText } from './mouse'


const divImg = document.querySelector('#imageP1');
const divLog = document.querySelector('.contentSkillSet'); 
const loadImage = (newIm)=>{
    const img = document.createElement('img');
    img.classList.add('imgP1');
    img.src = newIm;
    divImg.appendChild(img); 
}

const loadLogo =(newLogo)=>{
    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.src = newLogo; 
    divLog.appendChild(logo);
}

const replaceImage =(newImage)=>{
    img.src = newImage;  
}

const loadImages =()=>{
    loadImage(img1);
    loadLogo(logoJS); 
    loadLogo(logoHTML); 
    loadLogo(logoCSS);
    loadLogo(logoWB);
    loadLogo(logoJAVA);
    loadLogo(logoNODE);
    loadLogo(logoMONGO);
    loadLogo(logoGSAP);
}

export{
    loadImages,
    replaceImage
}