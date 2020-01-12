//	GENERAL SYNTAX AND NOTES
	
	// 	use 'strict'
	"use strict";

	//	console can print multiple values
	console.log('Hello, I am', 23, 'years old');


//	OBJECT ORIENTED JAVASCRIPT

	//	Inheritance is done using call
	const Song = (param1, param2) = {
		Media.call(this, param1, param2);	// media is another constructor from which other methods are inherited
	}


//	ECMA SCRIPT

	// let & const have block scope - function, if, loop & var has global scope

	// using `` we can print strings with whitespace characters
	let person = { name: 'Divyanshu', age: 23 }
	let output = 	`<ul>
						<li>name: ${person.name} </li>
						<li>Age : ${person.age}  </li>
					</ul>`

	// inserting values into strings using ECMA script syntax
	let age = 23; let str = `I am ${age} years old`;	// using ``
	

	//	STRING FUNCTIONS 

		let temp = 'Hello, My name is ADAM!';

		//	check if a string start with a given substring - CASE SENSITIVE
		startSearchingFrom = 5;	//	optional, default=0
		endUpTill = 0;	//	optional, 
		console.log(temp.startsWith('Hello'), startSearchingFrom);
		console.log(temp.endsWith('ADAM'), endUpTill); //	endUpTill considers the string from starting uptill value given
		console.log(temp.includes('name'));


	//	LAMBDA/ARROW FUNCTIONS

		//	arrow functions for single statements. They may even not contain parentheses
		const greetHello = (name) => console.log('Hello', name); greetHello('Divyanshu');
		const sayBye => console.log('Bye!');

		//	arrow functions bind the function to the instance
		let Person = function(data) {
			for( var key in data) {
				this[key] = data[key];
			}
			this.getKeys = () => return Object.keys(this); // normal function would give error for getKeys()
		}

		let Alena = new Person({name: 'Alena', role: 'Teacher'});
		console.log('Alena\'s keys:', Alena.getKeys()); // this refers to Alena

		let getKeys = Alena.getKeys;
		console.log(getKeys());	// this would have given error if arrow function was not used


	//	DEFAULT ARGUMENTS
		const email = (fname, lname, age = 18) => {
			fname = fname || ''; lname = lname || '';
		}


	//	REST PARAMS - has to be the last arg
		const details = (name, ...vals) => {
			console.log(name, vals);
		}

		const detailsTwo = (...vals) => {
			console.log(vals);
		}

	//	SPREAD OPERATOR
		const arr = [1,2,3,4,5,6,7,8,9];
		console.log(...arr); // spits out values one by one
		const num = [15,4];
		const sq = (a,b) => { return a*b; }
		console.log(sq(...num)) //	60


	// Destructuring
		let toy = { item1: 'car', item2: 'ball', item3: 'frisbee'};
		let {item1, item2} = toy;	// keys on the left
		let {item1: one, item2: two} = toy;	//	one and two contain values toy['item1'] & toy['item2']

		let w = [w1, w2, w3, w4, w5];
		let [a,b,c, ...d] = w;


	// SHORTHAND OBJECT CREATION
		const submit = (name, comments, rating = 5) => {
			let data = {name, comments, rating}
			// equal to data = {
				'name': name, 'comments': comments, 'rating': rating
			}
			console.log(data);
		}

		submit('Divyanshu', 'NODEJS') //	no 3rd param given

		submit('Divyanshu', 'NODEJS', 4.6)


	// for...of
		fruits = [
			{name: 'orange', color: 'orange'},
			{name: 'apple', color: 'red'},
			{name: 'banana', color: 'yellow'},
		]
		for(let fruit of fruits) {
			console.log(fruit.color);
			if(fruit.name == 'apple') break;
		}


	//	SET -  iterable with unique values
		classroom = new Set();
		let a = {name: 'a', age: 23}, {name: 'a', age: 23}
		classroom.add(a); classroom.add(b);
		if(classroom.has(a)) console.log('a exists');
		if(classroom.has(b)) classroom.delete(b);

		// converting array to set and vice versa
		arr = Array.from(classroom);
		newSet = new Set(arr);


	//	MAP
		let students = new Map();
		students.set('ayush', {name: 'Ayush', age: 23});
		students.set('aditya', {name: 'Aditya', age: 23});
		students.set('chirag', {name: 'Chirag', age: 23});

		console.log(students.get('ayush'));

		students.has('aditya'); 	//	check if property exists
		students.delete('chirag');	//	delete an entry from map
		students.clear()			//	clear the whole map

		for (let student of students) {
			console.log(`${student[0]}: ${student[1].name} is ${student[1].age} years old`)
		}


	// CLASSES
		class Person {
			constructor({name, age} = {}) {
				this.name = name; this.age = age;
			}
			sayhello() {
				console.log('Hello');
			}
		}

		class Student extends Person {
			constructor({name, age, city}){
				super({name, age}) //	calling constructor function of Person 
				this.city = city;
			}
			callFunction(person){
				if(person){ super.sayhello(); return }
			}else { sayhello();}
		}
