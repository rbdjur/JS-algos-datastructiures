const person1 = {name: "Roland"}; // normal object
const person2 = {name: 'Rolando'}; // normal object

// const personData = new Map();
// const personData = new Map([['key', 'value']]); can be initalized like this since a map is just an array of arrays. 

const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]); 
// we can write our data like this where person1 will be stored as the key and the second argument for map can be other generic data and data type (primarily for data we do not want to add to the person1 object).

// console.log('personData : ', personData);
// console.log('personData : ', personData.get(person1));

personData.set(person2, [{date: '2 weeks ago', price: 100}]);
// you can have any type for a key and have mixed key types

// console.log('personData2 : ', personData);

// Multiple ways to loop through data of a map
for (let entries of personData.entries()) {
    // returns an array of two elements which are two arrays [key,value]
    console.log(entries);
}

for (let [key,value] of personData.entries()) {
    // returns an array of two elements which are two arrays [key,value]
    console.log(key, value);
    // console.log(key);
    // console.log(value);xw
}

