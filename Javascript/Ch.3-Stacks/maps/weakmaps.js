let person = {name: "Me"};
const personData = new WeakMap();

personData.set(person, 'Extra Info');
console.log(personData);
console.log(personData.get(person));

person = null;

console.log(personData);