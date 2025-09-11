/*
    Run this file by using the command: node 09_03_basics.js
*/
// // // --- Equality and Strict Equality ---------------------------------------
console.log('' == 0);
console.log('' == false);
console.log(null == undefined);

console.log('' === 0);
console.log('' === false);
console.log(null === undefined);

// // --- Ternary  ---------------------------------------
const degressCelsius = 2;
const stateH20 = degressCelsius > 0 ? 'liquid' : 'solid';
console.log(stateH20);

// // -- Traditional Conditional ---------------------------------------
if (degressCelsius > 0) {
    console.log('liquid');
} else {
    console.log('solid');
}

// // --- Function Declaration vs Function Expressions  ---------------------------------------

// // function declaration
declaration();
function declaration() {
    console.log('declaration - can call this from anywhere.');
}
declaration();

// // function expression
const expression = function () {
    console.log('expression - cannot call this from anywhere');
};
expression();

// // arrow function expression
const arrow = () => {
    console.log('arrow expression - also cannot call from anywhere');
};
arrow();

// // --- Strings ---
const workingWithStrings = () => {
    const greeting = 'Hello World!';

    // loop of a string and access using index
    for (let i = 0; i < greeting.length; i++) {
        const letter = greeting[i];
        console.log(letter);
    }

    // charAt
    const charAtLetter = greeting.charAt(0);
    console.log(charAtLetter);

    // includes
    const substr = greeting.includes('ello');
    console.log(substr);

    // toUpperCase
    console.log(greeting.toUpperCase());

    // toLowerCase
    console.log(greeting.toLowerCase());
};
workingWithStrings();

// // --- Arrays ---------------------------------------
const workingWithArrays = () => {
    const csv = 'venus,earth,mars';

    const planets = csv.split(',');
    console.log(planets);

    // push - mutating the array
    planets.push('jupiter');
    planets.push('saturn', 'uranus', 'neptune', 'pluto');
    console.log(planets);

    // pop - mutating the array
    const last = planets.pop();
    console.log(last);
    console.log(planets);

    // unshift - mutating the array
    planets.unshift('mercury');
    planets.unshift('sun');
    console.log(planets);

    // shift - mutating the array
    const first = planets.shift();
    console.log(first);
    console.log(planets);

    // join
    const joined = planets.join(',');
    console.log(joined);
};
workingWithArrays();

// // --- Objects ---------------------------------------
const objectLiteral = () => {
    const character = {
        name: 'Wonder Woman',
        alias: 'Diana Prince',
        team: ['Justice League'],
        abilities: ['super strength', 'flight', 'combat skills']
    };

    // access a property by dot notation
    console.log(character.name);

    // access a property by bracket notation
    console.log(character['alias']);

    // add a key using dot notation - mutating the object
    character.accessory = 'Lasso of Truth';
    console.log(character);

    // add a key using bracket notation - mutating the object
    // bracket notation allows use of variables and dot notation does not
    const t = 'trait';
    character[t] = 'Leadership';
    console.log(character);

    // delete by using dot notation - mutating the object
    delete character.accessory;

    // delete by using bracket - mutating the object
    delete character[t];

    console.log(character);
};
objectLiteral();

// // -- Object Methods ---
const objectMethods = () => {
    const course = {
        department: 'Computer Science',
        number: 5220,
        startTime: '7:00pm'
    };

    // Object.assign - merge and mutatating the object
    Object.assign(course, { startTime: '7:25pm', endTime: '8:40pm' });
    console.log(course);

    // using a variable as a key in Object.assign -  merge and mutatating the object
    const courseRoom = 'room';
    Object.assign(course, { [courseRoom]: 'KH' });
    console.log(course);

    // short hand notation - use variables names as property names
    const year = 2025;
    const semester = 'Fall';
    Object.assign(course, { year, semester });
    console.log(course);

    // keys
    const keys = Object.keys(course);
    console.log(keys);

    // values
    const values = Object.values(course);
    console.log(values);

    // entries
    const entries = Object.entries(course);
    console.log(entries);
};
objectMethods();
