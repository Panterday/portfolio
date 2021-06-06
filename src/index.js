import './styles.css';
import { myAnimations } from './js/animations';
import { initParticles } from './js/particles-function';
import { loadImages } from './js/load-images';
import {startEvents} from './js/mouse'
import { startPreloadLogo } from './js/window';

//Starting preloader
startPreloadLogo(); 


//Starting particles
initParticles(); 

//Working with animations
myAnimations();

//Loading all images 
loadImages(); 

//Starting mouse events
startEvents(); 


