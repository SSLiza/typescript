"use strict";
//object destructuring
Object.defineProperty(exports, "__esModule", { value: true });
//array destructuring
const user = {
    name: {
        firstName: 'Alice',
        midname: 'Marie',
        lastName: 'Smith',
    },
    age: 30,
    balance: 0
};
const age1 = user.age;
const { age, name: { firstName } } = user;
console.log(age1);
console.log(age);
// console.log(firstName);
const friends = ['Alice', 'Bob', 'Charlie'];
const [, friend2] = friends;
// console.log(friend1);
console.log(friend2);
// console.log(friend3);
//# sourceMappingURL=destructuring.js.map