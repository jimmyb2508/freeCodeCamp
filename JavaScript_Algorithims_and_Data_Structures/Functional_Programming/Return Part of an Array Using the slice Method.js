function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
  let arr = anim;
  let newArr = arr.slice(beginSlice, endSlice);
  return newArr;

  // Only change code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
