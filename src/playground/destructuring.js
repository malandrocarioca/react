// const person ={
//     name: 'Vas',
//     age: 52,
//     location: {
//         city: 'Atlanta',
//         temp: 92
//     }
// };

// //this line is = to two below
// const{ name, age} = person
// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}.`);

// const book = {
//     title: 'Ego is an enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Ping'
//     }
// };

// const {name: publisherName = 'Selfpub' } = book.publisher;
// console.log(publisherName); 

// array destructuring

const address = ['123 Main st', 'Atlanta', 'GA', '30062'];
const [,, state = 'NY', zip] = address;

console.log(`You are in ${state} ${zip}`)