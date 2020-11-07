function chunkArrayInGroups(arr, size) {
  let group = [];
  let position = 0;

  while(position < arr.length){
    group.push(arr.slice(position, position +=size));
  }
  return group;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
