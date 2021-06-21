//11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
function iterateOddNumbers(start, end) {
  let oddCounter = 0;
  let evenCounter = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      oddCounter += i;
    }
    if (i % 2 === 0) {
      evenCounter += i;
    }
  }
  return `The sum of all evens from ${start} to ${end} is ${evenCounter}. And the sum of all odds from ${start} to ${end} is ${oddCounter}.`;
}
const sumingOddsAndEvens = iterateOddNumbers(0, 100);
console.log(sumingOddsAndEvens);
