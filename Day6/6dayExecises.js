//LOOPS

//Level 1
//1.Iterate 0 to 10 using for loop, do the same using while and do while loop
//for loop
function iterateNumbers (start, finish) {
  for (let i = start; i <= finish; i++) {
    console.log(i);
  }
}
iterateNumbers(0, 10);

//while
function iterateWithWhile(start, finish) {
  let i = start
  while (i <= finish) {
    console.log(i);
    i++;
  }
}
iterateWithWhile(0, 10);

// while loop
function iterateWithWhileLoop(start, finish) {
  let i = start
  do {
    console.log(i);
    i++;
  } while (i <= finish);
}
iterateWithWhileLoop(0, 10);

// let i = 0
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let i = 0
// do {
//   console.log(i);
//   i++;
// } while ( i <= 10);

// //2. Iterate 10 to 0 using for loop, do the same using while and do while loop
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// let i = 10
// while (i >= 0) {
//   console.log(i);
//   i--;
// }

// let i = 10
// do {
//   console.log(i);
//   i--;
// } while ( i >= 0);

// //3.Iterate 0 to n using for loop
// for(let n = 0; n <= 5; n++) {
//   console.log(n);
// }

// /*4. Write a loop that makes the following pattern using console.log():
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######
// */
// let n = 7;
// let stringPattern = '';
// for (let i = 1; i <= n; i++) {
//   for (let a = 0; a < i; a++) {
//     stringPattern += '#';
//   }
//   stringPattern += '\n';
// }
// console.log(stringPattern)

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
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} * ${i} = ${i * i}`)
// }

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
for (let i = 0; i <= 10; i++) {
  console.log(`${i}  ${i * i} ${i * i * i}`)
}