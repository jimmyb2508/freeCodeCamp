function reverseString(str) {
  // 1. Use the split() method to return an array
  let splitString = str.split("")
  // 2. Use the reverse() method to reverse the new created array
  let reverseArray = splitString.reverse();
  // 3. Use the join() method to join all elements of the array into a string 
  let joinArray = reverseArray.join("");
  return joinArray;
}

reverseString("hello");


// Chaining the three methods together

function chainReverseMethod(stri) {
  return stri.split("").reverse().join("");
}

console.log(chainReverseMethod("James"));


// Reverse a string with a decrementing for loop

function reverseForString(strin) {
  // Step 1. Create an empty string that will host the new created string
  let newString = "";

  // Step 2. Create the FOR loop
  /* The starting point of the loop will be (str.length -1) which corresponds to the last character if the string, "o"
  As long as i is greater than or equals 0, the loop will go on.
  We decrement i after each interation */
  for (let i = strin.length - 1; i >= 0; i--) {
    newString += strin[i]; // or newString = newString + strin[i]
  }
      /* Here hello's length equals 5
        For each iteration: i = str.length - 1 and newString = newString + str[i]
        First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
        Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
        Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
        Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
        Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    End of the FOR Loop*/

    // Step 3. Return the reversed string
    return newString; // "olleh"
}

console.log(reverseForString('Clare'));



