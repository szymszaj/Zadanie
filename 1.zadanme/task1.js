const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];
console.log(newNumbers);

const person = { name: "John", age: 30 };
const newPerson = { ...person, city: "Warsaw" };
console.log(newPerson);

function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3, 4));
