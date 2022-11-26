import { users } from "./users";

export default class UI {
  constructor() {
    this.showUser = document.getElementById("show");
  }

  getInfo() {
    const user = users.filter((user) => user.id === 2);

    return user[0];
  }

  logInUser() {
    const loggedUser = this.getInfo();
    this.showUser.innerText = `name: ${loggedUser.name} password: ${loggedUser.password}`;
  }
}
