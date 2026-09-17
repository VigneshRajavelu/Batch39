
//Employee Management Dashboard
//  1. VARIABLES


const apiUrl = "https://dummyjson.com/users";

let employees = [];

let selectedDepartment = "All";

let currentEmployees = [];



// 2. DOM ELEMENTS


const employeeContainer =
    document.getElementById("employeeContainer");

const employeeCount =
    document.getElementById("employeeCount");

const totalSalary =
    document.getElementById("totalSalary");

const averageSalary =
    document.getElementById("averageSalary");

const highestSalary =
    document.getElementById("highestSalary");

const searchInput =
    document.getElementById("searchInput");

const searchBtn =
    document.getElementById("searchBtn");

const statusMessage =
    document.getElementById("statusMessage");

const employeeForm =
    document.getElementById("employeeForm");

const sortSelect =
    document.getElementById("sortSelect");



// 3. FETCH EMPLOYEES


function fetchEmployees() {

    statusMessage.innerHTML = "Loading employees...";

    fetch(apiUrl)

        .then(function(response) {

            if (!response.ok) {
                throw new Error("API request failed");
            }

            return response.json();
        })

        .then(function(data) {

            console.log("API Data:", data);

            /*
                Destructuring
            */

            const { users } = data;

            /*
                map()
                Convert API users into our employee format.
            */

            employees = users.map(function(user) {

                return {

                    id: user.id,

                    name: `${user.firstName} ${user.lastName}`,

                    age: user.age,

                    email: user.email,

                    phone: user.phone,

                    image: user.image,

                    /*
                        DummyJSON uses different department names.
                        We convert them into our dashboard departments.
                    */

                    department: convertDepartment(
                        user.company.department
                    ),

                    /*
                        API employees don't have salary.
                        Salary will be added only for locally-created employees.
                    */

                    salary: 0
                };
            });

            statusMessage.innerHTML =
                "Employee data loaded successfully.";

            displayEmployees(employees);

        })

        .catch(function(error) {

            console.log(error);

            statusMessage.innerHTML =
                "Unable to load employee data. Please try again.";

        })

        .finally(function() {

            console.log("API request completed.");

        });
}



// 4. CONVERT API DEPARTMENT


function convertDepartment(department) {

    if (department === "Engineering") {

        return "IT";

    } else if (department === "Human Resources") {

        return "HR";

    } else if (department === "Finance") {

        return "Finance";

    } else if (department === "Marketing") {

        return "Marketing";

    } else {

        return "IT";
    }
}



// 5. DISPLAY EMPLOYEES


function displayEmployees(employeeList) {

    employeeContainer.innerHTML = "";

    currentEmployees = employeeList;

    /*
        forEach()
        Create one card for every employee.
    */

    employeeList.forEach(function(employee) {

        createEmployeeCard(employee);

    });

    updateEmployeeCount(employeeList);

    calculateSalary(employeeList);

    findHighestSalary(employeeList);
}



// 6. CREATE EMPLOYEE CARD


function createEmployeeCard(employee) {

    /*
        Destructuring
    */

    const {
        id,
        name,
        age,
        email,
        phone,
        department,
        image,
        salary
    } = employee;


    /*
        createElement()
    */

    const card = document.createElement("div");

    card.classList.add("employee-card");


    /*
        setAttribute()
    */

    card.setAttribute("data-id", id);


    /*
        Ternary operator
    */

    const salaryText =
        salary > 0
            ? `Salary: ₹${salary.toLocaleString()}`
            : "Salary: Not Available";


    /*
        innerHTML
    */

    card.innerHTML = `

        <img
            src="${image || "https://via.placeholder.com/100"}"
            alt="${name}"
        >

        <h3>${name}</h3>

        <p>
            <strong>Age:</strong> ${age}
        </p>

        <p>
            <strong>Email:</strong> ${email}
        </p>

        <p>
            <strong>Department:</strong> ${department}
        </p>

        <p>
            <strong>Phone:</strong> ${phone || "Not Available"}
        </p>

        <p>
            <strong>${salaryText}</strong>
        </p>

        <button class="delete-btn">
            Delete
        </button>
    `;


    /*
        Event Listener
    */

    const deleteButton =
        card.querySelector(".delete-btn");

    deleteButton.addEventListener(
        "click",
        function() {

            deleteEmployee(id);

        }
    );


    employeeContainer.appendChild(card);
}



