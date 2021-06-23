//12.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
function printSumEvensAndOdds() {
  const [start, end] = [0, 100];
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
  return [oddCounter, evenCounter];
}
const sumingOddsAndEvensIntoArray = printSumEvensAndOdds();
console.log(sumingOddsAndEvensIntoArray);
