let numbersCopy = Array.of(1,2,3,4,5,6) // [1,2,3,4,5,6]
numbersCopy.fill(0) // [0,0,0,0,0,0]
numbersCopy.fill(1,2) // [0,0,1,1,1,1]
numbersCopy.fill(2,2,3) // [0,0,2,2,1,1]

let newArr = Array(6).fill(1) // [1,1,1,1,1,1] // this says the array will have a length of 6 and fill it with all 1's