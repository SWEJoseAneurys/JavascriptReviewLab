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

// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];
// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence 
//"Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
console.log("");

// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset);
console.log("");

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);
console.log("");

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
let thomsShirts = thomsCloset[0]; thomsCloset.splice(0,1,thomsShirts);
let thomsPants = thomsCloset[1]; thomsCloset.splice(1,1,thomsPants);
let thomsAccessories = thomsCloset[2]; thomsCloset.splice(2,1,thomsAccessories);
console.log(thomsCloset);
console.log("");
console.log(thomsShirts[0]);
console.log("");

// In the same way, access one item from Thom's pants array.
console.log(thomsPants[1]);
console.log("");

// Access one item from Thom's accessories array.
console.log(thomsAccessories[2]);
console.log("");

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log("Thom is slaying in a " + thomsShirts[0] + ", " + thomsPants[1] + ", & " + thomsAccessories[2] + "!");
console.log("");

// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsPants[2] = "Footie Pajamas";
console.log(thomsCloset);
console.log("");

//IV. Functions

// A. printGreeting
// Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated
//into the greeting?
// Like so?
// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!
// You think you could? I think so too. Feel free to skip this problem, because you've already done it.
//If you've done the problem twice, read entire problems carefully before doing them from now on.
console.log("FREEBIEEEEEE Thanks, Chase!");
console.log("");

// B. printCool
// Write a function printCool that accepts one parameter, name as an argument. 
//The function should print the name and a message saying that that person is cool.
// console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";
function printCool(name) {
    console.log("Woah, " + name + "! You're so cool!");
};
printCool("Jose");
console.log("");

// C. calculateCube
// Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.
// console.log(calculateCube(5));
// => 125

function calculateCube(number) {
    let numberCubed = number * number * number;
    console.log(numberCubed);
};
calculateCube(5);
console.log("");

// D. isVowel
// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. 
// The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. 
// In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
// console.log(isVowel("a"));
// => true

let vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];

