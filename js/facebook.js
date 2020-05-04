console.log("facebook");
var data = [];
for (let i = 0; i < 500; i++) {
  data.push({
    name: ` ${i} Harish `,
    comment: ` ${i} comment `,
  });
}
const commentsNode = document.querySelector("#post #comments");
function paintComment() {
  const commentString = data.map(getCommentString).join("");
  commentsNode.innerHTML = commentString;
}
paintComment();
function getCommentString(comment) {
  return `<p>Name: ${comment.name} ---- comment: ${comment.comment}</p>`;
}
function updateData() {
  const newComment = {
    name: "Harish 4",
    comment: "Hi 4",
  };
  data.unshift(newComment);
  return data;
}
function getNewCommentHTML() {
  // const newCom = updateData()[data.length - 1];
  const newCom = updateData()[0];
  return getCommentString(newCom);
}
function getHtmlNode(string) {
  const newNode = document.createElement("div");
  newNode.innerHTML = getNewCommentHTML();
  return newNode.firstChild;
}
function updateComments() {
  updateData();
  paintComment();
}
function updateComments2() {
  commentsNode.innerHTML = commentsNode.innerHTML + getNewCommentHTML();
}
function efficientUpdateComments() {
  commentsNode.prepend(getHtmlNode(getNewCommentHTML()));
  // commentsNode.appendChild(getHtmlNode(getNewCommentHTML()));
}
