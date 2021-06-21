//10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
function iterateToSum(start, end) {
  let sumNums = 0;
  for (let i = start; i <= end; i++) {
    sumNums += i;
  }
  return `The sum of all numbers from ${start} to ${end} is ${sumNums}.`;
}
const sumLoopNumbers = iterateToSum(0, 100);
console.log(sumLoopNumbers);
