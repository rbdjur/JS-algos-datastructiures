function Dictionary(){
    let items = {};

    this.has = function(key) {
        return key in items;
    }

    this.set = function(key, value){
        items[key] = value;
    }

    this.delete = function(key) {
        if(this.has(key)){
            delete items[key];
            // return `${items[key]} was deleted.`;
            return true;
        }
        return false;
    }

    this.get = function(key) {
        return this.has(key) ? items[key] : 'Does not exist';
    }

    this.values = function(key){
        let values = [];
        for (let key in items){
            if(this.has(key)){
                values.push(items[key]);
            }
        }
        return values;
    }

    this.keys = function(){
        return Object.keys(items);
    }

    this.size = function(){
         return Object.keys(items).length;
    }

    this.getItems = function() {
        return items;
    }
}

let dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@gmail.com');
dictionary.set('Frodo', 'frodo@gmail.com');
dictionary.set('Legolas', 'legolas@gmail.com');

console.log(dictionary.has('Gandalf'));
console.log(dictionary.size());
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('Legolas'));

dictionary.delete('Frodo');
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.getItems());
