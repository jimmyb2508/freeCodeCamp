const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // Only change code below this line
  s.pop();
  s.unshift(2);
  console.log(s)
  // Using s = [2, 5, 7] would be invalid
  
  // Only change code above this line
}
editInPlace();
