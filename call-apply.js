const masud = {
  name: "Masud Kibria",
  id: 120,
  balance: 5000,
  treat: function (expense, tips) {
    this.balance = this.balance - expense - tips;
    console.log("called from here", this);
    return this.balance;
  },
};

const hero = {
  name: "Hero Alam",
  id: 101,
  balance: 6000,
};
const rajpal = {
  name: "Rajpal Yadav",
  id: 127,
  balance: 8500,
};

//call method
masud.treat.call(rajpal, 1000, 100);
masud.treat.call(rajpal, 500, 50);
masud.treat.call(rajpal, 300, 20);

// apply method;

masud.treat.apply(hero, [1000, 100]);
