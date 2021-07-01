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

import expande from '../assets/expande.png'

import CRUD from '../assets/reactCRUD.png'

const divLog = document.querySelector('.contentSkillSet'); 

const loadImage = (newIm, url, selector)=>{
    const divImg = document.querySelector(selector);
    
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank'; 
    const img = document.createElement('img');
    img.classList.add('imgP1');
    img.src = newIm;
    link.appendChild(img);
    divImg.appendChild(link); 
}

const loadLogo =(newLogo, description)=>{
    const div = document.createElement('div'); 
    const logo = document.createElement('img');
    const p = document.createElement('p');
    p.innerHTML = description;
    p.classList.add('descLogo'); 
    logo.classList.add('logo');
    logo.src = newLogo;
    logo.title = description;
    div.appendChild(logo);
    div.appendChild(p);    
    divLog.appendChild(div);
}

const replaceImage =(newImage)=>{
    img.src = newImage;  
}

const loadMenuLogo = (image)=>{
    const menu = document.querySelector('#logoMenuResp');
    menu.src = image; 
}

const loadImages =()=>{
    loadImage(img1, 'https://panterday.github.io/pizza-web/', '#imageP1');
    loadLogo(logoJS, 'Javascript (ECMAScript 6)'); 
    loadLogo(logoHTML, 'HTML 5'); 
    loadLogo(logoCSS, 'CSS 3');
    loadLogo(logoWB, 'Webpack');
    loadLogo(logoJAVA, 'Java');
    loadLogo(logoNODE, 'NodeJS');
    loadLogo(logoMONGO, 'MongoDB');
    loadLogo(logoSQL, 'MySql');
    loadLogo(logoGIT, 'GIT and GitHub');
    loadLogo(logoGSAP, 'Green Sock animation library');
    loadLogo(logoPS, 'Adobe Photoshop');
    loadMenuLogo(logoMenu); 

    loadImage(expande, 'https://panterday.github.io/expande', '#imageP2');

    loadImage(CRUD, 'https://panterday.github.io/Panterday-CRUD-React-Material-UI/', '#imageP3'); 
}

export{
    loadImages,
    replaceImage
}