function isVowel(vowel) {
    for (x = 0; x < vowels.length; x++) {
        if (vowels[x] == vowel) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
};

isVowel();
console.log("");

// E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). 
//The function should return an array of numbers where each number is the length of the corresponding string.
// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]

function getTwoLengths(string1, string2) {
    console.log([string1.length, string2.length]);
};

getTwoLengths("This", "Works");
console.log("");

// F. getMultipleLengths
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. 
//The function should return an array of numbers where each number is the length of the corresponding string.
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// => [5, 4, 2, 2, 4]

function getMultipleLengths([string1, string2, string3, string4, string5]) {
    console.log([string1.length, string2.length, string3.length, string4.length, string5.length]);
};

getMultipleLengths(["hmmmmm", "does", "this", "thing", "work"]);
console.log("");

// G. maxOfThree
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
//If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same,
//one of them should be returned. Be sure to test it with larger values in each of the three locations.
// console.log(maxOfThree(6, 9, 1));
// => 9
// Did you use Google and find Math.max()? If so, great job! Very resourceful???keep looking stuff up! 
//However, for this particular question, we need you to submit a solution that does not use Math.max().

function maxOfThree(number, numero, numeral) {
    let max_val = 0;
    if (number >= numero) {
    max_val = number;
    } else {
    max_val = numero;
    } if (numeral >= max_val) {
    max_val = numeral;
    }
    console.log(max_val);
};

maxOfThree(466, 66587, 6565);
console.log("");

// H. printLongestWord
// Write a function printLongestWordthat accepts a single argument, an array of strings. 
//The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"

let array = ["I", "finally", "got", "this", "EXPLETIVE"];

function printLongestWord(array) {
    let longestWord = "";
    array.forEach((word) => {
        if (word.length > longestWord.length) {
            longestWord = word;
        } else if (longestWord.length == word.length) {
            longestWord = array[0];
        }
    })
    console.log(longestWord);
};

printLongestWord(array);
console.log("");

// Objects
// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website,
//and we want to store that user's data. The object data structure is a good way to organize the data from our user.
// A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. 
//Set the value of purchasedto an empty array []. Set the other values to whatever you would like.

let user = {
    name: "Lisa Monroe",
    email: "LMonroe@address.com",
    age: 37,
    purchased: [],
};
console.log(user);
console.log("");

// // B. Update the user
// // Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
// // Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++

user.email = "LMonroeDevareaux@address.com";
console.log(user.email);
console.log("");

user.age = user.age+1;
console.log(user.age);
console.log("");

// // C. Adding keys and values
// // You have decided to add your user's location to the data that you want to collect.
// // Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).

user.location = ("5555 Bedford Blvd. Los Angeles, CA 55555" || address);
console.log(user);
console.log("");

// // D. Shopaholic!
// // Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
// // Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
// // Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
// // Console.log just the "Merino jodhpurs" from the purchasedarray.

user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");
console.log(user.purchased[2]);
console.log("");

// // E. Object-within-object
// // Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.
// // If we want to give our user a friendwith a nameand age, we could write:
// // user.friend = {
// //     name: "Grace Hopper",
// //     age: 85
// // }
// // When we console.log user, we would see the friendobject added to our user object.
// // Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
// // Console.log just the friend's name
// // Console.log just the friend's location
// // CHANGE the friend's age to 55
// // The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
// // The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
// // Console.log just "A latte" from the friend's purchasedarray.

user.friend = {
    name: "Diane Ferguson",
    age: 40,
    location: "5656 Antigua Lane Los Angeles, CA 56565",
    purchased: [],
};
console.log(user.friend.name);
console.log("");
console.log(user.friend.location);
console.log("");
user.friend.age = 55
user.friend.purchased.push("The One Ring");
user.friend.purchased.push("A latte");
console.log(user.friend.purchased[1]);
console.log("");

// // F. Loops
// // Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
// // Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.

for (let i=0; i < user.purchased.length; i++) {
    console.log(user.purchased[i]);
};
console.log("");
for (let i=0; i < user.friend.purchased.length; i++) {
    console.log(user.friend.purchased[i]);
};
console.log("");

// // G. Functions can operate on objects
// // Write a single function updateUserthat takes no parameters. When the function is run, it should:
// // it should increment the user's age by 1
// // make the user's name uppercase
// // The function does not need a returnstatement, it will merely modify the user object.
// // Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding
// //it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in
// //as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.

function updateUser() {
    user.age = user.age+1;
    user.name = user.name.toUpperCase();
};
function oldAndLoud(person) {
    person.age = person.age+1;
    person.name = person.name.toUpperCase();
};
oldAndLoud(user);
console.log(user);

// Cat Combinator
// 1. Mama cat
// Define an object called cat1 that contains the following properties:
// name
// breed
// age (a number)
// console.log the cat's age
// console.log the cat's breed

let cat1 = {
    name: "Smokey",
    breed: "british shorthair",
    age: 3
};
console.log(cat1.age);
console.log(cat1.breed);
console.log("");

// 2. Papa cat
// Define an object called cat2that also contains the properties:
// name
// breed
// age (a number)

let cat2 = {
    name: "Tuskey",
    breed: "british shorthair",
    age: 4
};

// 3. Combine Cats!
// The cats are multiplying!
// Write a function combineCatsthat has two parameters mama, and papa. The function will take two arguments -- each a cat object.
// Pass cat1and cat2as arguments to the combineCatsfunction. The function should console.log them.
// Example:
// combineCats(cat1, cat2)
// { name: "Joe", age: 19, breed: "Mog" }
// { name: "Jam", age: 45, breed: "Siamese" }
// This is to demonstrate that functions can take objects as arguments

function combineCats(cat1, cat2) {
    console.log(cat1);
    console.log(cat2);
};
combineCats(cat1,cat2);
console.log("");

// You could also invoke the combineCatsfunction by writing the objects straight into the parentheses:
// combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });
// Make it so the combineCatsfunction will return a combination of the two incoming cats
// The result should be an object wherein the
// name is a concatenation of the parents' names
// the age is 1
// the breed is each of the parents' breeds with a hyphen in between
// Example:
// console.log(combineCats(cat1, cat2));
// Result:
// This is to demonstrate that a function can return an object

function combineCats(cat1, cat2) {
    let name = cat1.name + cat2.name;
    let age = 1;
    let breed = cat1.breed + "-" + cat2.breed;
    return {name, age, breed};
};
console.log(combineCats({
    name: "Smokey",
    breed: "british shorthair",
    age: 3
}, {
    name: "Tuskey",
    breed: "british shorthair",
    age: 4
}));
console.log("");

// 4. Cat brain bender
// If combineCats returns an object, and if combineCats takes objects as arguments, then it stands to reason that:
// catCombinator can use itself as its own argument.
// Take a second to stew on that . . .
// What is the result of:
// console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
// Whoa ...
// The above console.log is two levels deep of combineCats.
// Write a console.log that is three levels deep of combineCats. combineCats should have two arguments,
//each which are combineCats, each which have two arguments, each which are combineCats.
// Your output should look something like:
//{name: 'JoeJamJoeJamJoeJamJoeJam',
//age: 1,
//breed: 'Mog-Siamese-Mog-Siamese-Mog-Siamese-Mog-Siamese}

console.log(combineCats(combineCats(combineCats(cat1, cat2),combineCats(cat1, cat2)),combineCats(combineCats(cat1,cat2), combineCats(cat1,cat2))));