type User = {
    id: number,
    name: {
        first: string,
        middle: string,
        last: string
    },
    age: number,
    contacts: {
        email: string,
        phone: number
    }
}
const user1: User = {
    id: 1,
    name: {
        first: "John",
        middle: "F.",
        last: "Kennedy"
    },
    age: 30,
    contacts: {
        email: "john.kennedy@example.com",
        phone: 555-1234
    }
}


const user2: User = {
    id: 2,
    name: {
        first: "Jane",
        middle: "A.",
        last: "Doe"
    },
    age: 25,
    contacts: {
        email: "jane.doe@example.com",
        phone: 555-5678
    }
}

type name = string;

const userName: name = "John Doe";

type AddFunction = (num1: number, num2: number) => number;

const add: AddFunction = (num1, num2) => {
    return num1 + num2;
}
