function killer(state) {
  // type 1 : setting property directly over the object
  // return {
  //   ...state,
  //   kill() {
  //     console.log(`${this.name} is killing`);
  //   },
  // };

  // type 2 : Better Approach, setting property on prototype of object
  const proto = Object.getPrototypeOf(state);
  proto.kill = function () {
    console.log(`${this.name} is killing`);
  };
}

export default killer;
