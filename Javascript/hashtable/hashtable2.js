// Create a class function called HashTable
function HashTable() {
    // create an empty array
    var stuff = []; 

    // create a function that takes a key, iterates over it, converts each ASCII letter to a value, 
    this.loseHashCode = function(key){
        // create a variable that will keep count of the ASCII value
        let hashNumber = 0;
        for (i = 0; i < key.length; i++){ 
            hashNumber += key.charCodeAt(i);
        }
        // we return the value of the key using modulus 37
        return hashNumber % 37
    };

    // create a method that adds to the array
    this.put = function(key, value){
        // create a variable that marks the position
        var position = this.loseHashCode(key);
        console.log(`${position} - ${key}`);
        stuff[position] = value;
    };

    // create a method that gets the value of a position in the stuff
    this.get = function(key) {
        return stuff[this.loseHashCode(key)];
    }

    // create a method that deletes the value at a specific entry.
    this.delete = function(key) {
        stuff[this.loseHashCode(key)] = undefined;
    }
}

var HashFriends = new HashTable();
HashFriends.put("Ronaldo", "QualBoy");
HashFriends.put("Dominic", "Dom Brady");
HashFriends.put("Tyler", "Tee");
HashFriends.put("Jack", "Jay Hoang");
HashFriends.put("Hieu", "Quan");

console.log(HashFriends.get("Ronaldo"));
console.log(HashFriends.get("Dominic"));
console.log(HashFriends.get("Tyler"));
console.log(HashFriends.get("Jack"));
console.log(HashFriends.get("Hieu"));






