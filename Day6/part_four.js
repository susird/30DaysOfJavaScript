/*4. Write a loop that makes the following pattern using console.log():
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/
function makePattern(start, finish, simbol) {
  let lastNumber = finish;
  let stringPattern = '';
  for (let i = start; i <= lastNumber; i++) {
    for (let a = 0; a < i; a++) {
      stringPattern += simbol;
    }
    stringPattern += '\n';
  }
  return stringPattern;
}

const pattern = makePattern(1, 7, '#');
console.log(pattern);
