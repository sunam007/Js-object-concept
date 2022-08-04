//1. object literal

const student = {
  name: "Mamun",
  id: 102,
  hobby: "cricketer",
};
// console.log(student.hobby);

//2. using constructor
const pupil = new Object("manus");
// console.log(pupil);

//3. using Object.Create() ; must pass a parent object or null but can not be blank;
const human = Object.create(student);
// console.log(human.hobby);

//4. using class
class Person {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }
}

const individual = new Person("Rony", 34, 5.5);
// console.log(individual);

//5. using function
function manush(name, age, height) {
  this.name = name;
  this.age = age;
  this.height = height;
}

const man = new manush("hasan", 23, 6.1);
console.log(man);
