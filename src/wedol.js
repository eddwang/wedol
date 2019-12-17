import {_init} from "./init.js";
import {keys} from './generate.js'; 
import {circle} from './circle.js';
import { rectangle } from "./rectangle.js";
var _wedol ={canvas:_init()};
_wedol = keys(_wedol);
_wedol = circle(_wedol);
_wedol = rectangle(_wedol);
export var wedol = _wedol;  