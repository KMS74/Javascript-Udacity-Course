/*  Functions  */
// demo from FWD application
// declaring functions
function doA(doAnother) {
  console.log("doA");
  doAnother();
}
function doB() {
  console.log("doB");
}
function doC(doAnother) {
  console.log("doC");
  doAnother();
}
function doD() {
  console.log("doD");
}

function doE() {
  console.log("doE");
}
function doF() {
  console.log("doF");
}

// calling the functions
doA(function () {
  doB();

  doC(function () {
    doD();
  });

  doE();
});

doF();

// reverse function
function reverseString(reverseMe) {
  var reversed = "";
  for (var i = reverseMe.length - 1; i >= 0; i--) {
    reversed += reverseMe[i];
  }
  return reversed;
}

console.log(reverseString("Karem"));

// Declaring Functions
// Functions allow you to package up lines of code that you can use (and often reuse) in your programs.

// declares the sayHello function
// accepts no parameters! parentheses are empty
function sayHello() {
  var message = "Hello!";
  return message; // return a vlue
}

// function returns "Hello!" and console.log prints the return value
console.log(sayHello());

// Parameters vs. Arguments
/*
- A parameter is always going to be a variable name and appears in the function declaration.
- On the other hand, an argument is always going to be a value (i.e. any of the JavaScript data types - a number, a string, a boolean, etc.)
   and will always appear in the code when the function is called or invoked.
*/

function laugh(num) {
  let laughs = "";
  for (let i = 0; i < num; i++) {
    laughs += "ha";
  }
  laughs += "!";
  return laughs;
}

console.log(laugh(5));

// Hoisting
// before any javascript is executed, all function and varibles declartions are
// 'hoisted' to the top of thier scope.
// Hint: to avoid the bug of the hoisting, declare fuctions at the top of the script and variables
// at the top of the functions

// sayHi() function declartion is hoisted at the top of its current scope
sayHi("Julia"); // undefined Julia
function sayHi(name) {
  // var greeting = undefined;  // variable declartion is hoisted at the top of the function scope
  console.log(greeting + " " + name);
  var greeting = "Hello"; // the declaration is hoisted, not the assignment
}

// Quiz: Build a Triangle

//  creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}

function buildTriangle(width) {
  var triangle = "";
  for (var i = 1; i <= width; i++) {
    triangle += makeLine(i);
  }
  return triangle;
}
console.log(buildTriangle(10));

// When a function is stored inside a variable it's called a function expression.
// It's an anonymous function, a function with no name, and you've stored it in a variable called catSays.
var catSays = function (max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

/*
  NOTE:
  All function declarations are hoisted and loaded before the script is actually run.
   Function expressions are not hoisted, since they involve variable assignment,
    and only variable declarations are hoisted.
     The function expression will not be loaded until the interpreter reaches it in the script.

*/

// Functions as parameters:
// A function that is passed into another function is called a callback.

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
console.log(helloCat(catSays));

// Named function expressions & Inline function expressions:

// Function expression that assigns the function displayFavorite
// to the variable favoriteMovie
var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, "Spider Man");

// Call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Super Man");

/*
-This type of syntax, writing function expressions that pass a function into another function inline,
 is really common in JavaScript. It can be a little tricky at first, but be patient, keep practicing, and you'll start to get the hang of it!
- Anonymous inline function expressions are often used with function callbacks that 
  are probably not going to be reused elsewhere.
*/

var laugh = function (num) {
  let laughs = "";
  for (let i = 0; i < num; i++) {
    laughs += "ha";
  }
  laughs += "!";
  return laughs;
};
console.log(laugh(10));

var cry = function crying() {
  return "boohoo!";
};

function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function (num) {
  let laughs = "";
  for (let i = 0; i < num; i++) {
    laughs += "ha";
  }
  laughs += "!";
  return laughs;
});
