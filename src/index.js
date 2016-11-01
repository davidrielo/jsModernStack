/* eslint-disable no-console */

// commonjs way
// const Cat = require('./cat');

// ES6 modules
import Cat from './cat';

const fluffy = new Cat('Fluffy');
const aCat = new Cat();


console.log(fluffy.meow());
console.log(aCat.meow());
