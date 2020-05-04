fetch("http://localhost:8081/data2.json")
  .then((response) => {
    debugger;
    return response.json();
    console.log(response);
  })
  .then((res) => {
    setTimeout(() => {
      debugger;
      document.querySelector("#replaced").innerText = res.data2;
    }, 5000);
  });

// fetch("http://localhost:8081/data.json")
//   .then((response) => {
//     debugger;
//     console.log(response);
//     return response.json();
//   })
//   .then((response2) => {
//     debugger;
//     console.log(response2);
//   });

// async function Ab() {
//   // function sum(a,b ) {return a+ b}

//   // const x = sum(2,4);
//   const response = await fetch("http://localhost:8081/data.json");
//   const data = await response.json();
//   debugger;
//   console.log(data);
// }

// Ab();
// console.log("abc");

// X = NEW Promise(Resolve, Reject)

// Resolve : ( argument) => return
// Reject : (ARGUET)=>

// fetch('http://localhost:8080/data2.json').then(response => {
//   debugger;
//   console.log(response);
// })
