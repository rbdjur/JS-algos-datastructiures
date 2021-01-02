var isEven = function (x) {
    // return true if x is a multiple of 2
    // return (x % 2 == 0) ? true : false;
    console.log((x % 2 ==0));
}

var numbers = [1,2,3,4,5,6,7,8,9,19,11,12,13,14,15]

// will execute on every iterant of the array and will store the sum of all the iterants in the array
// reduce returns the sum. 
var evenNumbers = numbers.reduce((previous, current, index) => {
    return previous + current;
});
console.log(evenNumbers);