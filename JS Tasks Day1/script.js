/*&Create a variable for student name, age, and mark and print all three.*/
var studentName = "Vignesh";
var age = 26;
var mark = 85;

console.log(studentName);
console.log(age);
console.log(mark);

/*Ask the user's name using prompt() and display it using alert().*/
var userName = prompt("Enter your name:");
alert("Hello, " + userName);

/*Ask the user's age using prompt() and print it using console.log().*/
var age = prompt("Enter your age:");
console.log(age);

/*Ask the user a question using confirm().*/
let answer = confirm("Are you sure?");
console.log(answer);

/*Ask the user's name and display it on the webpage using document.writeln().*/
let aName = prompt("Enter your name:");
document.writeln("Your name is: " + aName);
