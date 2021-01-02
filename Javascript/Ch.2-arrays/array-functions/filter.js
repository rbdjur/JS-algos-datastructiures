var isEven = function (x) {
    // return true if x is a multiple of 2
    // return (x % 2 == 0) ? true : false;
    console.log((x % 2 ==0));
}

var numbers = [1,2,3,4,5,6,7,8,9,19,11,12,13,14,15]

// will execute on every iterant of the array and will store true or false in an array if the condition is met.
// filter returns an array of all the elements the function returns true. so all even numbers that are multiples of 2.  
var evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);