const getUser =(input: string | null | undefined) => {
    if(input){
        return `User input is: ${input}`;
    }else{
        return "User input is null or undefined";
    }
};

console.log(getUser("Hello"));


const discountCalculator = (price: unknown, discount: number | null | undefined) => {
    if(price !== null && price !== undefined && discount !== null && discount !== undefined){
        return (price as number) - ((price as number) * discount);
    }else{
        return "Price or discount is null or undefined";
    }
};

console.log(discountCalculator(100, 0.1));

//void type : used to indicate that a function does not return a value
const throwException = (message: string): never => {
    console.log(message);
    throw new Error(message);
};