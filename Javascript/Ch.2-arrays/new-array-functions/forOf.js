var numbers = [1,2,3,4,5,6,7,8,9,19,11,12,13,14,15];

for(let n of numbers) {
    console.log(`n: ${n} - ${n % 2 ==0 ? 'even' : 'odd'}`);
}