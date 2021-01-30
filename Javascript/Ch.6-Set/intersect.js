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

let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

let setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

let intersectionAB = setA.intersect(setB);
// console.log(intersectionAB);
console.log(intersectionAB.values());

