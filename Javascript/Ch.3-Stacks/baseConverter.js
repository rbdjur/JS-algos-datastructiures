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

function baseConverter(decNumber, base){
    var remStack = new Stack();
    let rem;
    baseString = '';
    digits = '0123456789ABCDEF'; //{6}
    while (decNumber > 0){
      rem = Math.floor(decNumber % base);
      remStack.push(rem);
      decNumber = Math.floor(decNumber / base);
}
    while (!remStack.isEmpty()){
      baseString += digits[remStack.pop()]; //{7}
}
    return baseString;
  }

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));

