var isEven = function (x) {
    // return true if x is a multiple of 2
    console.log(x);
    return (x % 2 == 0) ? true : false;
}

var numbers = [1,2,3,4,5,6,7,8,9,19,11,12,13,14,15];

// will execute on some iterant of the array until true returns.
// since 1 is an odd number, the function isEven() will on an iterant unti true returns, so the next iterant is 2. atthis point the .some() will return true.
numbers.some(isEven);