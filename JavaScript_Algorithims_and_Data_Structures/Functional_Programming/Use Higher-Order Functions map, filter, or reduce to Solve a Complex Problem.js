const squareList = (arr) => {
  // Only change code below this line
  const positiveInteger = arr.filter(item => item > 0);
  const wholeInteger = positiveInteger.filter(item => item % 1 == 0)
  console.log(wholeInteger);
  const squareInteger = wholeInteger.map(item => item * item);
  console.log(squareInteger);
  return squareInteger;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
const squaredIntegersTwo = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
const squaredIntegersThree = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]);
// console.log(squaredIntegers);