  // Find the Longest Word With a FOR Loop
  function findLongestWordLength(str) {
    // Step 1. Split the string into an array of strings
    var strSplit = str.split(' ');
    // var strSplit = "The quick brown fox jumped over the lazy dog".split(' ');
    // var strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];
  
    // Step 2. Initiate a variable that will hold the length of the longest word
    var longestWord = 0;
  
    // Step 3. Create the FOR loop
    for(let i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){ // If strSplit[i].length is greater than the word it is compared with...
      longestWord = strSplit[i].length; // ...then longestWord takes this new value
      }
    }
  
    //Step 4. Return the longest word
    return longestWord; // 6
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  
  // Find the Longest Word With the sort() Method
  
  function findLongestWord(str) {
    // Step 1. Split the string into an array of strings
    let strSplit = str.split(' ');
  
    // Step 2. Sort the elements in the array
    let longestWord = strSplit.sort(function(a, b) {
      return b.length - a.length;
    });
      /* Sorting process
      a           b            b.length     a.length     var longestWord
    "The"      "quick"            5            3         ["quick", "The"]
    "quick"    "brown"            5            5         ["quick", "brown", "The"]  
    "brown"    "fox"              3            5         ["quick", "brown", "The", "fox"]
    "fox"      "jumped"           6            3         ["jumped", quick", "brown", "The", "fox"]
    "jumped"   "over"             4            6         ["jumped", quick", "brown", "over", "The", "fox"]
    "over"     "the"              3            4         ["jumped", quick", "brown", "over", "The", "fox", "the"]
    "the"      "lazy"             4            3         ["jumped", quick", "brown", "over", "lazy", "The", "fox", "the"]
    "lazy"     "dog"              3            4         ["jumped", quick", "brown", "over", "lazy", "The", "fox", "the", "dog"]
    */
    // Step 3. Return the length of the first element of the array
  
      return longestWord[0].length; // var longestWord = ["jumped", "quick", "brown", "over", "lazy", "The", "fox", "the", "dog"];
                                  // longestWord[0]="jumped" => jumped".length => 6
    }
  
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
  
  // Find the Longest Word With the reduce() Method
  
  function findLongWord(str) {
    // Step 1. Split the string into an array of strings
    let strSplit = str.split(' ');
  
    // Step 2. Use the reduce method
    let longestWord = strSplit.reduce(function(longest, currentWord) {
      if(currentWord.length > longest.length)
        return currentWord;
      else
        return longest;
    });
      // Step 3. Return the length of the longestWord
      return longestWord.length;
  }
  
  console.log(findLongWord("The quick brown fox jumped over the lazy dog"));