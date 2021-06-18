//9.Use for loop to iterate from 0 to 100 and print only prime numbers
function printPrimeNumbers() {
  function validateIfIsPrime(num) {
    let sumZero = 0;
    for (let i = num; i > 0; i--) {
      if (num % i === 0) {
        sumZero++;
      }
    }
    return sumZero === 2 && num > 1;
  }
  const [start, end] = [0, 100];
  for (let i = start; i < end; i++) {
    if (validateIfIsPrime(i)) {
      console.log(i);
    }
  }
}
printPrimeNumbers(0, 100);
