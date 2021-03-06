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


// Write a loop that will print out all the numbers from 0 to 10, inclusive.
for (let i=0; i < 11; i++) {
  console.log(i);
}

// Write a loop that will print out all the numbers from 10 up to and including 400.
for (let i=10; i <= 400; i++) {
  console.log(i);
}

// Write a loop that will print out every third number starting with 12 and going no higher than 4000.
for (let i=12; i <= 4000; i++) {
  if (i % 3 == 0) {
    console.log(i)
  }
}


// Print out the even numbers that are within the range of 1 - 100.
for (let i = 1; i <=100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Adjust your code to add a message next to even numbers only that says: "<-- is an even number".
for (let i = 1; i <=100; i++) {
  if (i % 2 == 0) {
    console.log(i + " is an even number.");
  }
}

// For the numbers 0 - 100, print out "I found a `number`. High five!" if the number is a multiple of five.

// >Example Output:
// ```
// I found a 5. High five!
// I found a 10. High five!
// ```
for (let i = 0; i<=100; i++) {
  if (i % 5 == 0) {
    console.log("I found a " + i + ". High five!");
  }
}

// Add to the code from above to print out "I found a `number`. Three is a crowd" if the number is a multiple of three.

for (let i = 0; i<=100; i++) {
  if (i % 3 === 0){
    console.log("I found a " + i + ". Three's a crowd");
  }
  else if (i % 5 === 0) {
    console.log("I found a " + i + ". High five!");
  }
}

// >Example Output:
// ```
// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!
// ```


// Write code that will save the sum of all the numbers between 1 - 10 to a variable called `bank_account`.

var bank_account = 0;
for (let i = 0; i <=10; i++) {
  bank_account += i
}
console.log(bank_account);

// >Check your work! Your banck_account should have $55 in it.

// 2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.

var bank_account = 0;
for (let i = 0; i <=100; i++) {
  bank_account += i * 2
}
console.log(bank_account);

// >Check your work! Your banck_account should have $10,100 in it.


// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.  If a previous question you've done has helpful bits of code in it that partially solves this problem, look back at them.

var sum = 0;
for (i=0; i < 1000; i++){
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}
console.log(sum)

// What are the things in an array called?
**Elements

// Do Arrays guarantee those things will be in order?
**false

// What real-life thing could you model with an array?
>>>Juice


// Create an array that contains three quotes and store it in a variable called `quotes`.

var quotes = ["Winter ajax-Reps continued.", "Learning is fun, you should try it sometime", "I remember the last time I did ajax calls"]


// Given the following array `const randomThings = [1, 10, "Hello", true]`
const randomThings = [1, 10, "Hello", true]
// How do you access the 1st element in the array?
randomThings[0];

// Change the value of `"Hello"` to `"World"`.
randomThings[2] = "World";

// Check the value of the array to make sure it updated the array.  How?  Why, yes! `console.log()`;

console.log(randomThings);

// Given the following array `const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]`
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// What would you write to access the 3rd element of the array?
ourClass[2];

// Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";

// Add a new element, "Cloud City" to the array.
ourclass.push("Cloud City");


// Given the following array: `const myArray = [5, 10, 500, 20]`
const myArray = [5, 10, 500, 20]
// Add the string `"Egon"` to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Egon")
myArray.push("hello")

// Remove the `5` from the beginning of the array.
myArray.shift()

// Add the string `"Bob Marley"` to the beginning of the array.
myArray.unshift("Bob Marley")

// Remove the string of your choise from the end of the array.
myArray.pop()
// Reverse this array using `Array.prototype.reverse()`.  Did you mutate the array? What does _mutate_ mean? Did the `.reverse()` method return anything?
myArray.reverse()


// Create a variable that contains an integer.
var number = 5;

// Write an `if ... else` statement that:

// `console.log()`s "little number" if the number is entered is less than **100**
if (number < 100) {
  console.log('little number')
}

// `console.log()`s `big number` if the number is greater than or equal to 100.
else (number >= 100) {
  console.log("big number")
}


// Write an `if ... else if ... else` statement:

// `console.log()` `little number` if the number entered is less than **5**.<br>

// If the number entered is more than 10, log `big number`.

// Otherwise, log "monkey". <br>

if (number < 5) {
  console.log("little number")
}
else if (number > 10) {
  console.log("big number")
} else {
  console.log("monkey")
}




const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

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
// What's Kristyn wearing today? Using bracket notation to access items in `kristynsCloset`, log the sentence "Kristyn is rocking that " + *the third item in Kristyn's closet* + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")

// Kristyn just bought some sweet shades! Add `"raybans"` to her closet **after `"yellow knit hat"`.**
kristynsCloset.splice(6,0, "raybans")

// Kristyn spilled coffee on her hat... modify this item to read `"stained knit hat"` instead of yellow.
kristynsCloset[5] = "stained knit hat"

// Put together an outfit for Thom! Using **bracket notation**, access the first element in Thom's `shirts` array.
var shirt = thomsCloset[0][0]

// In the same way, access one item from Thom's pants array.
var pants = thomsCloset[1][0]

// Access one item from Thom's accessories array.
var accessory = thomsCloset[2][1]

// Log a sentence about what Thom's wearing. Example: `"Thom is looking fierce in a grey button-up, jeans and wool scarf!"`
console.log("Thom is looking fierce in a " + shirt + ", " + pants + ", and " + accessory + "!")

// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to `Footie Pajamas`.
thomsCloset[1][2] = "Footie Pajamas"

// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?

// Like so?
console.log(printGreeting("Slimer"));

// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.


// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
// console.log(printCool("Captain Reynolds"));
function printCool(name) {
  console.log(`${name} is cool.`)
}

// Write a function `calculateCube` that takes a single number and prints the volume of a cube made from that number.
// console.log(calculateCube(5));
function calcCube(sideLength) {
    return sideLength ** 3
}
console.log(calcCube(3));

// Write a function `isVowel` that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.
function isVowel(letter){
    var vowels = ['a','e','i','o','u','A','E','I','O','U']
    vowels.forEach(l => {
        if (letter == l){
            console.log(`${letter} is a vowel`);
        }
    });
}
isVowel('a');

// Write a function `getTwoLengths` that accepts two parameters (strings). The function should return an _array_ of numbers where each number is the length of the corresponding string.
// console.log(getTwoLengths("Hank", "Hippopopalous"));
function getTwoLengths(str1, str2) {
    length1 = str1.length
    length2 = str2.length
    console.log(length1, length2);
}

getTwoLengths("taco","tacotwo");


// Write a function `getMultipleLengths` that accepts a single parameter as an argument: an **array** of **strings**. The function should return an array of **numbers** where each number is the length of the corresponding string.
function getMultipleLengths(arrayOfStrings){
    arrayOfStrings.forEach(element => {
        console.log(element.length);
    });
}
getMultipleLengths(["hello", "what", "is", "up", "dude"])




// Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.
function maxOfThree(one,two,three){
    if(one>=two && one>=three){
        console.log(one);
    } else if(one<=two && one >=three){
        console.log(two);
    } else {
        console.log(three);
    }
}


// Write a function `printLongestWord` that accepts a single argument, an **array** of **strings**. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
function getLongestWord(arrayOfWords){
    longestWord = ''
    arrayOfWords.forEach(element => {
        if (element.length > longestWord.length){
            longestWord = element
        }
    });
    console.log(longestWord);
}

getLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"])


// Write a Javascript function called `transmogrify`. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

// For example, the transmogrified result of 5, 3, and 2 is `(5 times 3) to the
// power of 2` is 225.

function transmogrify(num1,num2,num3) {
    return (num1 * num2) ** num3
}
console.log(transmogrify(5, 3, 2));



// ### J. `reverseWordOrder` v2

// **Without using `.split()`, `.reverse()`, or `.join()`,** write a function `reverseWordOrder` that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

// See if you can do it without googling.

"I do not understand this"



//  Write a function that will return a random integer between 1 and 10. Test it.
console.log(Math.floor(Math.random()*10));
//  Write a function that will return a random integer between 10 and 100. Test it.
console.log(Math.floor(Math.random()*90)+10);


//  Write a function that will return a random number between 532 and 13267. Test it.
console.log(Math.floor(Math.random()*(13267-532))+532);
//  Write a function that will return a random number between 1 and 10. Test it.
console.log(Math.random()*10);
//  Add a few more quotes to the quotes array from question III-B-1 above. Write a function that will take an array as a parameter, and return a random element from that array.  Call your function a few times, passing in the quotes array.  Give it a nice semantic name like `getRandomElement`.
// var quotes2 = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]
//
// function LoremIpsum(array17){
//     console.log(array17[Math.floor(Math.random()*array17.length)]);
// }
//
// LoremIpsum(quotes2)
"Not quite sure if this is correct^^^^"

// Create an object called `user`.
// Write in to the object the key-value pairs for `name`, `email`, `age`, and `purchased`. Set the value of `purchased` to an empty array `[]`. Set the other values to whatever you would like.

var user = {
    name: "jay",
    email: "jbortiz0623@gmail.com",
    age: 25,
    purchased: []
};
