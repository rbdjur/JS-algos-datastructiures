const ids = new Set([1,2,3]);
ids.add(2);
console.log(ids.has(1));
console.log(ids);

console.log(ids.entries());