// function startGame() {
//     console.log('Hello');
//   }
  
//   console.log(startGame);
//   console.dir(startGame);

class BaseClass {
    constructor(title, description) {
      this.title = title;
      this.description = description; 
      console.log('called');
    }
  }
  
  
  class NewClass extends BaseClass {
    
  }
  
  let stuff = new NewClass('A clock work orange', 'cool movie');
  console.log(stuff);