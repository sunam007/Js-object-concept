// ddeclared an object using object literal;
const bottle = {
  color: "yellow",
  price: 50,
  volume: "500ml",
  company: "RFL",
  isCleand: true,
};

// Object.keys();to get all the keys of an object,returns value as an array;
const keys = Object.keys(bottle);
// console.log(keys);

// Object.values();to get all the values of an object,returns values as an array
const values = Object.values(bottle);
// console.log(values);

// Object.entries(); to get all the key-value pairs in a multidimensional array
const pairs = Object.entries(bottle);
// console.log(pairs);

// console.log(bottle);

// delete object_name.property_name; to delete a property from an object

/* delete bottle.isCleand;
console.log(bottle); */

// Object.seal(); to protect an object from deletion of a property, but it lets user to change the value of a key;

// Object.seal(bottle);
// delete bottle.isCleand;
//isCleanded property is not deleted as the object is sealed;

// console.log(bottle);
// bottle.volume = "1000 ml";

// the value of the volume has been changed; but we can not add a new property to a sealed object; [ comment out the seal method to add a new property]

// console.log(bottle);
// bottle.madeIn = "BD";
// console.log(bottle);

// Object.freeze() to absulutely freeze all the key-value pairs and everything of an object;

Object.freeze(bottle);
delete bottle.isCleand;
bottle.madeIn = "BD";
bottle.volume = "1000 ml";
console.log(bottle);
// we tried to delete , add a new property and change the value of a key but couldn't as the object was freezed;
