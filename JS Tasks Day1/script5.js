//Task 1 — Student Result Analyzer
// Student Result Analyzer

function Result(name, department, mark1, mark2, mark3, mark4, mark5) {

    
    let total = mark1 + mark2 + mark3 + mark4 + mark5;

    
    let average = total / 5;

    
    let result;
    let grade;

    if (average >= 90) {
        result = "Pass";
        grade = "A";
    } 
    else if (average >= 75) {
        result = "Pass";
        grade = "B";
    } 
    else if (average >= 60) {
        result = "Pass";
        grade = "C";
    } 
    else if (average >= 50) {
        result = "Pass";
        grade = "D";
    } 
    else {
        result = "Fail";
        grade = "Fail";
    }

    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Total Marks:", total);
    console.log("Average:", average);
    console.log("Result:", result);
    console.log("Grade:", grade);
}



Result("Vignesh", "CSE", 85, 90, 78, 88, 92);

//Task 2 — Employee Salary Calculator


let employee = {
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2
};




function calculateSalary(employee) {

    let basicSalary = employee.salary;
    let bonus = 0;

    if (employee.experience >= 5) {
        bonus = basicSalary * 0.15;
    }
    else if (employee.experience >= 2) {
        bonus = basicSalary * 0.10;
    }

    let finalSalary = basicSalary + bonus;

    
    console.log("Name:", employee.name);
    console.log("Role:", employee.role);
    console.log("Experience:", employee.experience, "years");
    console.log("Basic Salary:", basicSalary);
    console.log("Bonus:", bonus);
    console.log("Final Salary:", finalSalary);
}




calculateSalary(employee);

//Task 3 — Product Filter System

let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];


// 1. Get products above ₹2,000

let expensiveProducts = products.filter(function(product) {
    return product.price > 2000;
});

console.log("Products above ₹2,000:", expensiveProducts);


// 2. Get only electronics

let electronics = products.filter(function(product) {
    return product.category === "electronics";
});

console.log("Electronics:", electronics);


// 3. Find the first product below ₹1,000

let cheapProduct = products.find(function(product) {
    return product.price < 1000;
});

console.log("First product below ₹1,000:", cheapProduct);


// 4. Calculate total price of all products

let totalPrice = products.reduce(function(total, product) {
    return total + product.price;
}, 0);

console.log("Total price:", totalPrice);


// 5. Check whether any product costs more than ₹50,000

let hasExpensiveProduct = products.some(function(product) {
    return product.price > 50000;
});

console.log("Any product above ₹50,000:", hasExpensiveProduct);


// 6. Check whether every product has a price above ₹500

let allAbove500 = products.every(function(product) {
    return product.price > 500;
});

console.log("Every product above ₹500:", allAbove500);

//Task 4 — Employee Management

// Employee array

let employees = [
    {
        id: 101,
        name: "Kavin",
        role: "Frontend Developer",
        salary: 40000
    },
    {
        id: 102,
        name: "Arun",
        role: "Backend Developer",
        salary: 55000
    },
    {
        id: 103,
        name: "Vignesh",
        role: "Full Stack Developer",
        salary: 60000
    },
    {
        id: 104,
        name: "Priya",
        role: "UI/UX Designer",
        salary: 45000
    },
    {
        id: 105,
        name: "Suresh",
        role: "Software Engineer",
        salary: 70000
    },
    {
        id: 106,
        name: "Divya",
        role: "QA Engineer",
        salary: 35000
    }
];


// 1. Display all employee names

let employeeNames = employees.map(function(employee) {
    return employee.name;
});

console.log("Employee Names:", employeeNames);


// 2. Display employees earning above ₹40,000

let highEarners = employees.filter(function(employee) {
    return employee.salary > 40000;
});

console.log("Employees earning above ₹40,000:", highEarners);


// 3. Find employee with ID 103

let emp = employees.find(function(employee) {
    return employee.id === 103;
});

