//  Primitive

// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 23459378265279871876782779087842986n



// Refrence  (Non Primitive)

// Array, Objects, Functions

const heroes = ["Shaktiman", "naagraj", "doga"];
let myObj = {
    name: "amisha",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);


// ********************************************************************


// Stack (Primitive), Heap (Non-Primitive) => Two Types of Memory

let myYoutubename = "amishasikka.com"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "amisha@google.com"

console.log(userOne.email);
console.log(userTwo.email);