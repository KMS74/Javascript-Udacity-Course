/*  Objects  */

// Object-literal notation

var umbrella = {
  color: "pink",
  isOpen: false,
  open: function () {
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
  },
  close: function () {
    if (umbrella.isOpen === false) {
      return "The umbrella is already closed!";
    } else {
      umbrella.isOpen = false;
      return "Julia closes the umbrella!";
    }
  },
};
console.log(umbrella);

const breakfast = {
  name: "The Lumberjack",
  price: 9.95,
  ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"],
};
console.log(breakfast.name);
console.log(breakfast["price"]);

var savingsAccount = {
  balance: 2000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      this.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = this.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      this.balance -= amount;
    }
  },
  printAccountSummary: function () {
    return (
      "Welcome!\nYour balance is currently $" +
      this.balance +
      " and your interest rate is " +
      this.interestRatePercent +
      "%."
    );
  },
};
console.log(savingsAccount.printAccountSummary());

const facebookProfile = {
  name: "Karem Shabana",
  friends: 700,
  messages: ["mesg1", "mesg2", "mesg3"],
  postMessage: function (msg) {
    this.messages.push(msg);
  },
  deleteMessage: function (index) {
    this.messages.splice(index, 1);
  },
  addFriend: function () {
    this.friends++;
  },
  removeFriend: function () {
    if (this.friends > 0) {
      this.friends--;
    }
  },
};

facebookProfile.postMessage("Hello and welcome");
facebookProfile.addFriend();
facebookProfile.deleteMessage(1);
console.log(facebookProfile);

var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 },
];

donuts.forEach((element) => {
  console.log(`${element.type} donuts cost $${element.cost} each`);
});

// Ending of The Course
