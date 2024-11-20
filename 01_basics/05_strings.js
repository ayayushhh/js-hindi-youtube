const name = "Ayush";
const repoCount = 7

//console.log(name +" " + "has" + " "+ repoCount + " " + "repositories in GitHub.");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Ayushtkr')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(0,4);
console.log(anotherString);

const newStringOne = "  Ayush   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ayush.com/ayush%20thakur"

console.log(url.replace('%20', '-'))

console.log(url.includes('ayush'))