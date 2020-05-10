function driver(state) {
  // type 1 : setting property directly over the object
  // return {
  //   ...state,
  //   drive() {
  //     console.log(`${this.name} is driving`);
  //   },
  // };

  // type 2 : Better Approach, setting property on prototype of object
  const proto = Object.getPrototypeOf(state);
  proto.drive = function () {
    console.log(`${this.name} is driving`);
  };
}
export default driver;