console.log("Employee with ID 103:", emp);


// 4. Calculate total salary

let totalSalary = employees.reduce(function(total, employee) {
    return total + employee.salary;
}, 0);

console.log("Total Salary:", totalSalary);


// 5. Find highest-paid employee

let highestPaid = employees.reduce(function(highest, employee) {
    if (employee.salary > highest.salary) {
        return employee;
    } else {
        return highest;
    }
});

console.log("Highest Paid Employee:", highestPaid);


// 6. Sort employees from highest salary to lowest

let sortedEmployees = [...employees].sort(function(a, b) {
    return b.salary - a.salary;
});

console.log("Employees sorted by salary:", sortedEmployees);


// 7. Create a new array containing only employee names

let namesOnly = employees.map(function(employee) {
    return employee.name;
});

console.log("Names Only:", namesOnly);


//Task 5 — Shopping Cart



let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];




function calculateCart(cart) {

    // Calculate total cart value
    let total = cart.reduce(function(sum, item) {
        return sum + (item.price * item.quantity);
    }, 0);

    // Calculate discount
    let discount = 0;

    if (total > 50000) {
        discount = total * 0.10;
    }

    // Calculate final payable amount
    let finalAmount = total - discount;



    // Display each item total
    cart.forEach(function(item) {
        let itemTotal = item.price * item.quantity;

        console.log(
            item.name + " Total: ₹" + itemTotal
        );
    });

    console.log("Total Cart Value: ₹" + total);
    console.log("Discount: ₹" + discount);
    console.log("Final Payable Amount: ₹" + finalAmount);
}




calculateCart(cart);

//Task 6 — Student Search System


let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];


// 1. Display all student names

let studentNames = students.map(function(student) {
    return student.name;
});

console.log("Student Names:", studentNames);


// 2. Display students who scored above 80

let highScorers = students.filter(function(student) {
    return student.mark > 80;
});

console.log("Students above 80:", highScorers);


// 3. Find student named "Priya"

let priya = students.find(function(student) {
    return student.name === "Priya";
});

console.log("Priya:", priya);


// 4. Calculate average mark

let totalMarks = students.reduce(function(total, student) {
    return total + student.mark;
}, 0);

let averageMark = totalMarks / students.length;

console.log("Average Mark:", averageMark);


// 5. Check whether anyone failed

let anyoneFailed = students.some(function(student) {
    return student.mark < 50;
});

console.log("Anyone failed:", anyoneFailed);


// 6. Check whether everyone scored above 40

let everyoneAbove40 = students.every(function(student) {
    return student.mark > 40;
});

console.log("Everyone scored above 40:", everyoneAbove40);


// 7. Sort students by marks

let sortedStudents = [...students].sort(function(a, b) {
    return b.mark - a.mark;
});

console.log("Students sorted by marks:", sortedStudents);


//Task 7 — Array Transformation Challenge

let numbers = [12, 5, 8, 21, 44, 7, 30, 15];


// 1. Create a new array containing numbers × 2

let doubledNumbers = numbers.map(function(number) {
    return number * 2;
});

console.log("Doubled numbers:", doubledNumbers);


// 2. Get only even numbers

let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log("Even numbers:", evenNumbers);


// 3. Get numbers greater than 15

let greaterThan15 = numbers.filter(function(number) {
    return number > 15;
});

console.log("Numbers greater than 15:", greaterThan15);


// 4. Find the first number greater than 20

let firstGreaterThan20 = numbers.find(function(number) {
    return number > 20;
});

console.log("First number greater than 20:", firstGreaterThan20);


// 5. Find total of all numbers

let total = numbers.reduce(function(sum, number) {
    return sum + number;
}, 0);

console.log("Total:", total);


// 6. Check whether any number is greater than 40

let hasNumberGreaterThan40 = numbers.some(function(number) {
    return number > 40;
});

console.log("Any number greater than 40:", hasNumberGreaterThan40);


// 7. Check whether every number is positive

