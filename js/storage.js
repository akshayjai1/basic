const form = document.querySelector("form");
const ul = document.querySelector("ul");
const button = document.querySelector("button");
const input = document.getElementById("item");
let itemsArray = sessionStorage.getItem("items")
  ? JSON.parse(sessionStorage.getItem("items"))
  : [];

sessionStorage.setItem("items", JSON.stringify(itemsArray));
const data = JSON.parse(sessionStorage.getItem("items"));

const liMaker = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  sessionStorage.setItem("items", JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
  const hiddenValue = document.querySelector("#hiddenInput").value;
  fetch("http://localhost:3005/hidden", {
    method: "post",
    body: JSON.stringify({
      hiddenValue,
    }),
  })
    .then((res) => {
      debugger;
      return res.text();
    })
    .then((res) => {
      debugger;
      console.log(res);
    });
  //   return true;
});

data.forEach((item) => {
  liMaker(item);
});

button.addEventListener("click", function () {
  sessionStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  itemsArray = [];
});

async function test() {
  console.log("hi");
  let x = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("timer");
      reject();
    });
  });
  console.log("end of function");
  try {
    await x;
    let second = function () {
      console.log("second");
    };
    second();
  } catch (error) {
    const errorFn = () => {
      console.log("error occurred");
    };
    errorFn();
  }
}
