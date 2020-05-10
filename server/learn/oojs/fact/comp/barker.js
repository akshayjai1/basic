function barker(state) {
  // type 1 : setting property directly over the object
  // return {
  //   ...state,
  //   bark() {
  //     console.log(`${this.name} is barking`);
  //   },
  // };

  // type 2 : Better Approach, setting property on prototype of object
  const proto = Object.getPrototypeOf(state);
  proto.bark = function () {
    console.log(`${this.name} is barking`);
  };
}
export default barker;
