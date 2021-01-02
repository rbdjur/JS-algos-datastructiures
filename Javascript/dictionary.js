function Dictionary() {
    var items = {};

    this.has = function(key){
        return key in items;
    }; 

    this.set = function(key, value) {
        items[key] = value;
    };

    this.delete = function(key) {
        if(this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    };

    this.get = function(key) {
        return this.has(key) ? items[key] : undefined;
    };

    this.values = function() {
        var values = [];
        for (var k in items) {
            if(this.has(k)) {
                values.push(items[k]);
            }
        }
        return values;
    };

    this.keys = function() {
        return Object.keys(items);
    };

    this.getItems = function(){
        return items;
    };
}

var dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@gmail.com');
dictionary.set('John', 'John@gmail.com');
dictionary.set('Tyrion', 'Tyrion@gmail.com');


console.log(dictionary.has('Gandalf'));
// console.log(dictionary.size());

console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('Tyrion'));

dictionary.delete('John');

console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.getItems());
