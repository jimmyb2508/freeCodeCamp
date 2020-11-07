function mutation(arr) {
  let bool;
  let wordOne = arr[0].toLowerCase();
  let wordTwo = arr[1].toLowerCase().split('');
  console.log(wordTwo);

  for (let i = 0; i < wordTwo.length; i++) {
    if (wordOne.indexOf(wordTwo[i]) == -1) {
      bool = false;
      return bool;
    } else {
      bool = true;
    }
  }
  return bool;
}

mutation(["hello", "hey"]);
