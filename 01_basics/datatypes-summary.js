// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const scoreVlue = 100.3;

const isLoggedIn = false
const oursideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 724856n
console.log(bigNumber)

// Reference (Non primitive)

// arrays, objects, functions

const heroes = ["Shaktiman", "Naagraj", "Batman"];
{
    name: "Ayush";
    age: 21;
}

console.log(heroes);

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof myFunction);
console.log(typeof anotherId);



// Stack (Primitve), Heap (Non-Primitve)

let myYoutubename = "abcayushdotcon";
let anothername = "ayushabcdotcom";

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "ayush@google.com",
    upi:"abc@ybl"
}

let userTwo = userOne

userTwo.email = "ayush2@google.com"

console.log(userOne.email);
console.log(userTwo.email);