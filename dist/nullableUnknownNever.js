"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getUser = (input) => {
    if (input) {
        return `User input is: ${input}`;
    }
    else {
        return "User input is null or undefined";
    }
};
console.log(getUser("Hello"));
const discountCalculator = (price, discount) => {
    if (price !== null && price !== undefined && discount !== null && discount !== undefined) {
        return price - (price * discount);
    }
    else {
        return "Price or discount is null or undefined";
    }
};
console.log(discountCalculator(100, 0.1));
//void type : used to indicate that a function does not return a value
const throwException = (message) => {
    console.log(message);
    throw new Error(message);
};
//# sourceMappingURL=nullableUnknownNever.js.map