// 7. SEARCH EMPLOYEES


function searchEmployees() {

    const searchText =
        searchInput.value.trim().toLowerCase();


    /*
        filter()
        includes()
    */

    let filteredEmployees = employees.filter(
        function(employee) {

            return employee.name
                .toLowerCase()
                .includes(searchText);

        }
    );


    /*
        Department filter
    */

    if (selectedDepartment !== "All") {

        filteredEmployees =
            filteredEmployees.filter(
                function(employee) {

                    return employee.department ===
                        selectedDepartment;

                }
            );
    }


    applySorting(filteredEmployees);
}



// 8. DEPARTMENT FILTER


function filterDepartment(department) {

    selectedDepartment = department;

    let filteredEmployees = employees;


    if (department !== "All") {

        filteredEmployees =
            employees.filter(function(employee) {

                return employee.department === department;

            });
    }


    /*
        Search should continue working
        together with department filter.
    */

    const searchText =
        searchInput.value.trim().toLowerCase();


    if (searchText !== "") {

        filteredEmployees =
            filteredEmployees.filter(function(employee) {

                return employee.name
                    .toLowerCase()
                    .includes(searchText);

            });
    }


    applySorting(filteredEmployees);
}



// 9. SORT EMPLOYEES


function applySorting(employeeList) {

    const sortType = sortSelect.value;


    if (sortType === "nameAsc") {

        employeeList.sort(function(a, b) {

            return a.name.localeCompare(b.name);

        });

    } else if (sortType === "nameDesc") {

        employeeList.sort(function(a, b) {

            return b.name.localeCompare(a.name);

        });

    } else if (sortType === "ageAsc") {

        employeeList.sort(function(a, b) {

            return a.age - b.age;

        });

    } else if (sortType === "ageDesc") {

        employeeList.sort(function(a, b) {

            return b.age - a.age;

        });

    } else if (sortType === "salaryAsc") {

        employeeList.sort(function(a, b) {

            return a.salary - b.salary;

        });

    } else if (sortType === "salaryDesc") {

        employeeList.sort(function(a, b) {

            return b.salary - a.salary;

        });
    }


    displayEmployees(employeeList);
}



// 10. UPDATE EMPLOYEE COUNT


function updateEmployeeCount(employeeList) {

    employeeCount.innerHTML =
        employeeList.length;
}



// 11. CALCULATE SALARY


function calculateSalary(employeeList) {

    /*
        reduce()
    */

    const total =
        employeeList.reduce(
            function(total, employee) {

                return total + employee.salary;

            },
            0
        );


    const average =
        employeeList.length > 0
            ? total / employeeList.length
            : 0;


    totalSalary.innerHTML =
        `₹${total.toLocaleString()}`;


    averageSalary.innerHTML =
        `₹${Math.round(average).toLocaleString()}`;
}



// 12. HIGHEST SALARY EMPLOYEE


function findHighestSalary(employeeList) {

    if (employeeList.length === 0) {

        highestSalary.innerHTML = "₹0";

        return;
    }


    /*
        reduce()
    */

    const highestEmployee =
        employeeList.reduce(
            function(highest, employee) {

                if (employee.salary > highest.salary) {

                    return employee;

                }

                return highest;

            }
        );


    highestSalary.innerHTML =
        `₹${highestEmployee.salary.toLocaleString()}`;
}


// 13. VALIDATE EMPLOYEE


function validateEmployee(
    name,
    age,
    email,
    department,
    salary
) {

    let isValid = true;


    /*
        Clear previous errors
    */

    document.getElementById("nameError").innerHTML = "";

    document.getElementById("ageError").innerHTML = "";

    document.getElementById("emailError").innerHTML = "";

    document.getElementById("departmentError").innerHTML = "";

    document.getElementById("salaryError").innerHTML = "";


    // NAME

    if (name === "") {

        document.getElementById("nameError").innerHTML =
            "❌ Please enter employee name";

        isValid = false;
    }


    // AGE

    if (age <= 18 || isNaN(age)) {

        document.getElementById("ageError").innerHTML =
            "❌ Age must be greater than 18";

        isValid = false;
    }


    // EMAIL

    if (email === "") {

        document.getElementById("emailError").innerHTML =
            "❌ Please enter employee email";

        isValid = false;
    }


    // DEPARTMENT

    if (department === "") {

        document.getElementById("departmentError").innerHTML =
            "❌ Please select a department";

        isValid = false;
    }


    // SALARY

    if (salary < 0 || isNaN(salary)) {

        document.getElementById("salaryError").innerHTML =
            "❌ Please enter a valid salary";

        isValid = false;
    }


    return isValid;
}



