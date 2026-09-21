"use strict";
//? ternery operator : decision making operator
Object.defineProperty(exports, "__esModule", { value: true });
//?? nullish coalescing operator : used to provide a default value when the left-hand side is null or undefined
const value1 = "Value 1";
const value2 = "Value 2";
const condition = true;
const result = condition ? value1 : value2;
console.log(result); // Output: "Value 1"
const Usertheme = undefined;
const theme = Usertheme ?? "default theme";
console.log(theme); // Output: "default theme"
const UserName = null;
const name = UserName ?? "default name";
console.log(name); // Output: "default name"
//# sourceMappingURL=questionMark.js.map