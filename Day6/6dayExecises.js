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

// //3.Iterate 0 to n using for loop
function iterateToN(start, nNum) {
  for (let i = start; i <= nNum; i++) {
    console.log(i);
  }
}
iterateToN(0, 30);

// /*4. Write a loop that makes the following pattern using console.log():
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######
// */
function makePattern(start, finish, simbol) {
  let lastNumber = finish;
  let stringPattern = '';
  for (let i = start; i <= lastNumber; i++) {
    for (let a = 0; a < i; a++) {
      stringPattern += simbol;
    }
    stringPattern += '\n';
  }
  console.log(stringPattern);
}
makePattern(1, 7, '#');

// /*5.Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
// */
function printMultiplication (start, end) {
  for (let i = start; i <= end; i++) {
    console.log(`${i} * ${i} = ${i * i}`);
  }
}
printMultiplication(0, 10);

/*6. Using loop print the following pattern
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
*/
function printMultiplication (start, end) {
  for (let i = start; i <= end; i++) {
    console.log(`${i}  ${i * i}  ${i * i * i}`);
  }
}
printMultiplication(0, 10);

//7. Use for loop to iterate from 0 to 100 and print only even numbers
function iterateEvenNumbers(start, finish) {
  for (let i = start; i <= finish; i++) {
    const isEven = i % 2 === 0
    if (isEven)
      console.log(i)
  }
}
iterateEvenNumbers(0, 100)

//8.Use for loop to iterate from 0 to 100 and print only odd numbers
function iterateOddNumbers(start, finish) {
  for (let i = start; i <= finish; i++) {
    const isOdd = i % 2 !== 0
    if (isOdd)
      console.log(i)
  }
}
iterateOddNumbers(0, 100)

//9.Use for loop to iterate from 0 to 100 and print only prime numbers
function iteratePrimeNumbers() {
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
iteratePrimeNumbers(0, 100);

//10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
function iterateToSum () {
  const [start, end] = [0, 100]
  let sumNums = 0
  for (let i = start; i <= end; i++) {
    sumNums += i
  }
  return `The sum of all numbers from ${start} to ${end} is ${sumNums}.`
}
const sumLoopNumbers = iterateToSum();
console.log(sumLoopNumbers);

//11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.