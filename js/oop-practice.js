// STEP 1

// function Cat() {
//     this.name = 'Caluga';
//     this.color = 'Orange';
// }
// const myCat = new Cat();
// console.log(myCat.color);


// const Dog = function() {
//     this.name = 'Boni';
//     this.color = 'black';
// }
// const myDog = new Dog();
// console.log(myDog.color);

// STEP 2

// const cat1 = new Cat();

// const dog1 = new Dog();

// STEP 3

// class Animal {
//     constructor() {
//         console.log(`The animal has been created`);
//     }
// }
// const animal1 = new Animal();

// STEP 4
// class Animal {
//     constructor(type) {
//         this.type = type;
//         console.log(`This ${this.type} has been created`);
//     }
// }
// const animal1 = new Animal('Mammal');

// STEP 5

class Animal {
    constructor(type, breed, color, height, length) {
        this.type = type;
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.length = length;
        console.log(`This is a ${this.type}, ${breed}, of ${color} color, and measures of  ${height} meters height, and ${length} cm length`);
    }
}
const animal1 = new Animal('Mammal', 'elephant', 'gray', '200', '200');

// STEP 6

// STEP 7

// STEP 8

// STEP 9