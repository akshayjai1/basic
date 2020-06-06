const Twitter = require("twitter-lite");
// console.log(Twitter);
const config = {
  //   subdomain: "cors-anywhere.herokuapp.com/https://api",
  consumer_key: "l7ZOSz5VwmfgiQBVEXT8PvZ2O",
  consumer_secret: "Ea1GCJueDZ3tHpiZsMbQLtJvMTDfZf2IRc1SX5GQWvJe7o0kw1",
  access_token: "1681758896-7b6KrORKHYJLkcntSUo7yFTaA6oFOOllzL8PWo2",
  access_token_secret: "ZjXEmBbi9vpMEoSjkzKYLDtJ3Msk61i5tY0e7QSB2FKvI",
  // timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  // strictSSL:            true,     // optional - requires SSL certificates to be valid.
};

var y = new Twitter(config);
// console.log(y);

y.get("account/verify_credentials")
  .then((results) => {
    console.log("results", results);
  })
  .catch(console.error);
