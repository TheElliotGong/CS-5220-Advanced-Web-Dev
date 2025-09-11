/*
1. Go into the directory where this file was downloaded
2. Run this file by using the command: node 8_27_demo.js
*/

// // // --- Declarations (let vs const) ---------------------------------------
const hello = 'hello';
console.log(hello);

let hey = 'hey';
hey += ' world';
console.log(hey);

let count = 1;
count++;
count++;
console.log(count);

// // // --- Undefined vs Null -------------------------------------------------
let undef;
console.log(undef);
undef = true;
console.log(undef);

let n = null;
console.log(n);
n = true;
console.log(n);

// // // --- Unary Operator (typeof) -------------------------------------------
// console.log(typeof 'CS5220');
// console.log(typeof 2025);

// // // --- Dynamic Typing ----------------------------------------------------
let x;
x = 1;
x++;
console.log(x);
console.log(typeof x);

x = 'hello';
x += ' world';
console.log(x);
console.log(typeof x);

x = [7, 8, 9];
x.push(10);
console.log(x[0]);
console.log(typeof x);

// // // --- Mutation  ---------------------------------------------------------

// Strings are immutable
let js = 'javascript';
console.log(js[0]);
js[0] = 'z';
console.log(js[0]);
console.log(js);

console.log(js.length);
js.length = 100;
console.log(js.length);

// Array are mutable
let jsArr = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'];
console.log(jsArr[0]);
jsArr[0] = 'z';
console.log(jsArr[0]);
console.log(jsArr);

console.log(jsArr.length);
jsArr.length = 100;
console.log(jsArr.length);
console.log(jsArr);
