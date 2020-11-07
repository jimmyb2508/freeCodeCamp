function Bird() {
  let weight = 15;

  this.getWeight = function() {
    return weight;
  }
}

let pigeon = new Bird();
pigeon.getWeight();
