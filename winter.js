// How do we assign a value to a variable?
var variable1 = value

// How do we change the value of a variable?
var variable1 = newValue

// How do we assign an existing variable to a new variable?
var variable2 = variable1

// Remind me, what are 'declare', 'assign', and 'define'?
// Declare meaning is to give a variable a name
// Assign meaning is to give that variable a value
// Define would be a combination of declare and assign.

// What is pseudocoding and why should you do it?
// pseudocoding explains a step by step process into planning, and its very useful becuase it helps figure out the approach and process.

// Create a variable called 'firstVariable'.
var firstVariable;
// Assign it the value of the string ''"Hello World"''
var firstVariable = 'Hello World';
// Change the value of this variable to some number.
firstVariable = 7;
// Store the value of 'firstVariable' in a new variable called `secondVariable`
var secondVariable = firstVariable
// Change the value of 'secondVariable' to any string.
secondVariable = "hello";
// What is the value of 'firstVariable'?
value of firstVariable is 7

// Create a variable called `yourName` and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable `yourName` so that it returns a new string with them concatenated.

var yourName = "jay";
console.log("Hello, my name is " + yourName);


// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console.

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
console.log(true != false);
console.log(false == false == false == false == false == false == true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a + b == c);
console.log(a * a == d);
console.log(48 == '48');



// Declare a variable `animal`.  Set it to be either "cow" or something else.
var animal = "cow";
// Write code that will print out "mooooo" if the it is equal to `cow`.
if (animal == "cow") {
  console.log("moo");
}
// Change your code so that if the variable `animal` is anything other than a cow, it will print "Hey! You're not a cow."
else {
  console.log("hey, youre not a cow");
};

// Make a variable that will hold a person's age. Be semantic.
var personAge = 33;
// Write code that will print out "Here are the keys", if the age is 16 years or older.
if (personAge >= 16) {
  console.log("here are the keys")
}
// If the age is younger than 16, a message should print "Sorry, you're too young."
else {
  console.log("sorry, youre too young")
};
