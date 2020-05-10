function cleaner(state) {
  return {
    ...state,
    bark() {
      console.log(`${this.name} is barking`);
    },
  };
}
