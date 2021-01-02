var isEven = function (x) {
    // return true if x is a multiple of 2
    console.log(x);
    return (x % 2 == 0) ? true : false;
}

var numbers = [1,2,3,4,5,6,7,8,9,19,11,12,13,14,15]

// will execute on every iterant of the array until returns false.
// since 1 is an odd number, the function isEven() will run only on the first index of the array, which is 1 because the every() runs until the function returns false. 
numbers.every(isEven);