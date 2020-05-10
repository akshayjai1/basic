/** this function is written to understand that what happens if an error occurs before resolving a promise */
export function promiseArgument(resolve, reject) {
  throw new Error("A novel error");
  resolve(9);
  reject("hi");
}
export function thenHandler(val) {
  console.log("thenHandler got", val);
  //   return val;
}
export function catchHandler(e) {
  console.log("catchHandler got", e);
  return e;
}
