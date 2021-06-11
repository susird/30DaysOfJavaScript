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
function printMultiplication(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(`${i}  ${i * i}  ${i * i * i}`);
  }
}
printMultiplication(0, 10);
