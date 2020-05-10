import barker from "./comp/barker.js";
import killer from "./comp/killer.js";
import driver from "./comp/driver.js";

function FMurderRobotDog(name) {
  this.name = `${name} + [FMurderRobotDog]`;
  Object.assign(this, killer(this), driver(this), barker(this));
}

export default FMurderRobotDog;
