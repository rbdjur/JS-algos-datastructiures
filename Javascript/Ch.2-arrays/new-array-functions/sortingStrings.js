var names = ['Ana', 'ana', 'john', 'John'];
console.log(names.sort());

names.sort(function(a,b) {
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    }; 
    if(a.toLowerCase()> b.toLowerCase()) {
        return 0;
    };
    return 0;
});

console.log(names);