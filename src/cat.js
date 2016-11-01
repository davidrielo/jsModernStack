class Cat {
	constructor(name = 'a cat') {
		this.name = name;
	}

	meow() {
		return `Meow mew, I am ${this.name}`; 
	}
}

module.exports = Cat;