let person = {name: 'Max'};
const instructor = new WeakSet();
instructor.add(person);
console.log('added to set', person);

person = null;
console.log('deleted from person', person);