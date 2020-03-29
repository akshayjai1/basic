const main = document.querySelector(".heading");
console.log(main);
main.addEventListener("click", function() {
  alert("main div clicked");
  
});




fetch('http://localhost:8081/data.json').then(response => {
  debugger;
  console.log(response);


})


fetch('http://localhost:8081/data.json').then(response => {
  debugger;
  console.log(response);
  return response.json();
}).then(response2 => {
  debugger;
  console.log(response2);

})



async function Ab() {

  // function sum(a,b ) {return a+ b}

  // const x = sum(2,4);
  const response =  await fetch('http://localhost:8081/data.json');
  const data  = await response.json();
  debugger;
  console.log(data);
}

make a network request -> data from the ServiceWorkerRegistration


command 1
command 2
command 3


Ab()
console.log('abc');



// X = NEW Promise(Resolve, Reject)

// Resolve : ( argument) => return 
// Reject : (ARGUET)=>  


// fetch('http://localhost:8080/data2.json').then(response => {
//   debugger;
//   console.log(response);
// })