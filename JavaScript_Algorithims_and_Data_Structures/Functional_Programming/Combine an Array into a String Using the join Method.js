function sentensify(str) {
  // Only change code below this line
  const split = str.split(/[-.,]+/);
  const join = split.join(" ");
  return join;

  // Only change code above this line
}

sentensify("May-the-force-be-with-you");
// sentensify("The.force.is.strong.with.this.one");
// sentensify("There,has,been,an,awakening");