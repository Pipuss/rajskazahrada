import { menuHandler } from './menuHandler.js';
import {MAP, MAIN_LAYER, MAP_MARKER} from './map.js';

menuHandler();

MAIN_LAYER.addTo(MAP);
MAP_MARKER.addTo(MAP);

console.log(document.querySelector('.header__nav-toggle'));
