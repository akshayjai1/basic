/**
 * settimeout call back with paramters
 */

let createSetTimeCallback = (setTimeParameter) => {
  return (functionParameter) => {
    console.log(setTimeParameter);
    console.log(functionParameter);
  };
};
setTimeout(createSetTimeCallback("hi"), 5000, "3");
