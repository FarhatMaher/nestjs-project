import sayHi, { HelloWorld } from "./hello";
import Car from "./models/car";

let name = "maherr";

HelloWorld(name);
sayHi();

let mycar : Car = new Car("peugoet","blanche")

console.log(mycar.getColor())
console.log(mycar.getModel())
mycar.move()
mycar.stop()
mycar.marcheAr()