// 14. ADD EMPLOYEE


function addEmployee(event) {

    /*
        Prevent form refresh
    */

    event.preventDefault();


    /*
        Get values
    */

    const name =
        document.getElementById("name").value.trim();

    const age =
        Number(document.getElementById("age").value);

    const email =
        document.getElementById("email").value.trim();

    const department =
        document.getElementById("department").value;

    const salary =
        Number(document.getElementById("salary").value);


    /*
        Validation
    */

    const valid =
        validateEmployee(
            name,
            age,
            email,
            department,
            salary
        );


    if (!valid) {

        return;
    }


    /*
        Find highest existing ID
        using reduce()
    */

    const highestId =
        employees.reduce(
            function(maxId, employee) {

                return Math.max(maxId, employee.id);

            },
            0
        );


    /*
        Create employee object
    */

    const newEmployee = {

        id: highestId + 1,

        name: name,

        age: age,

        email: email,

        phone: "Not Available",

        department: department,

        salary: salary,

        image: "https://via.placeholder.com/100"

    };


    /*
        Spread operator
        Add new employee to array.
    */

    employees = [
        ...employees,
        newEmployee
    ];


    /*
        Display employees again
    */

    searchEmployees();


    /*
        Clear form
    */

    clearForm();


    statusMessage.innerHTML =
        "Employee added successfully.";
}



// 15. DELETE EMPLOYEE


function deleteEmployee(id) {

    /*
        filter()
        Keep everyone except selected employee.
    */

    employees =
        employees.filter(function(employee) {

            return employee.id !== id;

        });


    /*
        Refresh UI
    */

    searchEmployees();


    statusMessage.innerHTML =
        "Employee deleted successfully.";
}



// 16. CLEAR FORM


function clearForm() {

    employeeForm.reset();


    document.getElementById("nameError").innerHTML = "";

    document.getElementById("ageError").innerHTML = "";

    document.getElementById("emailError").innerHTML = "";

    document.getElementById("departmentError").innerHTML = "";

    document.getElementById("salaryError").innerHTML = "";
}



// 17. DATE


function updateDateTime() {

    const now = new Date();


    /*
        Date methods
    */

    const day =
        String(now.getDate()).padStart(2, "0");

    const month =
        String(now.getMonth() + 1).padStart(2, "0");

    const year =
        now.getFullYear();


    const hours =
        String(now.getHours()).padStart(2, "0");

    const minutes =
        String(now.getMinutes()).padStart(2, "0");

    const seconds =
        String(now.getSeconds()).padStart(2, "0");


    document.getElementById("today").innerHTML =
        `Today: ${day}/${month}/${year}`;


    document.getElementById("currentTime").innerHTML =
        `Time: ${hours}:${minutes}:${seconds}`;
}



// 18. EVENT LISTENERS



// Search button

searchBtn.addEventListener(
    "click",
    searchEmployees
);


// Search while typing

searchInput.addEventListener(
    "input",
    searchEmployees
);


// Department buttons

const departmentButtons =
    document.querySelectorAll(".department-btn");


departmentButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            /*
                data-department attribute
            */

            const department =
                button.getAttribute("data-department");


            /*
                Remove active from all buttons
            */

            departmentButtons.forEach(
                function(btn) {

                    btn.classList.remove("active");

                }
            );


            /*
                Add active to clicked button
            */

            button.classList.add("active");


            filterDepartment(department);
        }
    );
});


// Sort

sortSelect.addEventListener(
    "change",
    function() {

        searchEmployees();

    }
);


// Form

employeeForm.addEventListener(
    "submit",
    addEmployee
);



// 19. setTimeout()


setTimeout(function() {

    console.log(
        "Employee dashboard initialized."
    );

}, 1000);



// 20. INITIALIZE APPLICATION

updateDateTime();

setInterval(
    updateDateTime,
    1000
);

fetchEmployees();