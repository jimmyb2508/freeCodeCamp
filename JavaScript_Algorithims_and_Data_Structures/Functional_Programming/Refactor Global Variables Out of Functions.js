// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (arr, bookName) {
  let newList = [...arr];
  newList.push(bookName);
  return newList;
  
  // Change code above this line
}

// Change code below this line
function remove (arr, bookName) {
  let newList = [...arr];
  if (newList.indexOf(bookName) >= 0) {
    newList.splice(newList.indexOf(bookName), 1);
    return newList;
  }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);