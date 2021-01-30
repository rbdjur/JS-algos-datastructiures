function Set() {
    let items = {};

    this.has = function(value) {
        return items.hasOwnProperty(value);
    };

    this.add = function(value) {
        if(!this.has(value)){
            items[value] = value;
            return true;
        }
        return false;
    };

    this.remove = function(value) {
        if(this.has(value)) {
            delete items[value];
            return true
        } 
        return false; 
    }

    this.size = function() {
        return Object.keys(items).length;
    }

    this.values = function() {
        let values = [];
        for(let key in items) {
            if(items.hasOwnProperty(key)) {
                values.push(items[key]);
            }
        }
        return values;
    }

    // Set Operations
    this.union = function(otherSet) {
        let unionSet = new Set();
        let values = this.values();

        for(let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        values = otherSet.values();
        for(let i = 0; i <values.length; i++) {
            unionSet.add(values[i]);
        }
        return unionSet;
    }

    this.intersect = function(otherSet) {
        let intersectSet = new Set();
        let values = this.values(); 

        for(let i = 0; i < values.length; i++) {
            if(otherSet.has(values[i])) {
                intersectSet.add(values[i]);
            }
        }
        return intersectSet;
    }

    this.difference = function(otherSet) {
        let differenceSet = new Set();
        let values = this.values();

        for (let i = 0; i < values.length; i++) {
            if(!otherSet.has(values[i])) {
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    }

    this.subset = function(otherSet) {
        if(this.size() > otherSet.size()){
            return false;
        } else {
            let values = this.values();
            for (let i = 0; i < values.length; i++) {
                if(!otherSet.has(values[i])) {
                    return false;
                } 
            }
            return true; 
        }
    }
}

let set = new Set(); // {}
set.add(1);
console.log(set.add(1)); // ["1"]
console.log(set.has(1)); // true 
console.log(set.size()); // 1

set.add(2);
console.log(set.values()); // ["1", "2"]
console.log(set.has(2)); // true
console.log(set.size()); // 2 

set.remove(1);
console.log(set.values()); // ["2"]

set.remove(2);
console.log(set.values()); // []



