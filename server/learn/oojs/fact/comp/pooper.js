function pooper(state) {
  // type 1 : setting property directly over the object
  // return {
  //   ...state,
  // poop() {
  //   console.log(`${this.name} is pooping`);
  // },
  // };

  // type 2 : Better Approach, setting property on prototype of object
  const proto = Object.getPrototypeOf(state);
  proto.poop = function () {
    console.log(`${this.name} is pooping`);
  };
}

export default pooper;
