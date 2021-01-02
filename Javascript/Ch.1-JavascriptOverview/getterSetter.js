class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set newName(value) {
        this._name = value;
    } 
}

var lotrChar = new Person('Frodo');
console.log(lotrChar.name);
lotrChar.newName = "Gandalf";
console.log(lotrChar.name);
