//7. Use for loop to iterate from 0 to 100 and print only even numbers
function iterateEvenNumbers(start, finish) {
  for (let i = start; i <= finish; i++) {
    const isEven = i % 2 === 0;
    if (isEven) {
      console.log(i);
    }
  }
}
iterateEvenNumbers(0, 100);
