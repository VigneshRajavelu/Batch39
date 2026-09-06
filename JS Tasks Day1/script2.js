
//Task 1 — Variables
//Create variables using var, let, and const.

var name = "Vignesh"
let age = 26
let city = "Coimbatore"
const college = "Karpagam Academy Of Higher Education"

//Print all values.
console.log(name);
console.log(age);
console.log(city);
console.log(college);


//Change the var value.
name = "karthi"
console.log(name);

//Change the let value.
age = 27
console.log(age);

city = "Cuddalore"
console.log(city);

//Try changing the const value.
// college = "PSG"
// console.log(college);
// TypeError: Assignment to constant variable.

//Try redeclaring each variable and observe what happens.
var name = "Sanjay"
console.log(name);


//Task 2 — Printing Statements

let value = 12345
console.log(value);

let message = "Caution"
alert(message);

let Confirmation = "Are you sure?"
confirm(Confirmation);

let student = prompt("Enter your name")
console.log("student name:", student);

let str = "Hello World!!!!!"
document.writeln(str);

//ask 3 — User Details
//Get from the user:

let Name = prompt("Enter your name")
console.log("Name:", Name);

let Age = prompt("Enter your age")
console.log("Age:", Age);

let City = prompt("Enter your city")
console.log("City:", City);

let Qualification = prompt("Enter your qualification")
console.log("Qualification:", Qualification);


//Data Type Tasks
//Task 4 — Find Data Types

let lang = "Javascript"
console.log(lang, typeof(lang));

let num = 100
console.log(num, typeof(num));

let num1 = 99.5
console.log(num1, typeof(num1));

let bool = true
console.log(bool, typeof(bool));

let bool1 = false
console.log(bool1, typeof(bool1));

let val
console.log(val, typeof(val));

let val1 = null
console.log(val1, typeof(val1));


//Task 5 — Student Array

let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"]

// First student
console.log("First student:", students[0]);

// Second student
console.log("Second student:", students[1]);

// Last student
console.log("Last student:", students[students.length-1]);

// Total students
console.log("Total students:", students.length);


//Task 6 — Employee Object

let employee = {
    empName : "Vignesh",
    empAge : 26,
    role : "Full Stack Developer",
    skills : ["Html", "Css", "Javascript" ],
    isWorking : true,
    qualification : ["BE CSE", "MBA"]

}

// Employee name
console.log("Employee name:", employee.empName);

// Age
console.log("Employee age:", employee.empAge);

// Role
console.log("Role:", employee.role);

// First skill
console.log("First skill:", employee.skills[0]);

// Last qualification
console.log("Last qualification:", employee.qualification[employee.qualification.length - 1]);

// Working status
console.log("Working status:", employee.isWorking);

//Arithmetic Operator Tasks
//Task 7 — Calculator

let A = 20;
let B = 5;

// Addition
console.log("Addition:", A+B);

// Subtraction
console.log("Subtraction:", A-B);

// Multiplication
console.log("Multiplication:", A*B);

// Division
console.log("Division:", A/B);

// Modulus
console.log("Modulus:", A%B);

// Exponentiation
console.log("Exponentiation:", A**B);

//Task 8 — Shopping Bill

let Shirt = 999
let Pant = 1499
let Shoes = 1999
let Bag = 799

console.log("Total price:", Shirt+Pant+Shoes+Bag);

//Task 9 — Increment & Decrement

//A
let c = 10;
let d = c++;

console.log(c); 
console.log(d);

//B
let e = 10;
let f = ++e;

console.log(e);
console.log(f);

//C
let g = 10;
let h = g--;

console.log(g);
console.log(h);

//D
let i = 10;
let j = --i;

console.log(i);
console.log(j);

//Assignment Operator Tasks
//Task 10

let num01 = 10;
num01 +=5;
console.log(num01)

let num02 = 10;
num02 -= 3;
console.log(num02);

let num03 = 10;
num03 *= 2;
console.log(num03);

let num04 = 10;
num04 /= 4;
console.log(num04);

let num05 = 10;
num05 %= 3;
console.log(num05);

let num06 = 10;
num06 **= 2;
console.log(num06);

// Comparison Operator Tasks

// Task 11 — Find Output

console.log(10 > 5); //true
console.log(10 < 5); //false
console.log(10 >= 10); //true
console.log(10 <= 9); //false

console.log(5 == "5"); //true
console.log(5 === "5"); //false

console.log(10 != "10"); //false
console.log(10 !== "10"); //true

// Logical Operator Tasks
// Task 12 — AND

console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

// Task 13 — OR

console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

// Task 14 — NOT

console.log(!true); //false
console.log(!false); //true
console.log(!(5 > 10)); //true
console.log(!(10 > 5)); //false

