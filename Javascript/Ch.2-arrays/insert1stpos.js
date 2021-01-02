var numbers = [0,1,2,3,4,5,6,7,8,9];
console.log(numbers);

// Insert number at the beginning of the array - Strategy 1 - hardcode
// var lengthOfArr = numbers.length;
// console.log(lengthOfArr);

// for(let i = lengthOfArr; i > 0; i--) {
//     numbers[i] = numbers[i - 1];
// }

// numbers[0] = -1;

// console.log(numbers);

// Strategy 2 using array methods of Javascript
numbers.unshift(-2, -4, -3);
console.log(numbers);