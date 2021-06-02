//LOOPS

//Level 1
//1.Iterate 0 to 10 using for loop, do the same using while and do while loop
//for loop
function iterateNumbers(start, finish) {
  for (let i = start; i <= finish; i++) {
    console.log(i);
  }
}
iterateNumbers(0, 10);

//while
function iterateWithWhile(start, finish) {
  let i = start;
  while (i <= finish) {
    console.log(i);
    i++;
  }
}
iterateWithWhile(0, 10);

// while loop
function iterateWithWhileLoop(start, finish) {
  let i = start;
  do {
    console.log(i);
    i++;
  } while (i <= finish);
}
iterateWithWhileLoop(0, 10);