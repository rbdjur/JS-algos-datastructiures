// function Book(title, pages, isbn){ //{1}
// this.title = title;
// this.pages = pages;
// this.isbn = isbn;
// }
// Book.prototype.printTitle = function(){
// console.log(this.title);
// };

// let harryPotters = new Book('HP: Chamber of Secrets', 255, 1234);
// console.log(harryPotters);

class Book { //{2}
constructor (title, pages, isbn) {
this.title = title;
this.pages = pages;
this.isbn = isbn;
}
printIsbn(){
  console.log(this.isbn);
    }
}

var myBook = new Book('lol', 123, 321);
console.log(myBook);

