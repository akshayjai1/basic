function barker(state) {
  const proto = Object.getPrototypeOf(state);
  proto.bark = function () {
    console.log(`${this.name} is barking`);
  };
}
export default barker;
