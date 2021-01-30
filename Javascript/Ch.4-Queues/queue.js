// ES6
let Queue = (function() {
    let items = new WeakMap();
  
    class Queue {
      constructor() {
        items.set(this, []);
      }
  
    enqueue(elements) {
      let q = items.get(this);
      q.push(elements);
    }
  
    dequeue() {
      let q = items.get(this);
      let firstItem = q.shift(); 
      return firstItem;
    }
  
    size() {
      let q = items.get(this);
      return s.get(this).length;
    }
  
    isEmpty() {
      let q = items.get(this);
      return q.length == 0;
    }
  
    front() {
      let q = items.get(this);
      return q[0];
    }
    
    print() {
      console.log(queue)
      }
    }
      return Queue 
})();