let allPositive = numbers.every(function(number) {
    return number > 0;
});

console.log("Every number is positive:", allPositive);


// 8. Sort from highest to lowest

let sortedNumbers = [...numbers].sort(function(a, b) {
    return b - a;
});

console.log("Sorted highest to lowest:", sortedNumbers);


//Task 8 — String Analyzer

let sentence = prompt("Enter a sentence:");


// 1. Total characters

let totalCharacters = sentence.length;

console.log("Total characters:", totalCharacters);


// 2. Uppercase sentence

let uppercaseSentence = sentence.toUpperCase();

console.log("Uppercase:", uppercaseSentence);


// 3. Lowercase sentence

let lowercaseSentence = sentence.toLowerCase();

console.log("Lowercase:", lowercaseSentence);


// 4. Check whether it contains "JavaScript"

let containsJavaScript = sentence.includes("JavaScript");

console.log("Contains JavaScript:", containsJavaScript);


// 5. First character

let firstCharacter = sentence.slice(0, 1);

console.log("First character:", firstCharacter);


// 6. Last character

let lastCharacter = sentence.slice(-1);

console.log("Last character:", lastCharacter);


// 7. Number of words

let words = sentence.trim().split(/\s+/);

let numberOfWords = words.length;

console.log("Number of words:", numberOfWords);


// 8. Replace "JavaScript" with "Python"

let replacedSentence = sentence.replace("JavaScript", "Python");

console.log("After replacement:", replacedSentence);


// 9. Convert sentence into an array

let sentenceArray = sentence.split(" ");

console.log("Sentence array:", sentenceArray);

//Final Mini Project — Employee Dashboard

let employeesList = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];



// 1. EMPLOYEE LIST

employeesList.forEach(employee => {
    console.log(
        `ID: ${employee.id}
Name: ${employee.name}
Department: ${employee.department}
Salary: ₹${employee.salary}
Experience: ${employee.experience} years`
    );

});



// 2. SEARCH EMPLOYEE BY NAME


function searchEmployee(name) {

    let result = employeesList.filter(employee =>
        employee.name.toLowerCase().includes(name.toLowerCase())
    );

    console.log(result);
}

searchEmployee("Arun");


// 3. DEPARTMENT FILTER


function filterByDepartment(department) {

    let result = employeesList.filter(employee =>
        employee.department === department
    );

    console.log(result);
}

filterByDepartment("IT");



// 4. SALARY FILTER
// Employees earning more than ₹50,000

let salaryAbove50000 = employeesList.filter(employee =>
    employee.salary > 50000
);


console.log(salaryAbove50000);



// 5. TOTAL COMPANY SALARY


let totalSal= employeesList.reduce(
    (total, employee) => total + employee.salary,
    0
);


console.log("₹" + totalSal);



// 6. HIGHEST-PAID EMPLOYEE


let highestPaidEmployee = employeesList.reduce(
    (highest, employee) =>
        employee.salary > highest.salary ? employee : highest
);


console.log(highestPaidEmployee);



// 7. EMPLOYEES WITH MORE THAN 3 YEARS EXPERIENCE


let experiencedEmployees = employeesList.filter(employee =>
    employee.experience > 3
);

console.log(experiencedEmployees);



// 8. SORTING

// Low to High

let salaryLowToHigh = [...employeesList].sort(
    (a, b) => a.salary - b.salary
);

console.log(salaryLowToHigh);


// High to Low

let salaryHighToLow = [...employeesList].sort(
    (a, b) => b.salary - a.salary
);

console.log(salaryHighToLow);



// 9. STATISTICS


let totalEmployees = employeesList.length;

let averageSalary = totalSalary / totalEmployees;


console.log("Total Employees:", totalEmployees);

console.log("Total Salary: ₹" + totalSalary);

console.log("Highest Salary: ₹" + highestPaidEmployee.salary);

console.log("Average Salary: ₹" + Math.round(averageSalary));