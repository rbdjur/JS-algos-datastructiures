// let numbers = [15, 14, 13, 12, 11, 10, 9, 8,7, 6, 5, 4, 3, 2, 1];

let numbers = [1, 10, 11, 12, 13, 14, 15, 2, 3, 4, 5, 6, 7, 8, 9]

function compare(a, b) {
    if (a < b) {
return -1; }
    if (a > b) {
      return 1;
    }
    // a must be equal to b
    return 0;
}

numbers.sort(compare);

console.log(numbers.indexOf(10));
console.log(numbers.indexOf(100));

numbers.push(10);
console.log(numbers.lastIndexOf(10));
console.log(numbers.lastIndexOf(100));

