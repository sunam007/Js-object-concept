const bottle = {
  color: "yellow",
  price: 50,
  volume: "500ml",
  company: "RFL",
  isCleaned: true,
};

// we use for in loop on object;

for (const prop in bottle) {
  //   console.log(bottle[prop]);
}

// Object.keys() and then for of loop
const keys = Object.keys(bottle);
for (const props of keys) {
  //   console.log(props, bottle[props]);
}
//[Advance] Object.entries() and then using destructuring inside for of loop

const entries = Object.entries(bottle);
for (const [keys, values] of entries) {
  console.log(keys, values);
}
