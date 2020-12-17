fetch('/api')
  .then((response) => {
    console.log('first response of fetch');
    return response.text();
  })
  .then((data) => {
    console.log('received data successfully', data);
  });
