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
console.log("");

// D. The farm
//1) Declare a variable animal. Set it to be either "cow" or something else.
let animal = "panther";
console.log(animal);

//2) Write code that will print out "mooooo" if the it is equal to cow.
if (animal == "panther") {
    console.log("RAWR!")
};
console.log("");

//3) Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
animal = "cow";
console.log(animal);
if (animal == "panther") {
    console.log("RAWR!");
} else {
    console.log("Hey! You're not a panther.")
};
console.log("");

// Commit

// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, 
//if the age is younger than 16, a message should print "Sorry, you're too young."

let personAge = 23;
console.log(personAge);
if (personAge >= 16) {
    console.log("Here are the keys!")
} else {
    console.log("Sorry, you're too young.")
};
console.log(personAge);
console.log("");

// ***II. Loops
// ***Remember: USE let when you initialize your for loops!

// ***This is GOOD: for(let i = 0; i < 100; i++)

// ***This is NO GOOD: for(i = 0; i < 100; i++)
// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i = 0; i >= 0 && i <= 10; i++) {
    console.log(i)
};
console.log("");

// Write a loop that will print out all the numbers from 10 up to and including 400
for (let i = 10; i >= 10 && i <= 400; i++) {
    console.log(i)
};
console.log("");

// Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let i = 12; i >= 12 && i < 4000; i+=3) {
    console.log(i)
};
console.log("");

// B. Get even
// Print out the numbers that are within the range of 1 - 100
for (let i = 1; i > 0 && i <= 100; i++) {
    console.log(i)
};
console.log("");

// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for (let i = 1; i > 0 && i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i + " <-- is an even number")
    } else {
        console.log(i)
    }
};
console.log("");

// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Example Output:
// I found a 5. High five!
// I found a 10. High five!

for (let i = 0; i >= 0 && i <= 100; i++) {
    if (i % 5 === 0 && i != 0) {
        console.log("I found a " + i + ". High five!")
    } else {
        console.log(i)
    }
};
console.log("");

// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// Example Output:
// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!
// For numbers divisible by both three and five, be sure your code prints both messages
for (let i = 0; i >= 0 && i <= 100; i++) {
    if (i % 15 === 0 && i != 0) {
        console.log("I found a " + i + ". Three is a crowd. High Five!")
    } else if (i % 3 === 0 && i != 0) {
        console.log("I found a " + i + ". Three is a crowd")
    } else if (i % 5 === 0 && i != 0) {
        console.log("I found a " + i + ". High five!")
    } else {
        console.log(i)
    }
};
console.log("");

// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.

let bank_account = 0;
function addNumbers() {
    for (i = 1; i > 0 && i <= 10; i++) {
        bank_account += i;
    }
};
addNumbers();
console.log("$" + bank_account);
console.log("");

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.

let bank_account_bonus = 0;
function addBonus() {
    for (i = 0; i > -1 && i <= 100; i++) {
        bank_account_bonus += i;
    }
    bank_account_bonus = bank_account_bonus * 2
};
addBonus();
console.log("$" + bank_account_bonus);
console.log("");

// III. Arrays & Control flow
// A. Talk about it:
//1) What are the things in an array called?
//The things in an array are called elements.

//2) Do Arrays guarantee those things will be in order?
//Arrays do not guarantee those things will be in order, the arrays only contain the data within each index defined by that element.

//3) What real-life thing could you model with an array?
//You can model many things with an array; such as articles of clothing in your closet, different addresses, record of any collections
//you may have like movies, music, or collectible cards.

// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes

let quotes = ["", "", ""];

// C. Accessing elements
// Given the following array const randomThings = [1, 10, "Hello", true]
const randomThings = [1, 10, "Hello", true];
console.log(randomThings);
console.log("");

// How do you access the 1st element in the array?
console.log(randomThings[0]);
console.log("");

// Change the value of "Hello"to "World"
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
randomThings[2] = "World";
console.log(randomThings);
console.log("");

// D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
console.log(ourClass);
console.log("");

// What would you write to access the 3rd element of the array?
console.log(ourClass[2]);
console.log("");

// Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";
console.log(ourClass);
console.log("");

// Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log(ourClass);
console.log("");

// E. Mix It Up
// ***Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: const myArray = [5, 10, 500, 20]
const myArray = [5, 10, 500, 20];
console.log(myArray);
console.log("");

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon");
console.log(myArray);
console.log("");

// Remove the 5 from the beginning of the array.
delete myArray[0];
console.log(myArray);
console.log("");

// Add the string "Bob Marley"to the beginning of the array.
myArray[0] = "Bob Marley";
console.log(myArray);
console.log("");

// Remove the string of your choice from the end of the array.
delete myArray[4];
console.log(myArray);
console.log("");

// Reverse this array using Array.prototype.reverse(). 
myArray.reverse();
console.log(myArray);
console.log("");

//Did you mutate the array? What does mutate mean?
//Yes, the array was mutated meaning it was modified to reflect or return in opposite order.

//Did the .reverse()method return anything?
//The .reverse() method itself returns the array with the elements in reverse order.

// F. Biggie Smalls
// Create a variable that contains an integer.
let aNumber = 5

// Write an if ... elsestatement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.
if (aNumber < 100) {
    console.log("little number")
} else if (aNumber >= 100) {
    console.log("big number")
};
console.log("");

// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:
// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".
if (aNumber < 5) {
    console.log("little number")
} else if (aNumber > 10) {
    console.log("big number")
} else {
    console.log("monkey")
};
console.log("");

