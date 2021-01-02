var numbers = [-2, -4, -3, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.push(11,12,13);

// we can use splice() to remove an element from an array (< starting position of array>, the number of indexes we want to remove).

numbers.splice(5,3);
// starting at position 5 of the array, the next three indexes will be removed.
console.log(numbers);

numbers.splice(5,0,2,3,4);
// we can use .splice() to insert the elements we just removed.  But this time splice will take 3 arguments: <position to start at in array>, the number of elements we want to remove, the values we would like to insert into the array. 
console.log(numbers);
