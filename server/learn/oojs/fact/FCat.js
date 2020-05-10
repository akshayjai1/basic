import pooper from "./comp/pooper.js";
import meower from "./comp/meower.js";
function FCat(name) {
  this.name = `${name} + [FCat]`;
  Object.assign(this, pooper(this), meower(this));
}

export default FCat;
