import Robot from "./Robot.js";

class CleaningRobot extends Robot {
  constructor(name) {
    super(name);
  }
  clean() {
    console.log(`${this.name} [Cleaning Robot] is cleaning`);
  }
}
export default CleaningRobot;
