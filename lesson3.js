/*
DEFINITION: A flowchart is a visual diagram that outlines the solution to a problem
 through a series of logical statements.
  The order in which statements are evaluated and executed is called the control flow.

*/

// Flowchart to Code
var price = 15.0; // price of our hammer
var money = 20.0; // how much money i have

if (money >= price) {
  console.log("buy the hammer");
} else {
  console.log("don't buy the hammer");
}

var weather = "sunny";
if (weather === "snow") {
  console.log("bring a coat.");
} else if (weather === "rain") {
  console.log("Bring a rain jacket.");
} else {
  console.log("Wear what you have on.");
}

// Quiz: Even or Odd
var number = 2;
if (number % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

/* ****************************************** */
/* TESTING LOGIC */
// Change the value of `room` and `suspect` to test your code
// A room can be either of - dining room, gallery, ballroom, or billiards room
var room = "ballroom";

// A suspect can be either of - Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, or Mr. Kalehoff
var suspect = "Mr. Parkes";

/* ****************************************** */

/* IMPLEMENTATION LOGIC*/
var weapon = ""; // Initial value

// A boolean variable `solved` will tell us the status of mystery
// true --> solved and false --> unsolved
var solved = false;

/*
 * To help solve this mystery, write a combination of conditional statements that:
 * 1. sets the value of weapon based on the room and
 * 2. sets the value of solved to true if the value of room matches the suspect's room
 */
if (room === "ballroom") {
  weapon = "poison";
  // Mr. Kalehoff was present in the ballroom at the time of the murder
  if (suspect === "Mr. Kalehoff") solved = true;
} else if (room === "gallery") {
  /* ANOTHER WAY OF CHECKING THE CONDITION
if (room === 'ballroom' && suspect==="Mr. Kalehoff") {
    weapon = 'poison';
    solved = true;
}
We suggest you to try this way of checking the condition as well for an unsolved mystery.
*/
  weapon = "trophy";
  // Ms. Van Cleve was present in the gallery at the time of the murder
  if (suspect === "Ms. Van Cleve") solved = true;
} else if (room === "billiards room") {
  weapon = "pool stick";
  // Mrs. Sparr was present in the billiards room at the time of the murder
  if (suspect === "Mrs. Sparr") solved = true;
} else if (room === "dining room") {
  weapon = "knife";
  // Mr. Parkes was present in the dining room at the time of the murder
  if (suspect === "Mr. Parkes") solved = true;
}

/* ****************************************** */
// The code below will run only when `solved` is true
if (solved) {
  console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
} else {
  console.log("the mystery not solved");
}

/* ****************************************** */

// Quiz: Checking your Balance
var balance = 325.0;
var checkBalance = true;
var isActive = false;
// Start only if checkBalance === true
if (checkBalance) {
  // Cases when account is active. Now, the balance could be <, =, or > zero
  if (isActive && balance > 0) {
    console.log("Your balance is $" + balance.toFixed(2) + ".");
  } else if (isActive && balance === 0) {
    console.log("Your account is empty.");
  } else if (isActive && balance < 0) {
    console.log("Your balance is negative. Please contact bank.");
  }
  // Case when account is NOT active
  else if (!isActive) {
    console.log("Your account is no longer active.");
  }
} else {
  console.log("Thank you. Have a nice day!");
}

/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 *
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 *
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators.
 * It's okay if the output string doesn't match exactly.
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "chocolate";
var vessel = "cone";
var toppings = "peanuts";

// Add your code here

if (
  (flavor === "vanilla" || flavor === "chocolate") &&
  (vessel === "cone" || vessel === "bowl") &&
  (toppings === "sprinkles" || toppings === "peanuts")
) {
  console.log(
    "I'd like two scoops of " +
      flavor +
      "ice cream in a " +
      vessel +
      "with " +
      toppings +
      "."
  );
}

// Quiz: What do I Wear?
var shirtWidth = 23; // size L (large)
var shirtLength = 30; // size L (large)
var shirtSleeve = 8.71; // size L (large

if (
  shirtWidth >= 18 &&
  shirtWidth < 20 &&
  shirtLength >= 28 &&
  shirtLength < 29 &&
  shirtSleeve >= 8.13 &&
  shirtSleeve < 8.38
) {
  console.log("S");
} else if (
  shirtWidth >= 20 &&
  shirtWidth < 22 &&
  shirtLength >= 29 &&
  shirtLength < 30 &&
  shirtSleeve >= 8.38 &&
  shirtSleeve < 8.63
) {
  console.log("M");
} else if (
  shirtWidth >= 22 &&
  shirtWidth < 24 &&
  shirtLength >= 30 &&
  shirtLength < 31 &&
  shirtSleeve >= 8.63 &&
  shirtSleeve < 8.88
) {
  console.log("L");
} else if (
  shirtWidth >= 24 &&
  shirtWidth < 26 &&
  shirtLength >= 31 &&
  shirtLength < 33 &&
  shirtSleeve >= 8.88 &&
  shirtSleeve < 9.63
) {
  console.log("XL");
} else if (
  shirtWidth >= 26 &&
  shirtWidth < 28 &&
  shirtLength >= 33 &&
  shirtLength < 34 &&
  shirtSleeve >= 9.63 &&
  shirtSleeve < 10.13
) {
  console.log("2XL");
} else if (shirtWidth >= 28 && shirtLength >= 34 && shirtSleeve >= 10.13) {
  console.log("3XL");
} else {
  console.log("NA");
}

// Truthy and Falsy:
// Every value in JavaScript has an inherent(ملازمة) boolean value. When that value is evaluated
// in the context of a boolean expression, the value will be transformed into that inherent boolean value.
// A value is falsy if it converts to false when evaluated in a boolean context.
//  For example, an empty String "" is falsy because, "" evaluates to false.
if ("") {
  console.log("the value is truthy");
} else {
  console.log("the value is falsy");
}

/*
Here’s the list of all of the falsy values:
the Boolean value false
the null type
the undefined type
the number 0
the empty string ""
the odd value NaN (stands for "not a number")

*/

// A value is truthy if it converts to true when evaluated in a boolean context.
// For example, the number 1 is truthy because, 1 evaluates to true
if (1) {
  console.log("the value is truthy");
} else {
  console.log("the value is falsy");
}

/*
Here are some other examples of truthy values:
true
42
"pizza"
"0"
"null"
"undefined"
{}
[]

*/

// Essentially, if it's not in the list of falsy values, then it's truthy!

// Ternary Operator :The ternary operator provides you with a shortcut alternative for writing lengthy if...else statements.

var isGoing = true;
var color;

/*
if (isGoing) {
  color = "green";
} else {
  color = "red";
}

*/
console.log(color);

// TIP: Using if(isGoing) is the same as using if(isGoing === true).
//  Alternatively, using if(!isGoing) is the same as using if(isGoing === false).

var color = isActive ? "green" : "red";

var adult = true;
var preorder = true;

console.log(
  `It costs $${
    adult ? "40.00" : "20.00"
  } to attend the concert. Pick up your tickets at the ${
    preorder ? "will call" : "gate."
  }`
);

// Quiz: Navigating the Food Chain (3-8)
/*
Write a series of ternary statements that sets the variable category equal to:

"herbivore" if an animal eats plants
"carnivore" if an animal eats animals
"omnivore" if an animal eats plants and animals
"undefined" if an animal doesn't eat plants or animals
*/

var eatsPlants = true;
var eatsAnimals = true;

var category = eatsPlants
  ? eatsAnimals
    ? "omnivore"
    : "herbivore"
  : eatsAnimals
  ? "carnivore"
  : "undefined";

console.log(category);

// Switch Statement:is an another way to chain multiple else if statements that are based on
//  the same value without using conditional statements.

// The break statement can be used to terminate a switch statement and transfer control to the code
// following the terminated statement. By adding a break to each case clause, you fix the issue of the switch statement falling-through to other case clauses.

// if (option === 1) {
//   console.log("You selected option 1.");
// } else if (option === 2) {
//   console.log("You selected option 2.");
// } else if (option === 3) {
//   console.log("You selected option 3.");
// } else if (option === 4) {
//   console.log("You selected option 4.");
// } else if (option === 5) {
//   console.log("You selected option 5.");
// } else if (option === 6) {
//   console.log("You selected option 6.");
// }

var option = 3;

switch (option) {
  case 1:
    console.log("You selected option 1.");
    break;
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;
  case 4:
    console.log("You selected option 4.");
    break;
  case 5:
    console.log("You selected option 5.");
    break;
  case 6:
    console.log("You selected option 6.");
    break; // technically, not needed
}

var month = 2;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  case 2:
    days = 28;
}

console.log("There are " + days + " days in this month.");

// Programming Quiz: Back to School (3-9)

// change the value of `education` to test your code
var education = "a Doctoral degree";
// set the value of this based on a person's education
var salary = 0;

switch (education) {
  case "no high school diploma":
    salary = 25.636;
    break;
  case "a high school diploma":
    salary = 35.256;
    break;

  case "an Associate's degree":
    salary = 41.496;
    break;
  case "a Bachelor's degree":
    salary = 59.124;
    break;
  case "a Master's degree":
    salary = 69.732;
    break;
  case "a Professional degree":
    salary = 89.96;
    break;
  case "a Doctoral degree":
    salary = 84.396;
}

console.log(
  `In 2015, a person with ${education} earned an average of $${salary.toLocaleString(
    "en-US"
  )}/year.`
);
