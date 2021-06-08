import './styles.css';
import { myAnimations } from './js/animations';
import { initParticles } from './js/particles-function';
import { loadImages } from './js/load-images';
import {startEvents} from './js/mouse'
import { startPreloadLogo } from './js/window';
import { startMobile } from './js/mobile';

//Starting preloader
startPreloadLogo(); 

//Working with animations
myAnimations();

//Loading all images 
loadImages(); 

//Starting mouse events
startEvents(); 

//Starting mobile events
startMobile(); 


