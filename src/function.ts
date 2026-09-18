//function

//arrow function , normal function

function addnormal(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(addnormal(10, 20));

const addArrow = (num1: number, num2: number): number => {
    return num1 + num2;
}

console.log(addArrow(10, 20));

//object => function => method

const poorUser = {
    firstName: "Alice",
    lastName: "Smith",
    age: 30,
    balance: 0,
    addBalance (value: number): number {
        const totalbalance = this.balance += value;
        return totalbalance;
    }
};

console.log(poorUser.addBalance(100));

const arr: number[] = [1, 2, 3, 4, 5];

const sum = arr.map((elem: number): number => {
    return elem * 2;
});