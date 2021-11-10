// let whiteRabbit = {};

// whiteRabbit.color = "white";
// whiteRabbit.speak = function (line) {
//     console.log(`The ${this.color} rabbit says "${line}"`);
// };

// whiteRabbit.speak("I'm late!");

// this makes sure out speak method doesn’t output undefined

// this.color = "rainbow";

// const speakMethod = (line) => {
//     console.log(`The ${this.color} rabbit says "${line} "`);
// };
// let rabbit = {
//     color: 'white',
//     bananas: speakMethod
// };

// rabbit.toString = function rabbitOutput() {
//     return "I'm a rabbit that's the color " + this.color;
// };


// console.log(rabbit + " object tostring");

// rabbit.bananas("I'm late and a different colour!");

// let arrayObject = new Array(1, 2, 3, 4, 5);

// console.log(Object.getPrototypeOf([]) === Array.prototype);

// console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype);

// console.log(Object.getPrototypeOf(Object.prototype));


//the old way of defining classes in javascript

// function Animal(type) {
//     this.type = type;
// }

// Animal.prototype.toString = function animalToString() {
//     return "This animal is a " + this.type;
// }

// let fluffyRabbit = new Animal("Rabbit");

// console.log(fluffyRabbit + "");


// class Animal {
//     constructor(type) {
//         this.type = type;
//     }
//     toString() {
//         return "This animal is a " + this.type;
//     }
// }

// let rabbit = new Animal("Rabbit");

// let rabbitString = `The animal says: ${rabbit}`;

// // note: console.log doesn't invoke toString
// console.log(rabbit);
// console.log(rabbitString);

class Temperature {
    celcius = 0;
    constructor(celcius) {
        this.celcius = celcius;
    }
    get fahrenheit() {
        return this.celcius * 1.8 + 32;
    }
    set fahrenheit(value) {
        this.celcius = (value - 32) / 1.8;
    }
}

let temp = new Temperature(22);

console.log("The temperature out is " + temp.celcius + "°C");
console.log("The temperature in america land is " + temp.fahrenheit + "°F");
temp.fahrenheit = 48;
console.log("The temperature out is " + Math.round(temp.celcius) + "°C");


console.log("celcius" in Temperature);


const classroom = {
    size: 24,
    year: 2,
    room: '80A'
};
for (const property in classroom) {
    console.log(`Property name: ${property}`);
    if (property === "year") {
        console.log("You're graduating this year!");
    }
    console.log(`Property value: ${classroom[property]}`);
}