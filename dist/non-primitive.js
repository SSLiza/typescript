"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let obj = { name: "Alice", age: 30 };
console.log(obj.name); // "Alice"
// array , object
let bazarList = ["eggs", "milk", "sugar"];
bazarList.push("bread"); // valid
// bazarList.push(true) // error
let mixedArr = ['eggs', 12, 'milk', 1, 'sugar'];
mixedArr.push(1);
mixedArr.push('sugar');
// mixedArr.push(false);  error
let coordinates = [10, 20]; // tuple
let couple = ["John", "Jane"]; // destructuring
let [man, woman] = couple; // destructuring assignment
console.log(man); // "John"
console.log(woman); // "Jane"
let nameAndRoll = ["Alice", 101]; // tuple with string and number
console.log(nameAndRoll[0]); // "Alice"
console.log(nameAndRoll[1]); // 101
let destination = ["Paris", "London", 1000]; // tuple with three elements
console.log(destination[0]); // "Paris"
console.log(destination[1]); // "London"
console.log(destination[2]); // 1000
//reference type
// let user: {
//     firstName: "Bob"; //value as type
//     midname?: string; //optional type 
//     lastName: string;
//     age: number;
//     isStudent: boolean
// } = {
//     // firstName: "Alice"
//     // midname: "B.",
//     lastName: "Smith",
//     age: 30,
//     isStudent: true
// } 
let user = {
    firstName: "Alice",
    // midname: "B.",
    lastName: "Smith",
    age: 30,
    isStudent: true
};
// user.firstName = "Johnson"; // error: Cannot assign to 'firstName' because it is a read-only property.
// user.age = "thirty"; // error
console.log(user);
//# sourceMappingURL=non-primitive.js.map