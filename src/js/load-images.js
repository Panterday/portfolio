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

import logoSQL from '../assets/logoSQL.svg'
import logoPS from '../assets/logoPS.svg'
import logoGIT from '../assets/logoGIT.svg'

import logoMenu from '../assets/prueba.svg'

const divImg = document.querySelector('#imageP1');
const divLog = document.querySelector('.contentSkillSet'); 
const loadImage = (newIm, url)=>{
    const link = document.createElement('a');
    link.href = url;
    const img = document.createElement('img');
    img.classList.add('imgP1');
    img.src = newIm;
    link.appendChild(img);
    divImg.appendChild(link); 
}

const loadLogo =(newLogo, description)=>{
    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.src = newLogo;
    logo.title = description;  
    divLog.appendChild(logo);
}

const replaceImage =(newImage)=>{
    img.src = newImage;  
}

const loadMenuLogo = (image)=>{
    const menu = document.querySelector('#logoMenuResp');
    menu.src = image; 
}

const loadImages =()=>{
    loadImage(img1, 'https://panterday.github.io/pizza-web/');
    loadLogo(logoJS, 'Javascript (ECMAScript 6)'); 
    loadLogo(logoHTML, 'HTML 5'); 
    loadLogo(logoCSS, 'CSS 3');
    loadLogo(logoWB, 'Webpack');
    loadLogo(logoJAVA, 'Java');
    loadLogo(logoNODE, 'NodeJS (Express library, Mongoose library)');
    loadLogo(logoMONGO, 'MongoDB');
    loadLogo(logoSQL, 'MySql');
    loadLogo(logoGIT, 'GIT and GitHub');
    loadLogo(logoGSAP, 'Green Sock animation library');
    loadLogo(logoPS, 'Adobe Photoshop');

    loadMenuLogo(logoMenu); 
}

export{
    loadImages,
    replaceImage
}