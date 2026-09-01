//JavaScript Tasks
//Task 1 — var, let, const

var studentName = "Vignesh R"
let studentAge = 26
const collegeName = "Karpagam Academy Of Higher Education"

//1.Print all three values
console.log(studentName);
console.log(studentAge);
console.log(collegeName);

//2.Change the var value
studentName = "Karthik"
console.log(studentName);

//3.Change the let value
studentAge = 25
console.log(studentAge);

//4.Try changing the const value and observe the error
//collegeName = "PSG"
//console.log(collegeName);
//TypeError: Assignment to constant variable

//5.Try redeclaring the var variable
var studentName = "Santhosh"
console.log(studentName);

//6.Try redeclaring the let variable and observe the error
//let studentAge = 24
//console.log(studentAge);
//SyntaxError: Identifier 'studentAge' has already been declared



// Task 2 — User Information

let Name = prompt()
let Age = prompt()
let City = prompt()

console.log("Name:", Name);
console.log("Age:", Age);
console.log("City:", City);



//Task 3 — Welcome Message

let name1 = prompt("Enter your name")
console.log("Welcome", name1+"!");


//Task 4 — Age Calculator

let birthYear = prompt("Enter your birth year")
let currentYear = 2026
let age = currentYear - birthYear
console.log("Birth Year:", birthYear);
console.log("Age:", age);

//Data Type Tasks
//Task 5 — Identify Data Types


let random = "Hello"
let num = 100
let num1 = 25.5
let boo = true
let bool = false
let random1 = undefined
let empty = null

console.log(typeof(random));
console.log(typeof(num));
console.log(typeof(num1));
console.log(typeof(boo));
console.log(typeof(bool));
console.log(typeof(random1));
console.log(typeof(empty));

//Task 6 — Student Data

let student = {
    name : "Dharsini",
    age : 25,
    qualification: "BE" ,
    isStudent : true
}

//1.Complete object
console.log(student);

//2.Name
console.log(student.name);

//3.Age
console.log(student.age);

//4.Qualification
console.log(student.qualification);

//5.isStudent
console.log(student.isStudent);


//Task 7 — Fruit Array

let fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes", "Papaya"]

//1.First fruit
console.log(fruits[0]);

//2.Second fruit
console.log(fruits[1]);

//3.Last fruit
console.log(fruits[fruits.length-1]);

//Total number of fruits
console.log(fruits.length);


// Arithmetic Operator Tasks
//Task 8 — Basic Calculator

let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

//Task 9 — Shopping Bill

let shirt = 999
let pant = 1499
let shoes = 1999

let total = console.log("Total = ", shirt+pant+shoes)

//Task 10 — Simple Marks Calculation

let tamil = 80
let english = 75
let maths = 90

let totalMarks = tamil + english + maths

let averageMarks = totalMarks / 3

console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);


// Increment & Decrement Tasks
//Task 11 — Post Increment

let aNum = 10
let bNum = aNum++

console.log(aNum); //11
console.log(bNum); //10

//Task 12 — Pre Increment

let aN = 10
let bN = ++aN

console.log(aN); //11
console.log(bN); //11

//Task 13 — Post Decrement

let c = 20
let d = c--

console.log(c); //19
console.log(d); //20


//Task 14 — Pre Decrement

let cNum = 20
let dNum = --cNum

console.log(cNum); //19
console.log(dNum); //19

//Challenge Tasks
//Task 15 — Find the Final Values

/*let a = 5;

let b = a++;

let c = ++a;

let d = b--;

console.log(a);
console.log(b);
console.log(c);
console.log(d);*/

//Task 16 — Assignment Operators

let numA = 10
numA += 5
console.log(numA) //15

let numB = 10
numB -= 5
console.log(numB) //5

let numC = 10
numC *= 5
console.log(numC) //50

let numD = 10
numD /= 5
console.log(numD) //2

let numE = 10
numE %= 5
console.log(numE) //0

let numF = 10
numF **= 5
console.log(numF) //10000

//Task 17 — Mini Student Profile



let studName = "Vignesh"
let studAge = 26
let studCity = "Coimbatore"
let studCollege = "KAHE"

let favSubjects = ["English", "Maths", "Physics", "Chemistry", "Computer science"]

let studentA = {
    Name : studName,
    Age : studAge,
    City : studCity,
    Subjects : favSubjects,
    isStudentt : true
}

console.log("Student name:", studName);
console.log("Student age:", studAge);
console.log("City", studCity);
console.log("First subject:", favSubjects[0]);
console.log("Last subject:", favSubjects[favSubjects.length-1]);
console.log("Total subjects:", favSubjects.length);
console.log("Complete object:", studentA);



//Final Challenge — User + Calculator

let i = Number(prompt("Enter a number:"))
let j = Number(prompt("Enter a number:"))

console.log("Addition:", i + j);
console.log("Subtraction:", i - j);
console.log("Multiplication:", i * j);
console.log("Division:", i / j);
console.log("Modulus:", i % j);
console.log("Power:", i ** j);
