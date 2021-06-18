//8.Use for loop to iterate from 0 to 100 and print only odd numbers
function printOddNumbers(start, finish) {
  for (let i = start; i <= finish; i++) {
    const isOdd = i % 2 !== 0;
    if (isOdd)
      console.log(i);
  }
}
printOddNumbers(0, 100);
