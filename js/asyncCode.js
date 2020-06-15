console.log("in file async code");
const input = document.querySelector("[name=tweet]");
function callServer() {
  fetch("http://localhost:3007/apiTwitter")
    .then((res) => res.json())
    .then((res) => {
      debugger;
      console.log(res);
      document.querySelector(".serverData").textContent = JSON.stringify(res);
    })
    .catch((err) => {
      debugger;
      console.log(err);
    });
}

function postTweet() {
  console.log("hi");
  const text = input.value;
  const textBody = {
    text,
  };
  const textBodyJSN = JSON.stringify(textBody);
  debugger;
  fetch("http://localhost:65500/postTweet", {
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
    });
}
/*   axios
    .post("http://localhost:65500/postTweet", textBody)
    .then((data) => {
      console.log("finally got response tweets", data);
      debugger;
      document.querySelector(".data").textContent = JSON.stringify(data);
    })
    .catch((e) => {
      debugger;
      console.log("got error", e);
    }); */

/**
 * fetch 1
 */

/* fetch("http://localhost:8080/data/data2.json")
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
    debugger;
  }); */

/**
 * fetch code 2 to check for cors properties
 * this api is present in file-upload repo
 */

/* fetch("http://localhost:3005/getTweets")
  .then((res) => res.json())
  .then((data) => {
    console.log("finally got response tweets", data);
    document.querySelector(".data").textContent = JSON.stringify(data);
  })
  .catch((e) => {
    console.log("got error", e);
  }); */

/**
 * get request to twitter along with authorization
 */
/* fetch("https://api.twitter.com/1.1/search/tweets.json?q=rainbow", {
  headers: {
    Authorization:
      'OAuth oauth_consumer_key="aVvBeJeBfkVGOfSPJEaRTGMQM",oauth_nonce="e554c1b6bd894038928797885bb74fb0",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1591510864",oauth_token="1681758896-hS8SGRroPqSx0ffeH5HIFLPohDZ1ftZeXwzM45y",oauth_version="1.0",oauth_signature="8ftCavRnRRf1Jj50OX3dlMl3h4M%3D"',
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    console.log("response is ", response);
    debugger;
    return response.json();
  })
  .then((response) => {
    debugger;
    console.log("json response is ", response);
    return response;
  })
  .catch((err) => {
    debugger;
    console.log("got error while making fetch request to twitter", err);
  });
 */
