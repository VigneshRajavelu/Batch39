//Task 1 — For Loop
//Print numbers from 1 to 10 using a for loop. 

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Task 2 — Reverse Number
//Print numbers from 10 to 1 using a for loop.

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//Task 3 — Even Numbers
//Print all even numbers from 1 to 20.

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

//Task 4 — Odd Numbers
//Print all odd numbers from 1 to 20.

for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}

// Task 5 — Multiplication Table
let num = Number(prompt("Enter a number:"));

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}

// While Loop
//Task 6 — Countdown

let n = 10;

while (n >= 1) {
    console.log(n);
    n--;
}

//Task 7 — Sum of Numbers

let i = 1;
let sum = 0;

while (i <= 10) {
    sum = sum + i;
    i++;
}

console.log(sum);

//Do While
//Task 8 — Print Numbers

let j = 1;

do {
    console.log(j);
    j++;
}

while (j <= 5);

//Task 9 — Do While Understanding

let a = 10;

do {
    console.log(a);
     a++;
} 
while (a <= 5);

//Note : do while always executes at least once, even when the condition fails.

//For...of
//Task 10 — String Characters

let name = "javascript";

for (let a of name) {
    console.log(a);
}

//Task 11 — Array Values

let fruits = ["apple", "orange", "banana", "mango", "grapes"];

for (let fruit of fruits) {
    console.log(fruit);
}

//Task 12 — Student Names

let students = ["Arun", "Priya", "Vicky", "Divya", "Rahul"];

for (let student of students) {
    console.log("Student: " + student);
}

//For...in
//Task 13 — Employee Object

let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};

for (let k in employee) {
    console.log(k + " " + employee[k]);
}

//Task 14 — Product Object

let product = {
    productName: "Laptop",
    price: 50000,
    brand: "Dell",
    category: "Electronics",
    stock: 10
};

for (let l in product) {
    console.log(l + " " + product[l]);
}

//Functions
//Task 15 — Simple Function

function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();
welcome();
welcome();

//Task 16 — Function With Parameter

function greet(name) {
    console.log("Hello " + name);
}

greet("Naveen");
greet("Arun");
greet("Priya");

//Task 17 — Multiple Parameters

function student(name, age, department) {
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Department: " + department);
}

student("Arun", 20, "CSE");
student("Priya", 21, "ECE");
student("Naveen", 22, "IT");

//Return
//Task 18 — Addition Function

function add(a, b) {
    return a + b;
}

let result = add(10, 20);
console.log(result);

//Task 19 — Salary

function salary(amount) {
    return amount;
}

let res = salary(50000);
console.log(res);

//Task 20 — Bonus Calculator

function bonus(salary, bonusAmount) {
    return salary + bonusAmount;
}

let total = bonus(50000, 5000);
console.log("Total:", total);

//Default Parameter
//Task 21

function emp(name, role = "Developer") {
    console.log("Name: " + name);
    console.log("Role: " + role);
}

emp("Arun");
emp("Priya", "Designer");

//Function Types
//Task 22 — Named Function

function square(number) {
    return number * number;
}

console.log(square(2));
console.log(square(5));
console.log(square(7));
console.log(square(10));
console.log(square(12));

//Task 23 — Anonymous Function

let calculate = function(a, b) {
    return a + b;
};

let r = calculate(10, 20);
console.log(r);

//Task 24 — Arrow Function

let mul = (a, b) => {
    return a * b;
};

let re = mul(5, 10);
console.log(re);

//Scope
//Task 25 — Predict the Output

// function test() {

//     if (true) {

//         var a = 10;
//         let b = 20;
//         const c = 30;

//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// test();

// ReferenceError: b is not defined

//Hoisting
//Task 26 — Predict

// console.log(x); // undefined

// var x = 10;

//Task 27

// console.log(b);

// let b = 20;

//ReferenceError: Cannot access 'b' before initialization

//Task 28

// console.log(c);

// const c = 30;

//ReferenceError: Cannot access 'c' before initialization

//IIFE
//Task 29 — Self Invoking Function

(function () {
    console.log("Welcome to JavaScript");
})();

(function (product, discount) {
    console.log(product + " has a " + discount + "% discount");
})
("Laptop", 20);

//Callback / Higher-Order Function
//Task 30

function welcome() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

execute(welcome);

// Generator Function
//Task 31 — Cashback

function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let t = cashback();

for (let v of t) {
    console.log(v);
} 

// FINAL MINI PROJECT
//Task 32 — Employee Management Console

let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },
    {
        name: "Karthik",
        age: 28,
        department: "Finance",
        role: "Accountant",
        salary: 45000
    }
];


// 1. for...of
console.log("----- All Employees -----");

for (let employee of employees) {
    console.log(employee);
}


// 2. for...in
console.log("----- Keys and Values -----");

for (let employee of employees) {
    for (let key in employee) {
        console.log(key + " : " + employee[key]);
    }

    console.log("----------------");
}


// 3 & 4. Function with parameters
function displayEmployee(name, age, department, role, salary) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
    console.log("Role:", role);
    console.log("Salary:", salary);
}


// Calling the function
console.log("----- Employee Information -----");

for (let employee of employees) {
    displayEmployee(
        employee.name,
        employee.age,
        employee.department,
        employee.role,
        employee.salary
    );
}


// 5. Return - function that returns salary
function getSalary(employee) {
    return employee.salary;
}

console.log("----- Salaries -----");

for (let employee of employees) {
    console.log(employee.name + " Salary:", getSalary(employee));
}


// 6. Condition - Salary >= 40000
console.log("----- Salary Check -----");

for (let employee of employees) {
    if (getSalary(employee) >= 40000) {
        console.log(employee.name + " earns 40000 or more");
    } else {
        console.log(employee.name + " earns below 40000");
    }
}


// 7. Arrow function - simple calculation
let annualSalary = (salary) => salary * 12;

console.log("----- Annual Salary -----");

for (let employee of employees) {
    console.log(
        employee.name + " Annual Salary:",
        annualSalary(employee.salary)
    );
}


// 8. Generator - Employee Benefits
function* employeeBenefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

console.log("----- Employee Benefits -----");

let benefits = employeeBenefits();

for (let benefit of benefits) {
    console.log(benefit);
}