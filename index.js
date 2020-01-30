//name cannot be a reserved keyword
//should be meaningful
//cannot start with a number
//cannot contain space or hyphen
//case sensitive

//variables
let firstName = "Bruce";
let lastName = "Muthomi";

//const
const interestRate = 0.3;
interestRate = 1;

//if you want to reassign use let and
//if you dont want to re-assign use const

//primitive types
//string,number,boolean,undefined,null
let name = "Guantai"; //dtring
let age = 25; //number
let IsApproved = true; //boolean
let firstName = "him"; //undefined
let lastName = null; //null

//Reference Types
//object,array,Function
//object
let person = {
  name: "Muthomi",
  age: 30
};

//Dot Notation
person.name = "john";

//bracket notation
person["name"] = "Mary";

console.log(person.name);

//arrays
let selectedColors = ["red", "blue"];
selectedColors[2] = "green";
console.log(selectedColors);

//functions
function greet(name, lastName) {
  console.log("Hello " + name + "" + lastName);
}
greet("Bruce", "Muthomi");

//types of functions
function square(number) {
  return number * number;
}
console.log(square(2));
//or
let number = square(2);
console.log(number);
