console.log("facebook");
const data = [
  {
    name: "Harish",
    comment: "Hi",
  },
  {
    name: "Harish 1",
    comment: "Hi 1",
  },
  {
    name: "Harish 2",
    comment: "Hi 2",
  },
  {
    name: "Harish 3",
    comment: "Hi 3",
  },
];
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
  data.push(newComment);
  return data;
}
function getNewCommentHTML() {
  const newCom = updateData()[data.length - 1];
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
  commentsNode.appendChild(getHtmlNode(getNewCommentHTML()));
}
