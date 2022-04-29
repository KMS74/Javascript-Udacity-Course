/*  Arrays */

// creates a `donuts` array with three strings
var donuts = ["glazed", "powdered", "jelly"];

// creates a `mixedData` array with mixed data types
var mixedData = ["abcd", 1, true, undefined, null, "all the things"];

// creates a `arraysInArrays` array with three arrays
var arraysInArrays = [
  [1, 2, 3],
  ["Julia", "James"],
  [true, false, true, false],
];

console.log(donuts[0]); // glazed
// changes the second element in the `donuts` array to "glazed cruller"
donuts[1] = "glazed cruller";
console.log(donuts[1]); // glazed cruller

var udaciFamily = ["Julia", "James", "Karem"];
console.log(udaciFamily);

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";
var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

var crew = [captain, second, pilot, companion, mercenary, mechanic];
crew.push(doctor, sister, shepherd);
var prices = [1.23, 48.11, 90.11, 8.5, 9.99, 1.0, 1.1, 67.0];
prices[0] = 11;
prices[2] = 33;
prices[6] = 77;

prices[99] = 1000;
console.log(prices);
console.log(prices.length); // length = last index+1 = 100 'all hole gaps are empaty items'

// You can use the push() method to add elements to the end of an array.
//  returns the length of the array after an element has been added
var newLength = donuts.push("powdered"); // pushes "powdered" onto the end of the `donuts` array
console.log(newLength);

// Alternatively, you can use the pop() method to remove elements from the end of an array.
// returns the element that has been removed in case you need to use it.
var removedItem = donuts.pop();
console.log(removedItem);

// ["glazed", "powdered", "jelly"];
// splice() is another handy method that allows you to add and remove elements from anywhere within an array.
var removedItems = donuts.splice(1, 1, "chocolate cruller", "creme de leche"); // add and remove
console.log(removedItems);
console.log(donuts);

removedItems = donuts.splice(1, 2); // removes items only
console.log(removedItems);
console.log(donuts);

removedItems = donuts.splice(2, 0, "chocolate cruller", "creme de leche"); // adds items only
console.log(removedItems); // empty array
console.log(donuts);

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];
rainbow.splice(2, 1, "Yellow", "Green");
rainbow.splice(5, 0, "Purple");
console.log(rainbow);

function hasEnoughPlayers(arr) {
  return arr.length >= 7; // returns true if the condition is true otherwise return falce
}

var team = [
  "Oliver Wood",
  "Angelina Johnson",
  "Katie Bell",
  "Alicia Spsley",
  "Fred Weaslinnet",
  "Harry Potter",
];
console.log(hasEnoughPlayers(team));

var portionOfTeam = team.slice(0, 2);
console.log(portionOfTeam);
console.log(team);

// Loops in arrays
// the variable `i` is used to step through each element in the array
// for (var i = 0; i < donuts.length - 1; i++) {
//   donuts[i] += " hole";
//   donuts[i] = donuts[i].toUpperCase();
// }

donuts.forEach((donut) => {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});

console.log(donuts);

// loop over the following array and add 100 to each of the values if the value is divisible by 3.
var test = [
  12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148,
  169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139,
];

test.forEach(function (element, index, arr) {
  if (element % 3 === 0) {
    arr[index] += 100;
  }
});
console.log(test);

// the map() method, you can take an array, perform some operation on each element of the array,
//  and return a new array.

var improvedDonuts = donuts.map(function (donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});

console.log(improvedDonuts);
console.log(donuts);

var bills = [
  50.23, 19.12, 34.01, 100.11, 12.15, 9.9, 29.11, 12.99, 10.0, 99.22, 102.2,
  100.1, 6.77, 2.22,
];

var totals = bills.map(function (ele) {
  ele = (15 / 100) * ele + ele;
  return Number(ele.toFixed(2));
});

console.log(totals);