// Task 15 — Combination

console.log(5 == "5" && !(5 === 5) || 6 > 7); //false

console.log(10 > 5 && 8 < 12 || 4 === "4"); //true

console.log(7 === 7 && 10 != "10" || 5 >= 5); //true

console.log(15 < 10 || 20 > 15 && 5 == "5"); //true

// Ternary Operator Tasks
// Task 16 — Voting

let peopleAge = 20;

let result = peopleAge >= 18 ? "Eligible to vote" : "Not eligible";

console.log(result);

//Task 17 — Password

let password = true;

let login = password == true ? "Login successful" : "Wrong password";

console.log(login);

// Concatenation & Template String
// Task 18 — User Introduction

let personName = "Naveen";
let personAge = 25;
let personCity = "Trichy";

console.log("My name is" + " " + personName + ". " + "I am" + " " + personAge + " " + "years old." + " " + "I live in" + " " + personCity + ".");
console.log(`My name is ${personName}. I am ${personAge} years old. I live in ${personCity}.`)

//Type Casting Tasks
//Task 19 — String Conversion

let a1 = String(100);
let b1 = String(true);
let c1 = String(undefined);
let d1 = String(null);
let e1 = String([1, 2]);

console.log(a1, typeof(a1));
console.log(b1, typeof(b1));
console.log(c1, typeof(c1));
console.log(d1, typeof(d1));
console.log(e1, typeof(e1));

//Task 20 — Number Conversion

console.log(Number()); //0
console.log(Number("")); //0
console.log(Number("123")); //123
console.log(Number("a1")); //NaN
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number(undefined)); //NaN
console.log(Number(null)); //0

//Task 21 — Boolean Conversion

console.log(Boolean()); //false
console.log(Boolean("")); //false
console.log(Boolean("hello")); //true
console.log(Boolean(123)); //true
console.log(Boolean(true)); //true
console.log(Boolean(false)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false
console.log(Boolean([])); //true
console.log(Boolean({})); //true

// Flow Control Tasks
// Task 22 — Voting Eligibility

let yourAge = prompt("Enter your age:");

if (yourAge >= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}

//Task 23 — Positive or Negative

let no = prompt("Enter a number");

if (no > 0) {
    console.log("Positive");
} else if (no < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

//Task 24 — Grade System

let marks = prompt("Enter your marks");

if (marks >= 90) {
    console.log("A Grade");
} else if (marks >= 80) {
    console.log("B Grade");
} else if (marks >= 70) {
    console.log("C Grade");
} else if (marks >= 60) {
    console.log("D Grade");
} else {
    console.log("Fail");
}

//Nested If Task
//Task 25 — Job Eligibility

let hisAge = Number(prompt("Enter your age:"));
let height = Number(prompt("Enter your height in cm:"));
let weight = Number(prompt("Enter your weight in kg:"));

if (hisAge >= 18) {
    if (height >= 160) {
        if (weight >= 60) {
            console.log("Congratulations! You are selected");
        } else {
            console.log("You are not selected because your weight is below 60 kg");
        }
    } else {
        console.log("You are not selected because your height is below 160 cm");
    }
} else {
    console.log("You are not selected because your age is below 18");
}

//Switch Tasks
//Task 26 — Traffic Light

let color = prompt("Enter traffic light color:");

switch (color) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid traffic light color");
}

//Task 27 — Day
let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}

// FINAL MINI PROJECT
//Task 28 — Student Result System

// Step 1 — Get user details 
let userName = prompt("Enter your name:"); 
let userAge = Number(prompt("Enter your age:")); 
let userCity = prompt("Enter your city:");

// Step 2 — Get marks
let tamil = Number(prompt("Enter Tamil marks:"));
let english = Number(prompt("Enter English marks:"));
let maths = Number(prompt("Enter Maths marks:"));

// Step 3 — Calculate Total and Average 
let total = tamil + english + maths;
let average = total / 3;

// Step 4 — Check Grade 
let grade; 
if (average >= 90) 
    { 
        grade = "A"; 

    } 
else if (average >= 80) 
    { 
        grade = "B"; 

    } 
else if (average >= 70)
     { 
        grade = "C";

      } 
else if (average >= 60)
     {
         grade = "D"; 

     } 
else 
    { 
        grade = "Fail"; 

    }

// Step 5 — Check Voting Eligibility 
let voting; 
if (age >= 18) 
    { 
    
        voting = "Eligible";

     } 
else 
    { 
        voting = "Not Eligible";
    }

// Step 6 — Display Result 
console.log(` Name: ${userName} Age: ${userAge} City: ${userCity} Total: ${total} Average: ${average.toFixed(2)} Grade: ${grade} Voting: ${voting} `);