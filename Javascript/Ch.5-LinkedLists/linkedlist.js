function LinkedList() {
    let Node = function(element){ // {1}
      this.element = element;
      this.next = null;
};
    let length = 0; // {2}
    let head = null; // {3}

    this.append = function(element){
        let node = new Node(element); // {1}
        let current; //{2}

        if (head === null) { //{3}
            head = node; 
        } else {
            current = head; //{4}
            while(current.next) {
                current = current.next;
            }
            current.next = node; //{5}
        }
        length++; //{6}
    };

    this.insert = function(position, element){
        // check for out ouf bounds values
        if (position >= 0 && position <= length) { // {1}
            let node = new Node(element);
            let current = head;
            let previous;
            index = 0;

            if (position === 0) {
                node.next = current; // {2}
                head = node;
            } else {
                while (index++ < position) { // {3}
                    previous = current;
                    current = current.next;
                }
                node.next = current; // {4}
                previous.next = node; // {5}
            }
            length++;
            return true;
        } else {
            return false; // {6}
        }
    };
    this.removeAt = function(position){
        //check for out-of-bounds values
        if (position > -1 && position < length){ // {1}
            let current = head; // {2}
            let previous; // {3}
            let index = 0; // {4}

            //removing first item
            if (position === 0){ // {5}
            head = current.next;
        } else {
            while (index++ < position){ // {6}
            previous = current;     // {7}
            current = current.next; // {8}
         }
         //link previous with current's next: skip it to remove
         previous.next = current.next; // {9}
       }
       length--; // {10}
       return current.element;
     } else {
       return null; // {11}
        };
    };
    this.remove = function(element){};
    this.indexOf = function(element){
        let current = head,
        index = -1;
        while (current) {   
          if (element === current.element) {
            return index;       
          }
          index++;                
          current = current.next; 
        }
   return -1;
    };
    this.isEmpty = function() {
        return length === 0;
    };
    this.size = function() {
        return length;
    };
    this.toString = function(){
    let current = head, //{1}
    string = '';    //{2}
    while (current) {   //{3}
    //    string += current.element +(current.next ? 'n' : '');
       current = current.next;   //{5}
        }
     return string; 
    };

    this.print = function(){};
    this.getHead = function() {
        return head;
    };
}

let list = new LinkedList();
list.append(15);
list.append(10);
