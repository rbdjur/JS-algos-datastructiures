var numbers = [0,1,2,3,4,5,6,7,8,9];

// Manually removing the first index value of an array - strategy 1
for(let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i+1];
}
console.log(numbers);

// removing the first index value of an array using built in javascript methods of array - strategy 2
var otherNumbers = [0,1,2,3,4,5,6,7,8,9];
console.log(otherNumbers);
otherNumbers.shift();
console.log(otherNumbers);





