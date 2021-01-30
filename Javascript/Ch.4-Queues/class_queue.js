class Queue {
    constructor(title, name, number){
        this.title = title;
        this.name = name;
        this.number = number;
    }
}

let Q = new Queue('Queue1', 'cars', 10);
// console.log(Q);

// extend Queue into a diffefrent Queue that needs another field/property
class Queue2 extends Queue {
    constructor(title, name, number, balance){
        super(title, name, number);
        this.balance = balance;
    }
}

let Q2 = new Queue2('Queue 2', 'bank accounts', 1, 20000);
// let Q2 = new Queue2(20000);
console.log(Q2);