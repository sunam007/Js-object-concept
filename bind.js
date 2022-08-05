const masud = {
  name: "Masud Kibria",
  id: 120,
  balance: 5000,
  treat: function (expense) {
    this.balance = this.balance - expense;
    console.log("called from here", this);
    return this.balance;
  },
};

const hero = {
  name: "Hero Alam",
  id: 101,
  balance: 6000,
};

// masud.treat(500);

const heroTreat = masud.treat.bind(hero);
// console.log(heroTreat(500));

console.log(masud);

// only the method treat was borrowed by object hero but not set as its property;
