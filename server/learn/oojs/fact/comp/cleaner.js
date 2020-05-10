function cleaner(state) {
  // type 1 : setting property directly over the object
  // return {
  //   ...state,
  //   clean() {
  //     console.log(`${this.name} is cleaning`);
  //   },
  // };

  // type 2 : Better Approach, setting property on prototype of object
  const proto = Object.getPrototypeOf(state);
  proto.clean = function () {
    console.log(`${this.name} is cleaning`);
  };
}
export default cleaner;
