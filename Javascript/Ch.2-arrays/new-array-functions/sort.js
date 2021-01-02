let numbers = [15, 14, 13, 12, 11, 10, 9, 8,7, 6, 5, 4, 3, 2, 1];

// if we do this, the orders will not be in order because the .sort() thinks these numbers are strings
console.log(numbers.sort());

// if b returns -1 then b is bigger than a which is used by the sort function to arrange the elements. 
// function compare(a, b) {
//     if (a < b) {
// return -1; }
//     if (a > b) {
//       return 1;
//     }
//     // a must be equal to b
//     return 0;
// }
//   console.log(numbers.sort(compare));