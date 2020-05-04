console.log("in file async code");
fetch("http://localhost:8080/data/data2.json")
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
    debugger;
  });
