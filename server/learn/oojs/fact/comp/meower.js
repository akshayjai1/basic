function meower(state) {
  // type 1 : setting property directly over the object
  // return {
  //   ...state,
  //   meow() {
  //     console.log(`${this.name} is meowing`);
  //   },
  // };

  // type 2 : Better Approach, setting property on prototype of object
  const proto = Object.getPrototypeOf(state);
  proto.meow = function () {
    console.log(`${this.name} is meowing`);
  };
}

export default meower;
