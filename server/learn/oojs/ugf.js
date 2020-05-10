import FCat from "./fact/FCat.js";
import FDog from "./fact/FDog.js";
import FCleaningRobot from "./fact/FCleaningRobot.js";
import FMurderRobot from "./fact/FMurderRobot.js";
import FMurderRobotDog from "./fact/FMurderRobotDog.js";

const fcat = new FCat("Misty");
console.log(fcat);
fcat.poop();
fcat.meow();
console.log("------------------------");

const Tom = new FDog("Tom");
console.log(Tom);
Tom.poop();
Tom.bark();
console.log("------------------------");

const CleaningBot = new FCleaningRobot("Cleaner");
console.log(CleaningBot);
CleaningBot.drive();
CleaningBot.clean();
console.log("------------------------");

const KillingBot = new FMurderRobot("Killer");
console.log(KillingBot);
KillingBot.drive();
KillingBot.kill();

console.log("------------------------");
const KillerTomBot = new FMurderRobotDog("KillerTomBot");
console.log(KillerTomBot);
KillerTomBot.drive();
KillerTomBot.kill();
KillerTomBot.bark();
console.log("------------------------");
