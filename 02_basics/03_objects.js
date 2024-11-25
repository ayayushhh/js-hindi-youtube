// singleton

// Object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "AYUSH THAKUR",
    [mySym]: "mykey1",
    age: 21,
    location: "Bengaluru",
    email: "ayushoct15@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email)
console.log(jsUser[mySym])

jsUser.email = "ayushabc.com"
Object.freeze(jsUser)
jsUser.email = "ajdbdkjak.com"
//console.log(jsUser);

jsUser.greeting = function() {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greeting);
console.log(jsUser.greetingTwo);