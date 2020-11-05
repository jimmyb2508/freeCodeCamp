function bouncer(arr) {
  let arr2 = arr.filter(function(currentValue) {
    if(currentValue) {
      return currentValue;
    }
  });
  return arr2;
}

bouncer([7, "ate", "", false, 9]);
