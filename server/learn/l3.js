/**
 * event loop
 */
let setTimeCallback = (text) => {
  console.log("Settimeout callback with text", text);
};
let createSetTimeCallback = (text) => {
  return (text) => {
    console.log(text);
  };
};
let running = true;
setTimeout(setTimeCallback, 500, "opp");
while (running) {
  if (!running) break;
  //   console.log("Date is ", Date.now());
}
console.log("end of while loop");
