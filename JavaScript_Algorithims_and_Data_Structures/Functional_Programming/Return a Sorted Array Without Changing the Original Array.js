var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  const newArray = [...arr]
  const sortArray = newArray.sort();
  console.log(newArray);
  return sortArray;

  // Only change code above this line
}
nonMutatingSort(globalArray);
console.log(globalArray);