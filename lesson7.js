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

const breakfast = {
  name: "The Lumberjack",
  price: 9.95,
  ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"],
};
console.log(breakfast);

var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  },
  printAccountSummary: function () {
    return (
      "Welcome!\nYour balance is currently $" +
      savingsAccount.balance +
      " and your interest rate is " +
      savingsAccount.interestRatePercent +
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
    facebookProfile.messages.push(msg);
  },
  deleteMessage: function (index) {
    facebookProfile.messages.splice(index, 1);
  },
  addFriend: function () {
    facebookProfile.friends++;
  },
  removeFriend: function () {
    if (facebookProfile.friends > 0) {
      facebookProfile.friends--;
    }
  },
};

donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 },
];

donuts.forEach((element) => {
  console.log(`${element.type} donuts cost $${element.cost} each`);
});
