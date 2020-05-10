import killer from "./comp/killer.js";
import driver from "./comp/driver.js";

function FMurderRobot(name) {
  this.name = `${name} + [FMurderRobot]`;
  Object.assign(this, killer(this), driver(this));
}

export default FMurderRobot;
