// // Object Destructuring

// const person = {
// 	name: 'Jake',
// 	// age: 26,
// 	location: {
// 		city: 'Berlin',
// 		temp: 93
// 	}
// }

// const {name: fname, age = 29, location:{city, temp}} = person;

// console.log(`${fname} is ${age} years old and lives in ${city} where the temporature is ${temp}`)

// Array Destructuring

const address = ['CA', '75 B', 'Hari Nagar', 'New Delhi'];
const [block, houseNumber, district, city] = address;

console.log(`${block} ${houseNumber} ${district} ${city}`);