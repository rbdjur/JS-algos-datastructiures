var numbers = [1,2,3,4,5,6,7,8,9,19,11,12,13,14,15]

// will execute on every iterant of the array no matter what.  This is similar to a for loop.
// For all even numbers true will return, if odd false. 
numbers.forEach((x) => {
    if(x % 2 == 0) {
    console.log(x)
    }
})