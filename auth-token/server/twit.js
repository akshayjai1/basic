// const Twitter = require("twitter-lite");
const Twit = require("twit");
// console.log(Twitter);
const config = {
  //   subdomain: "cors-anywhere.herokuapp.com/https://api",
  consumer_key: "l7ZOSz5VwmfgiQBVEXT8PvZ2O",
  consumer_secret: "pPpamsLn8ZUZaI1fMDhz1o9w00wx3kDTl4r8Cun4ajdzxon7RQ",
  access_token: "1681758896-1681758896-ossFSOrs38ZZRrjRG9fBG8Qpb9RB7H3LwUoela2",
  access_token_secret: "m9AO59jF0Y6g8Wi1DplcBtpbEMuhJbK49Irp4Rk4dtffd",
  // timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  // strictSSL:            true,     // optional - requires SSL certificates to be valid.
};

var y = new Twit(config);
// var y = new Twitter(config);
// console.log(y);

/*y.get("account/verify_credentials")
  .then((results) => {
    console.log("results", results);
  })
  .catch(console.error);
*/
//   twittercommunity.com/t/solved-errors-message-invalid-or-expired-token-code-89/10797/17
//
// /https:
// const client = new Twitter(config);
// const params = { tweet_mode: "extended", count: 10 };
const params = { query: "extended", count: 10 };

y.get(`statuses/home_timeline`, params)
  .then((timeline) => {
    console.log(timeline);
  })
  .catch((error) => {
    console.log(error);
  });

// client
//   .post(`statuses/update`, "hi")
//   .then((tweeting) => {
//     console.log(tweeting);

//     // res.send(tweeting);
//   })

//   .catch((error) => {
//     console.log(error);
//     // res.send(error);
//   });

// y.getRequestToken("http://callbackurl.com")
/* y.getRequestToken("oob")
  .then((res) => {
    console.log({
      reqTkn: res.oauth_token,
      reqTknSecret: res.oauth_token_secret,
    });
    console.log(res);
  })
  .catch(console.error);
*/
