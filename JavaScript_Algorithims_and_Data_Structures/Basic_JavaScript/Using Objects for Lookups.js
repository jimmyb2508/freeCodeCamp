// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
     const lookup = {
      alpha: "Adams",
      bravo: "Boston",
      charlie: "Chicago",
      delta: "Denver",
      echo: "Easy",
      foxtrot: "Frank"
     }
    result = lookup[val];
    return result;
  }

  // Only change code above this line


phoneticLookup("charlie");
