let Stack = (function () {
    const items = new WeakMap();
    
    class Stack {
        constructor() {
            items.set(this, [])
        }
        
        push = function(element) {
            // console.log(`this.push()`);
            let s = items.get(this);
            s.push(element);
            console.log(`${s}`);
        }
    
        pop = function(element) {
            // console.log(`this.pop()`);
            let s = items.get(this);
            return s.pop();
        }
    
        peek = function() {
            // console.log(`this.peek()`);
            let s = items.get(this);
            return s[s.length - 1];
        };
    
        isEmpty = function(){
            // console.log(`isEmpty()`);
            let s = items.get(this);
            return s.length == 0;
        };
    
       size = function(){
            let s = items.get(this);
            console.log(`this.size`);
            return s.length;
        };
    
        empty = function() {
            // console.log(`this.empty`);
            let s = items.get(this);
            s = [];
            console.log(items);
        };
    
        print = function() {
            let s = items.get(this);
            console.log(s.toString());
        };
    }
    return Stack;
})();

// Question: Why is there no reference to this. when refering to our methods? 
// -could it be because since class Stack is in a function, the methods are now essentially functions declared and defined within a parent function so they fall under function syntax rules and not class syntax rules? 

let stack = new Stack();
console.log(stack.isEmpty()); //true

stack.push(5); // [5]
stack.push(8); // [5, 8]

console.log(stack.peek()); // 8

stack.push(11);
console.log(stack.size()); // 3
console.log(stack.isEmpty()); // false

stack.push(15); // [5,8,11 ,15]

stack.pop(); // removes top item
stack.pop(); // removes top item

console.log(stack.size()); // 2
stack.print(); // [5, 8]






