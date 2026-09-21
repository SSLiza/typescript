//? ternery operator : decision making operator

//?? nullish coalescing operator : used to provide a default value when the left-hand side is null or undefined
const value1 = "Value 1";
const value2 = "Value 2";
const condition = true;
const result = condition ? value1 : value2;
console.log(result); // Output: "Value 1"

const Usertheme =undefined;
const theme = Usertheme ?? "default theme";
console.log(theme); // Output: "default theme"

const UserName = null;
const name = UserName ?? "default name";
console.log(name); // Output: "default name"


//optional chaining operator : used to access properties of an object that may be null or undefined
const user = {
    name: "John Doe",
    address: {
        street: "123 Main St",  
        city: "Anytown",
        country: "USA"
    }
};

const street = user?.address?.street;
console.log(street); // Output: "123 Main St"

