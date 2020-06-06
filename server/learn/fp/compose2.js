// import { compose, pipe } from "./lib.js";
// const { compose, pipe } = require("ramda");
// import { compose, pipe } from "./node_modules/ramda/index.js";
import { compose, pipe } from "../../../node_modules/ramda";
const add2 = (x) => x + 2;
const add3 = (x) => x + 3;

console.log(compose(add2, add3)(4));

const add2C = (x) => {
  console.log(`adding 2 to ${x} and returning ${x + 2}`);
  return x + 2;
};

const add3C = (x) => {
  debugger;
  console.log(`adding 3 to ${x} and returning ${x + 3}`);
  return x + 3;
};

const add5C = pipe(add2, add3);
console.log(add5C(8));
