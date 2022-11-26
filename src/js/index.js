import userPost from "./userPost";
import UI from "./ui";
import "./../index.html";
import "./../scss/styles.scss";

const ui = new UI();

window.addEventListener("DOMContentLoaded", () => {
  ui.logInUser();

  console.log("hello welcome to hell.");

  console.log(userPost());
  console.log("hell");
});
