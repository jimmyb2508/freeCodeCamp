// Title Case a Sentence With a FOR Loop

function titleCase(str) {
  // Step 1. Lowercase the string
  str = str.toLowerCase();
  // str = "I'm a little tea pot".toLowerCase();
  // str = "i'm a little tea pot";

  // Step 2. Split the string into an array of strings
  str = str.split(' ');
  // str = "i'm a little tea pot".split(' ');
  // str = ["i'm", "a", "little", "tea", "pot"];

  // Step 3. Create the FOR loop
  for (let i = 0; i < str.length; i++) {
    str[i]= str[i].charAt(0).toUpperCase() + str[i].slice(1);
      /* Here str.length = 5
    1st iteration: str[0] = str[0].charAt(0).toUpperCase() + str[0].slice(1);
                   str[0] = "i'm".charAt(0).toUpperCase()  + "i'm".slice(1);
                   str[0] = "I"                            + "'m";
                   str[0] = "I'm";
    2nd iteration: str[1] = str[1].charAt(0).toUpperCase() + str[1].slice(1);
                   str[1] = "a".charAt(0).toUpperCase()    + "a".slice(1);
                   str[1] = "A"                            + "";
                   str[1] = "A";
    3rd iteration: str[2] = str[2].charAt(0).toUpperCase()   + str[2].slice(1);
                   str[2] = "little".charAt(0).toUpperCase() + "little".slice(1);
                   str[2] = "L"                              + "ittle";
                   str[2] = "Little";
    4th iteration: str[3] = str[3].charAt(0).toUpperCase() + str[3].slice(1);
                   str[3] = "tea".charAt(0).toUpperCase()  + "tea".slice(1);
                   str[3] = "T"                            + "ea";
                   str[3] = "Tea";
    5th iteration: str[4] = str[4].charAt(0).toUpperCase() + str[4].slice(1);
                   str[4] = "pot".charAt(0).toUpperCase() + "pot".slice(1);
                   str[4] = "P"                           + "ot";
                   str[4] = "Pot";                                                         
    End of the FOR Loop*/
  }
  // Step 4. Return the output
  return str.join(' '); // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') => "I'm A Little Tea Pot"
}

console.log(titleCase("I'm a little tea pot"));
titleCase("I'm a little tea pot");

// Title Case a Sentence With the map() Method

function title(str) {
  // Step 1. Lowercase the string
  str = str.toLowerCase() // str = "i'm a little tea pot";
  
  // Step 2. Split the string into an array of strings
    .split(' ') // str = ["i'm", "a", "little", "tea", "pot"];

  // Step 3. Map over the array
    .map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
      /* Map process
    1st word: "i'm"    => (word.charAt(0).toUpperCase() + word.slice(1));
                          "i'm".charAt(0).toUpperCase() + "i'm".slice(1);
                                "I"                     +     "'m";
                          return "I'm";
    2nd word: "a"      => (word.charAt(0).toUpperCase() + word.slice(1));
                          "a".charAt(0).toUpperCase()   + "".slice(1);
                                "A"                     +     "";
                          return "A";
    3rd word: "little" => (word.charAt(0).toUpperCase()    + word.slice(1));
                          "little".charAt(0).toUpperCase() + "little".slice(1);
                                "L"                        +     "ittle";
                          return "Little";
    4th word: "tea"    => (word.charAt(0).toUpperCase() + word.slice(1));
                          "tea".charAt(0).toUpperCase() + "tea".slice(1);
                                "T"                     +     "ea";
                          return "Tea";
    5th word: "pot"    => (word.charAt(0).toUpperCase() + word.slice(1));
                          "pot".charAt(0).toUpperCase() + "pot".slice(1);
                                "P"                     +     "ot";
                          return "Pot";                                                        
    End of the map() method */
    });
    // Step 4. Return the output
    return str.join(' '); // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') => "I'm A Little Tea Pot"
}

title("I'm a little tea pot");

// Title Case a Sentence With the map() and the replace() Methods

function titleCaseMethod(str) {
  // Step 1. Lowercase the string
  str = str.toLowerCase() // str = "i'm a little tea pot";
  
  // Step 2. Split the string into an array of strings
    .split(' ') // str = ["i'm", "a", "little", "tea", "pot"];

  // Step 3. Map over the array
    .map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
          /* Map process
    1st word: "i'm" => word.replace(word[0], word[0].toUpperCase());
                       "i'm".replace("i", "I");
                       return word => "I'm"
    2nd word: "a" => word.replace(word[0], word[0].toUpperCase());
                     "a".replace("a", "A");
                      return word => "A"
    3rd word: "little" => word.replace(word[0], word[0].toUpperCase());
                          "little".replace("l", "L");
                          return word => "Little"
    4th word: "tea" => word.replace(word[0], word[0].toUpperCase());
                       "tea".replace("t", "T");
                       return word => "Tea"
    5th word: "pot" => word.replace(word[0], word[0].toUpperCase());
                       "pot".replace("p", "P");
                       return word => "Pot"                                                        
    End of the map() method */
    });

    // Step 4. Return the output
    return str.join(' '); // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') => "I'm A Little Tea Pot"
}

console.log(titleCaseMethod("I'm a little tea pot"));
