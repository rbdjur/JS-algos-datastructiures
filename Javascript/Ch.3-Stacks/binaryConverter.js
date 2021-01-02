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

function binaryConverter(decNumber){
    var nStack = new Stack();
    let rem;
    binaryString = '';
    while (decNumber > 0){
      rem = Math.floor(decNumber % 2);
      nStack.push(rem);
      decNumber = Math.floor(decNumber / 2);
}
    while (!nStack.isEmpty()){
      binaryString += nStack.pop().toString(); //{7}
}
    return binaryString;
  }

  console.log(binaryConverter(233));
  console.log(binaryConverter(10));
  console.log(binaryConverter(1000));
