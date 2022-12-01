// A. Q + A

// 1) How do we assign a value to a variable?
// In order to assign a value to a variable, we create the //variable and set it equal to value (i.e. let thing = amount).

// 2) How do we change the value of a variable?
//To change the value of a variable, "redefine" the variable.
//(i.e. let me = "Jose", me = "person")

// 3) How do we assign an existing variable to a new variable?
//To assign existing variable to a new variable, simply set //existing variable to be the value of new variable.
//(i.e. let someoneElse = me)

// 4) Remind me, what are declare, assign, and define?
//When we declare, assign, and define we are essentially creating a variable and giving it a value with the use of the "=" sign.

// 5) What is pseudocoding and why should you do it?
//Pseudocoding is when we simplify a coding problem to steps in order to come up with a resolution.

//6) What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
//If you spend majority of your time thinking about how you're going to solve a problem and your thinking involves pseudocoding, then
//you will not have to spend alot of time typing in code because you've constructed a layout for your code.

// B. Strings
// For all other questions that involve writing code, you can solve them via the following instructions.
// Create a variable called firstVariable
// Assign it the value of the string "Hello World"
// Change the value of this variable to some number
// Store the value of firstVariable in a new variable called secondVariable
// Change the value of secondVariable to any string.
// What is the value of firstVariable?
// Create a variable called yourName and set it equal to your name as a string. 
//Then, write an expression that takes the string "Hello, my name is " and the variable yourName
//so that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean

let firstVariable = "Hello World";
console.log(firstVariable);

firstVariable = 5;
console.log(firstVariable);

let secondVariable = firstVariable;
console.log(secondVariable);

secondVariable = "I'm no longer a number";
console.log(secondVariable);

console.log(firstVariable);

let yourName = "Jose";
console.log("Hello, my name is " + yourName + "!");

console.log("");

// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print truein the console. 
//Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console.

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a<b);
console.log(c>d);
console.log('Name'=='Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true||false);
console.log(false && false && false && false && false || true);
console.log(false == false)
console.log(e == 'Kevin');
console.log(a+b==c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a*a==d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48=='48');