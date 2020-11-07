function getIndexToIns(arr, num) {
  arr.sort(function(a,b){
  return a - b;
});
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  if(num <= arr[i]){
    console.log(i)
    return i;
  }
}
return arr.length;
}

// getIndexToIns([40, 60], 50);
// getIndexToIns([5, 3, 20, 3], 5);
getIndexToIns([10, 20, 30, 40, 50], 30);
