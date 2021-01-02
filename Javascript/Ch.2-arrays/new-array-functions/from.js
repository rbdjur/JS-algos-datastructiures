var numbers = [1,2,3,4,5,6,7,8,9,19,11,12,13,14,15];

let numbers2 = Array.from(numbers);
console.log(numbers);

let even = Array.from(numbers, x => (x % 2 == 0));
console.log(even);