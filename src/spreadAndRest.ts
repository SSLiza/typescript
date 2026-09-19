const schoolfriends = ['Alice', 'Bob', 'Charlie'];

const collegefriends = ['David', 'Eve', 'Frank'];


const friends = [...schoolfriends, ...collegefriends];

console.log(friends);

const friends2 = [...schoolfriends, 'Grace', ...collegefriends];

console.log(friends2);

const user = {
    firstName: 'Alice',
    lastName: 'Smith',
    age: 30,
    balance: 0
};

const otherInfo = {
    email: 'alice.smith@example.com',
    phone: '123-456-7890'
};

const updatedUser = { ...user, ...otherInfo };

console.log(updatedUser);

//rest operator

const sendInvitation = (...friends: string[])=>{
    friends.forEach(friend => {
        console.log(`Sending invitation to ${friend}`);
    });
}

sendInvitation('Alice', 'Bob', 'Charlie');