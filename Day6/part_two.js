// //2. Iterate 10 to 0 using for loop, do the same using while and do while loop
// for loop
function iterateToLowest(highest, lowest) {
  for (let i = highest; i >= lowest; i--) {
    console.log(i);
  }
}
iterateToLowest(10, 0);

// while
function iterateToLowestWhile(highest, lowest) {
  let i = highest;
  while (i >= lowest) {
    console.log(i);
    i--;
  }
}
iterateToLowestWhile(10, 0);

//while loop
function iterateToLowestWhileLoop(highest, lowest) {
  let i = highest;
  do {
    console.log(i);
    i--;
  } while (i >= lowest);
}
iterateToLowestWhileLoop(10, 0);
