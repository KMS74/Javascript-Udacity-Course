/* Looping Statements  */
// while loop
var i = 10; // when to start
// when to end
while (i <= 25) {
  console.log(`i = ${i}`);
  i += 2; // how to get to the next item
}
console.log(`after ending of whilw loop x = ${x}`);

var x = 1;
// while loop with a stop condition
while (x <= 20) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("JuliaJames");
  } else if (x % 5 === 0) {
    console.log("James");
  } else if (x % 3 === 0) {
    console.log("Julia");
  } else {
    console.log(x);
  }
  // increment x at the end of each loop
  x++;
}

// Quiz: Countdown, Liftoff!
// Let us take an iteration variable, that represent the remaining Time in seconds
n = 60;

// While loop with a stop condition
while (n >= 0) {
  if (n === 50) {
    console.log("Orbiter transfers from ground to internal power");
  } else if (n === 31) {
    console.log("Ground launch sequencer is go for auto sequence start");
  } else if (n === 16) {
    console.log("Activate launch pad sound suppression system");
  } else if (n === 10) {
    console.log("Activate main engine hydrogen burnoff system");
  } else if (n === 6) {
    console.log("Main engine start");
  } else if (n === 0) {
    console.log("Solid rocket booster ignition and liftoff!");
  } else {
    console.log("T-" + n + " seconds");
  }

  //Never forget to decrement/increment the iteration variable in a while loop
  // Otherwise, you loop will run infinite iterations
  n = n - 1;
}

// for loop
for (var i = 0; i < 6; i++) {
  console.log("printing out i = " + i);
}

// Nested Loops
for (var x = 0; x < 5; x = x + 1) {
  for (var y = 0; y < 3; y = y + 1) {
    console.log(x + "," + y);
  }
}

for (var x = 9; x >= 1; x--) {
  console.log("hello " + x);
}

// Quiz: Factorials;
var num = 4; // !4 =  4*3*2*1
var factorial = 1; // intial value
for (var x = 1; x <= num; x++) {
  factorial = factorial * x;
  //  1=1*1
  //  2=1*2
  //  6=2*3
  //  24=6*4
}

console.log(`The factorial of ${num} = ${factorial} `);

/*
What is a "Scope"?
The scope is defined [as a specific portion of the code]. There are three types of scope in Javascript:
1)Global scope - When a particular variable is visible (can be used) anywhere in the code. Such a variable is generally called as Global variable.
2)Function scope - When a particular variable is visible (can be used) within a particular function only. Such a variable is generally called as Local variable.
3)Block scope - When a particular variable is visible (can be used) within a pair of { . . . } only.

*/

/*
 * Global scope.
 * This variable declared outside of any function is called Global variable.
 * Hence, you can use this anywhere in the code
 */
var opinion = "This nanodegree is amazing";

// Function scope
function showMessage() {
  // Local variable, visible within the function `showMessage`
  var message = "I am an Udacian!";

  // Block scope
  {
    let greet = "How are you doing?";
    console.log(greet); // OK
    /*
     * We have used the keyword `let` to declare a variable `greet` because variables declared with the `var` keyword can not have Block Scope.
     */
  } // block scope ends

  console.log(message); // OK
  console.log(greet); // ERROR.
  // Variable greet can NOT be used outside the block

  console.log(opinion); // OK    to use the gobal variable anywhere in the code
} // function scope ends

// showMessage();

/*

There are three ways to declare a variable:

1)let - It a new way to declare a variable in any scope - Global, Local, or Block.
 The value of this variable can be changed or reassigned anytime within its scope.
2)const - It is also a way to declare constants in any scope - Global, Local, or Block. 
Once you are assigned a value to a const variable, the value of this variable CANNOT be changed or reassigned throughout the code.
3)var - This is the old way of declaring variables in only two scope - Global, or Local.
 Variables declared with the var keyword can not have Block Scope. The value of this variable can be changed or reassigned anytime within its scope.

*/

// Quiz: Find my Seat

/*
Directions:
Theater seats often display a row and seat number to help theatergoers find their seats. 
If there are 26 rows (0 to 25) and 100 seats (0 to 99) in each row, 
write a nested for loop to print out all of the different seat combinations in the theater.

*/

for (let row = 0; row < 26; row++) {
  for (let seat = 0; seat < 100; seat++) {
    console.log(`Row  = ${row} Seat = ${seat}`);
  }
}
