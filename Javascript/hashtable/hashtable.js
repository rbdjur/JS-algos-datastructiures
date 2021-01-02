function HashTable() {
    // create an empty array
    var table = [];
    // create a function that takes a key
    this.LLHC = function(key) {
        // since we will use the ASCII values, we need to create a variable with a value of 0. 
        var hash = 0;
        // loop through each character of the key.
        for (var i = 0; i < key.length; i++) {
            // for each letter, we want to add the value of the character using key.charCode(i) where key is the word passed to function, .carCode() converts the character to a value, and i is the iterant we are on. 
            hash += key.charCodeAt(i);
        }
        // we return the value of the key modulus 37 (arbitrary?)
        return hash % 37;
    }

    this.put = function(key, value) {
        // position is the returned number value of the lose lose hash code
        var position = this.LLHC(key);
        // we console log the position and the key.  The key is associated with the value
        console.log(`${position} - ${key}`);
        // in our table, we use the brackets to insert our value at that specific entry point, exclusive to this value. 
        table[position] = value;
    }

    this.get = function(key) {
        // we return the value that is stored in the table at this position. 
        return table[this.LLHC(key)];
    }

    this.remove = function(key) {
        // we assign undefined to the table at that position. 
        table[this.LLHC(key)] = undefined;
    }
}

var hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'john@email.com');
hash.put('Tyrion', 'tyrion@mail.com');

console.log(hash.get('Gandalf'));
console.log(hash.get('Loaine'));

hash.remove('Gandalf');
console.log(hash.get('Gandalf'));

