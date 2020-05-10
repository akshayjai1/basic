import Animal from "./Animal.js";
class Cat extends Animal {
  constructor(name) {
    super(`${name} [Cat]`);
  }
  meow() {
    console.log(`${this.name} is Meowing`);
  }
}

export default Cat;
