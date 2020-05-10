import KillingRobot from "./KillingRobot.js";

class MurderRobotDog extends KillingRobot {
  constructor(name) {
    super(`${name} [MurderRobotDog]`);
  }
  bark() {
    console.log(`${this.name} is barking`);
  }
}
export default MurderRobotDog;
