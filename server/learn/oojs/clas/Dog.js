import Animal from "./Animal.js";
class Dog extends Animal {
  constructor(name) {
    super(`${name} [Dog]`);
  }
  bark() {
    console.log(`${this.name} is barking`);
  }
}

export default Dog;
