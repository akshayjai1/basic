import axios from "../node_modules/axios";
const input = document.querySelector("[name=tweet]");
function postTweet() {
  console.log("hi");
  const text = input.value;
  const textBody = {
    text,
  };
  const textBodyJSN = JSON.stringify(textBody);
  debugger;
  /* fetch("http://localhost:65500/postTweet", {
    method: "POST",
    body: textBody,
  })
    .then((res) => {
      console.log(res);
      debugger;
      return res.json();
    })
    .then((data) => {
      console.log("finally got response tweets", data);
      document.querySelector(".data").textContent = JSON.stringify(data);
    })
    .catch((e) => {
      console.log("got error", e);
    }); */

  axios
    .post("http://localhost:65500/postTweet", textBody)
    .then((data) => {
      console.log("finally got response tweets", data);
      debugger;
      document.querySelector(".data").textContent = JSON.stringify(data);
    })
    .catch((e) => {
      debugger;
      console.log("got error", e);
    });
}
