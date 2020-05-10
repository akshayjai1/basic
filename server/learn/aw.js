async function x() {
  console.log("inside function x");
  var p = new Promise((r) =>
    setTimeout(() => {
      console.log("resolving x's promise with 9");
      r(9);
    }, 2000)
  );
  return p;
}
function x2() {
  console.log("inside function x2");
  var p = x();
  var y = new Promise((r, j) => {
    setTimeout(() => {
      r(p);
    }, 4000);
  });
  return y;
}
console.log("hi");
async function test() {
  await x();
  console.log("after executing first statement in test()");
  return 0;
}
console.log("hi1");
console.log("output of test = ", test());
