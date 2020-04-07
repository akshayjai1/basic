/** based on
 * https://order-pizza-api.herokuapp.com/api/ui/#!/Orders/orders_create
 */
const loginUrl = "https://order-pizza-api.herokuapp.com/api/auth";
const getOrdersUrl = "https://order-pizza-api.herokuapp.com/api/orders";
const postOrderUrl = "https://order-pizza-api.herokuapp.com/api/orders";
const deleteOrderUrl = orderId =>
  `https://order-pizza-api.herokuapp.com/api/orders/${orderId}`;

const createOrderPayload = {
  Crust: "string",
  Flavor: "string",
  Size: "string",
  Table_No: 0
};
const authPayload = {
  username: "test",
  password: "test"
};
function setAuthToken() {
  let request = new Request(loginUrl, {
    mode: "cors",
    method: "POST",
    body: JSON.stringify(authPayload),
    headers: {
      "Content-Type": "application/json"
    }
  });
  fetch(request)
    .then(response => {
      // debugger;
      return response.json();
    })
    .then(response => {
      // debugger;
      console.log(response);
      let existingToken = sessionStorage.getItem("access_token");
      if (existingToken === response.access_token) {
        console.log("same access token");
      } else {
        console.log("access token updated");
        console.log("previous token", existingToken);
        console.log("new token", response.access_token);
      }
      sessionStorage.setItem("access_token", response.access_token);
    })
    .catch(error => {
      debugger;
      console.log(error);
    });
}

function createOrder() {
  const authToken = sessionStorage.getItem("access_token");
  let request = new Request(postOrderUrl, {
    mode: "cors",
    method: "POST",
    body: JSON.stringify(createOrderPayload),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    }
  });
  fetch(request)
    .then(response => {
      debugger;
      return response.json();
    })
    .then(response => {
      debugger;
      console.log(response);
      let existingToken = sessionStorage.getItem("access_token");
      if (existingToken === response.access_token) {
        console.log("same access token");
      } else {
        console.log("access token updated");
        console.log("previous token", existingToken);
        console.log("new token", response.access_token);
      }
      sessionStorage.setItem("access_token", response.access_token);
    })
    .catch(error => {
      debugger;
      console.log(error);
    });
}
// setAuthToken();
// createOrder();

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "application/json");
myHeaders.append(
  "Authorization",
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODU0NTMzNTYsIm5iZiI6MTU4NTQ1MzM1NiwianRpIjoiNjBmOTVkZjItNTUyOC00MmVhLWFjN2UtMmI5YjA0ZjY4N2ZmIiwiZXhwIjoxNTg1NDU0MjU2LCJpZGVudGl0eSI6InRlc3QiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.X33-A5VmHL7Lsu88wHcznGSE9UYYByNDyn3TgROyJ0c"
);

var raw = JSON.stringify({
  Crust: "crust3",
  Flavor: "string",
  Size: "string",
  Table_No: 1
});

var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://order-pizza-api.herokuapp.com/api/orders", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log("error", error));
