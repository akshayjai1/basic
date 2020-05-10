/**
 * promises without catch block will not terminate the script
 * ;
 * it will give a less readable message
 */

import { catchHandler, thenHandler, promiseArgument } from "./error";

// learning check 1. then keeps returning promise and we can keep chaining promises as long as we want
var p = new Promise(promiseArgument);
p.then(thenHandler)
  .catch(catchHandler)
  .then(thenHandler)
  .then(thenHandler)
  .then(thenHandler)
  .catch(catchHandler);
console.log("last line of error.js");
