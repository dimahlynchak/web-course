//var generateName = require("sillyname");

import generateName from "sillyname";
import {randomSuperhero} from 'superheroes';


let sillyName = generateName();
console.log(`My name is ${sillyName}`);
const name = randomSuperhero()
console.log(`Im a ${name}!`);
