console.log("facebook");
var data = [];
for (let i = 0; i < 5000; i++) {
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
/**
 * trick to convert html string to html node
 * @param {} string
 */
function getHtmlNode(string) {
  const newNode = document.createElement("div");
  newNode.innerHTML = string;
  return newNode.firstChild;
}
/** type1  */
function updateComments() {
  updateData();
  paintComment();
}
/** type2  */

function updateComments2() {
  commentsNode.innerHTML = getNewCommentHTML() + commentsNode.innerHTML;
}
/** type3  */

function efficientUpdateComments() {
  commentsNode.prepend(getHtmlNode(getNewCommentHTML()));
  // commentsNode.appendChild(getHtmlNode(getNewCommentHTML()));
}
