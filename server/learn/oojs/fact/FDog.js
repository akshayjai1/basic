import pooper from "./comp/pooper.js";
import barker from "./comp/barker.js";
function FDog(name) {
  this.name = `${name} + [FDog]`;
  Object.assign(this, pooper(this), barker(this));
}

export default FDog;
