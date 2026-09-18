"use strict";
//function
Object.defineProperty(exports, "__esModule", { value: true });
//arrow function , normal function
function addnormal(num1, num2) {
    return num1 + num2;
}
console.log(addnormal(10, 20));
const addArrow = (num1, num2) => {
    return num1 + num2;
};
console.log(addArrow(10, 20));
//object => function => method
const poorUser = {
    firstName: "Alice",
    lastName: "Smith",
    age: 30,
    balance: 0,
    addBalance(value) {
        const totalbalance = this.balance += value;
        return totalbalance;
    }
};
console.log(poorUser.addBalance(100));
//# sourceMappingURL=function.js.map