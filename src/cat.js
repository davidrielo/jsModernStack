
// common.js way
/*class Cat {
	constructor(name = 'a cat') {
		this.name = name;
	}

	meow() {
		return `Meow mew, I am ${this.name}`; 
	}
}

module.exports = Cat;*/

// ES6 module way

export default class {
  constructor(name) {
    this.name = name;
  }

  meow() {
    return `Meow mew, I am ${this.name}`;
  }
}
