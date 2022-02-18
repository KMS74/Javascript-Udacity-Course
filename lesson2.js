/*
LESSON2
1) Intro to Data Types
2) Numbers
3) Number and Operator - Practice
4) Comments
5) Quiz: First Expression (2-1)
6) Strings
7) String concatenation
8) Variables
9) Quiz: Converting Temperatures (2-2)
10) String Index
11) Escaping Strings
12) Comparing Strings



*/

var age = 22;
var firstName = "Karem";
var lastName = "Shabana";
var fullName = firstName + " " + lastName;
var greeting = "Hello";

console.log(greeting + " " + fullName);

var totalAfterTax = 53.03; // uses camelCase if the variable name is multiple words
var tip = 8; // uses lowercase if the variable name is one word

// Quiz: First Expression
console.log(5 * 7 + 10 - 3); // 42

// Quiz: Converting Temperatures
var celsius = 12;
var fahrenheit = celsius * 1.8 + 32;
console.log(`celsius: ${celsius} => fahrenheit: ${fahrenheit} `);

var quote = "Stay awhile and listen!";
console.log(quote[6]); // w

console.log('The man whispered, "please speak to me."');

// null refers to the "value of nothing", while undefined refers to the "absence of value".
console.log(signedIn); // undefined
var signedIn = null;
console.log(signedIn); // null
// NaN stands for "Not-A-Number" and it's often returned indicating an error with number operations.
console.log(Math.sqrt(-25)); // NaN

/*
 - In the case of "regular comparison", the operands on either side of the == operator are first 
 converted to numbers, before comparison. Therefore, a ' ', false, and 0 are all considered equal.
  Similarly, a '1' and 1 are also considered equal.
   If we don't want to convert the operands, before comparison, 
   we have to use a "strict comparison" ===, that is explained below.

 - A strongly typed language is a programming language that is more likely to generate errors 
  if data does not closely match an expected type. Because JavaScript is loosely typed, you don’t need to specify data types; 
  however, this can lead to errors that are hard to diagnose due to implicit type coercion.
*/
