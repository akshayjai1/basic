import Robot from "./Robot.js";

class KillingRobot extends Robot {
  constructor(name) {
    super(`${name} [Killing Robot]`);
  }
  kill() {
    console.log(`${this.name}  is killing`);
  }
}
export default KillingRobot;
