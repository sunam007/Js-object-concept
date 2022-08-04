const student = {
  name: "Masud",
  id: 120,
  balance: 5000,
  major: "mathematics",
  subjects: ["english", "economics", "calculus"],
  bestFriend: {
    name: "Obaidul",
    id: 123,
    major: "mathematics",
  },
  takeExam: function () {
    console.log(this.name + " is taking mathematics exam.");
  },
  treat: function (expense, tips) {
    this.balance = this.balance - expense - tips;
    return this.balance;
  },
};

// student.takeExam();
const remainingBalance1 = student.treat(500, 100);
console.log(remainingBalance1);
const remainingBalance2 = student.treat(200, 50);
console.log(remainingBalance2);
