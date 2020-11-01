// Return the Largest Numbers in a Array With Built-In Functions — with map() and apply()

function largeOfFour(mainArray){
  // Step 1. Map over the main arrays
  return mainArray.map(function(subArray){

  // Step 2. Return the largest numbers for each sub-arrays with Math.max() method
  return Math.max.apply(null, subArray);
  });
}

console.log(largeNumber([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
