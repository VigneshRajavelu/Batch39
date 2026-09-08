//Variables & Data Types (Questions 1-8)

// Q1: What is the difference between var, let, and const?

//var → Can be redeclared and reassigned
//let → Cannot be redeclared in the same scope, but can be reassigned
//const → Cannot be redeclared or reassigned

//Q2: Can you re-declare a variable with var? What about let and const?

//Yes, var can be redeclared
//let and const cannot be redeclared in the same scope

//Q3: What is the output of this code?

// var x = 5;
// let y = 10;
// const z = 15;

// x = 20;
// y = 25;
// z = 30;

// console.log(x, y,z); 

//20
//25
//TypeError: Assignment to constant variable.


//Q4: What is the difference between declaring and initializing a variable?

// Declaration: Telling the program that a variable exists.

let value;

// Initialization: Giving a variable its first value.

let val = 12;

// Q5: What will be the output?

let a;
console.log(a);

//undefined

// Q6: What is hoisting? Give an example.

//Hoisting: JavaScript's behavior of moving variable and function declarations to the top of their scope before execution.

var b;
console.log(b);
b = 10;

//Q7: What is the difference between null and undefined?

// undefined: A variable has been declared but has not been assigned a value.

let c; // undefined

// null: A variable is intentionally assigned no value.

let d = null; // null

// Q8: What will be the output?

console.log(typeof null); //Object
console.log(typeof undefined); //Undefined
console.log(typeof []); //Object
console.log(typeof {}); //Object

//Operators (Questions 9-14)

//Q9: What is the difference between == and ===?

// == (Loose Equality): Compares values after type conversion if needed.

5 == "5"   // true

// === (Strict Equality): Compares both value and data type without type conversion.

5 === "5"  // false

// Q10: What is the difference between ++i and i++?

// ++i (Pre-increment): Increases i first, then uses the value.

let i = 5;

console.log(++i); // 6

// i++ (Post-increment): Uses the current value first, then increases i.

let j = 5;

console.log(j++); // 5

console.log(j);   // 6

//Q11: What will be the output?

let x = 10;
let y = "5";

console.log(x + y); //105
console.log(x - y); //5
console.log(x * y); //50
console.log(x / y); //2

//Q12: What are logical operators? Explain with examples.

// Logical operators are used to combine or check multiple conditions. They return true or false.

// AND (&&) - true only if both conditions are true.

// true && true   // true
// true && false  // false

// OR (||) - true if at least one condition is true.

// true || false  // true
// false || false // false

// NOT (!) - Reverses the result.

// !true   // false
// !false  // true

//Q13: What will be the output?

console.log(5 > 3 && 10 > 5); //true
console.log(5 > 10 || 10 > 5); //true
console.log(!(5 > 3)); //false

//Q14: What is the ternary operator? Give an example.

// Ternary operator is a short way to write an if...else condition

// let age = 20;

// let result = age >= 18 ? "Eligible" : "Ineligible";

// console.log(result);

// Type Casting (Questions 15-17)

// Q15: What is the difference between implicit and explicit type casting?

// Implicit Type Casting: JavaScript automatically converts one data type into another.

// let x = 5;
// let y = "10";

// console.log(x + y); // "510"

// Explicit Type Casting: The programmer manually converts one data type into another.

// let x = "10";

// console.log(Number(x)); // 10

// Q16: What will be the output?

console.log(Number("123")); //123
console.log(Number("hello")); //NaN
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Boolean(0)); //false
console.log(Boolean("hello")); //true

// Q17: What is NaN? Give an example.

// NaN stands for “Not a Number.”

// It is a special JavaScript value that means a mathematical operation or conversion did not produce a valid number.

console.log(Number("hello")); //NaN

// Conditional Statements (Questions 18-21)

//Q18: What is the difference between if-else and switch?

//if-else is used when you need to check different conditions.

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible");
}

//switch is used when you want to compare one value against multiple specific cases.

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
}

// Q19: What will be the output?

let age = 20;
if(age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
//Adult

// Q20: What is nested if? Give an example.

//A nested if is an if statement placed inside another if statement.

// let age = 20;
// let hasID = true;

// if (age >= 18) {
//     if (hasID) {
//         console.log("enter your age");
//     }
// }

// Q21: Write a program to check if a number is even or odd using ternary operator.


let num = 7;

let result = num % 2 === 0 ? "Even" : "Odd";

console.log(result);

//Odd

//Loops (Questions 22-25)

// Q22: What is the difference between while and do-while?

// while loop: Checks the condition before executing the code.

// while
while (condition) {
    // code
}

// do-while loop: Executes the code at least once, then checks the condition.

// do-while
do {
    // code
} while (condition);

// Q23: What will be the output?

for(let i = 1; i <= 5; i++) {
    console.log(i);
}

//1
//2
//3
//4
//5

// Q24: What is the difference between for-of and for-in?

// for-of - Used to get the values of an iterable such as an array or string.

// let fruits = ["Apple", "Banana", "Mango"];

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// Apple
// Banana
// Mango

// for-in → Used to get the keys/indexes.

let fruits = ["Apple", "Banana", "Mango"];

for (let index in fruits) {
    console.log(index);
}

// 0
// 1
// 2

// Q25: Write a program to find sum of numbers from 1 to 100.

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log(sum);

//5050

// Arrays (Questions 26-27)

//Q26: What is the difference between slice and splice?

// slice() - Extracts a portion of an array without changing the original array.

// let arr = [1, 2, 3, 4];

// console.log(arr.slice(1, 3)); // [2, 3]
// console.log(arr);            // [1, 2, 3, 4]

// splice() - Adds, removes, or replaces elements and changes the original array.

// let arr = [1, 2, 3, 4]; 
// arr.splice(1, 2);
// console.log(arr); // [1, 4]

//Q27: What will be the output?

let arr = [1, 2, 3]; 

arr.push(4); //[1,2,3,4]
arr.pop(); //[1,2,3]
arr.unshift(0); //[0,1,2,3]
arr.shift(); //[1,2,3]

console.log(arr); //[1,2,3]

//  Functions (Questions 28-30)

// Q28: What is the difference between function declaration and function expression?

// Function Declaration: A function is declared using the function keyword.

function greet() {
    console.log("Hello");
}

// Function Expression: A function is stored inside a variable.

function greet() {
    console.log("Hello");
}

// Q29: What is an arrow function? Give an example.

// Arrow function is a shorter way to write a function using the => syntax.

let add = (a, b) => {
    return a + b;
};

console.log(add(2, 3));

//Q30: What will be the output?

function greet() {
    return "Hello";
}
let message = greet();
console.log(message);

//Hello