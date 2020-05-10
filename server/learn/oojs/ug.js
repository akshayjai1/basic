import Cat from "./clas/Cat.js";
import Dog from "./clas/Dog.js";
import CleaningRobot from "./clas/CleaningRoBot.js";
import KillingRobot from "./clas/KillingRobot.js";
import MurderRobotDog from "./clas/MurderRobotDog.js";
const Lucy = new Cat("Lucy");
console.log(Lucy);
Lucy.poop();
Lucy.meow();
console.log("------------------------");
const Tom = new Dog("Tom");
console.log(Tom);
Tom.poop();
Tom.bark();
console.log("------------------------");

const CleaningBot = new CleaningRobot("Cleaner");
console.log(CleaningBot);
CleaningBot.drive();
CleaningBot.clean();
console.log("------------------------");

const KillingBot = new KillingRobot("Killer");
console.log(KillingBot);
KillingBot.drive();
KillingBot.kill();

console.log("------------------------");
const KillerTomBot = new MurderRobotDog("KillerTomBot");
console.log(KillerTomBot);
KillerTomBot.drive();
KillerTomBot.kill();
KillerTomBot.bark();
console.log("------------------------");
