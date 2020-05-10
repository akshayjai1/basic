import cleaner from "./comp/cleaner.js";
import driver from "./comp/driver.js";

function FCleaningRobot(name) {
  this.name = `${name} + [FCleaningRobot]`;
  Object.assign(this, cleaner(this), driver(this));
}

export default FCleaningRobot;
