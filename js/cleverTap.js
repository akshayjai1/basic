var clevertap = {
  event: [],
  profile: [],
  account: [],
  onUserLogin: [],
  notifications: [],
  privacy: [],
};
// replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
clevertap.account.push({ id: "TEST-WWW-R5Z-5Z5Z" });
clevertap.privacy.push({ optOut: false }); //set the flag to true, if the user of the device opts out of sharing their data
clevertap.privacy.push({ useIP: false }); //set the flag to true, if the user agrees to share their IP data
(function () {
  var wzrk = document.createElement("script");
  wzrk.type = "text/javascript";
  wzrk.async = true;
  wzrk.src =
    ("https:" == document.location.protocol
      ? "https://d2r1yp2w7bby2u.cloudfront.net"
      : "http://static.clevertap.com") + "/js/a.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(wzrk, s);
})();
clevertap.profile.push({
  Site: {
    Name: "Jack Montana", // User's name
    Email: "jackmontana@example.com",
  },
});
clevertap.event.push("Product Viewed", {
  "Product name": "Casio Chronograph Watch",
  "Category": "Mens Accessories",
  "Price": 59.99,
});

clevertap.event.push("SME flow 2", {
  "Product name": "Casio Chronograph Watch",
  "Category": "Mens Accessories",
  "Price": 59.99,
});
