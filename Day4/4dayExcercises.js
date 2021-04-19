// LEVEL1
/*1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old
enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.*/
function ageUser() {
  const oldUser = prompt('Enter your age:');
  const ofAge = 18;
  const underAge = (18 - oldUser);
  if (oldUser >= ofAge) {
    alert(`You are old enough to drive.`);
  } else {
    alert(`You are left with ${underAge} years to drive.`)
  }
}
console.log(ageUser())

/*2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console
 stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.*/
function compareAges() {
  const myAge = 26;
  const yourAge = prompt('Enter your age:');
  const youOlderThan = yourAge - myAge;
  const meOlderThan = myAge - yourAge;
  if (yourAge > myAge) {
    alert(`You are ${youOlderThan} years older than me.`);
  } else {
    alert(`I'm ${meOlderThan} years older than you.`)
  }
}
console.log(compareAges())

//3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
function greaterThan() {
  const a = prompt('Enter number a');
  const b = prompt('Enter number b');
  if (a > b) {
    alert(`${a} is greater than ${b}`);
  } else {
    alert(`${b} is greater than ${a}`);
  }
}
console.log(greaterThan())

// second way
const c = prompt('Enter number c')
const d = prompt('Enter number d')
const compare = c > d ? alert(`${c} is greater than ${d}`) : alert(`${d} is greater than ${c}`)
console.log(compare)


//4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
function EvenNumber() {
  const number = prompt('Enter a number:');
  if (number % 2 == 0) {
    return alert(`${number} is an even number`);
  } else {
    return alert(`${number} is an odd number.`)
  }
}
console.log(EvenNumber())

// LEVEL 2

/*1. Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */

const grades = prompt('Enter your score:');
switch (true) {
  case grades <= 49:
    //alert(`Your grade is F'`);
    break;
  case grades <= 59:
    alert(`Your grade is D'`);
    break;
  case grades <= 69:
    alert(`Your grade is C'`);
    break;
  case grades <= 89:
    alert(`Your grade is B'`);
    break;
  default:
    alert(`Your grade is A'`);
}

/*2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer   */

const monthSeason = prompt('Enter the month:')
switch (true) {
  case monthSeason === 'September':
  case monthSeason === '9':
  case monthSeason === 'October':
  case monthSeason === '10':
  case monthSeason === 'November':
  case monthSeason === '11':
    alert(`The season is Autumn`);
    break;
  case monthSeason === 'December':
  case monthSeason === '12':
  case monthSeason === 'January':
  case monthSeason === '1':
  case monthSeason === 'February':
  case monthSeason === '2':
    alert(`The season is Winter`);
    break;
  case monthSeason === 'March':
  case monthSeason === '3':
  case monthSeason === 'April':
  case monthSeason === '4':
  case monthSeason === 'May':
  case monthSeason === '5':
    alert(`The season is Spring`);
    break;
  case monthSeason === 'June':
  case monthSeason === '6':
  case monthSeason === 'July':
  case monthSeason === '7':
  case monthSeason === 'August':
  case monthSeason === '8':
    alert(`The season is Summer`);
    break;
}

//3.Check if a day is weekend day or a working day. Your script will take day as an input.
function typeOfDay() {
  const day = prompt('What is the day today?').toLowerCase();
  const isWeekend = day === 'sunday' || day === 'saturday'
  console.log(isWeekend)
  if (isWeekend) {
    alert(`${day} is a weekend`);
  } else {
    alert(`${day} is a working day.`);
  }
}
typeOfDay()

//LEVEL 3
//1. Write a program which tells the number of days in a month.
const month = prompt('Enter the month:')
switch (true) {
  case month === 'november':
  case month === 'april':
  case month === 'june':
  case month === 'september':
    alert(`${month} has 30 days `);
    break;
  case month === 'february':
    break;
  default:
    alert(`${month} has 31 days `);
}

// 2. Write a program which tells the number of days in a month, now consider leap year.
const monthOfYear = prompt('Enter the month:').toLowerCase();
const year = Number(prompt('Enter the year:'));
const isLeapYear = (year % 4 === 0) && (year % 400 === 0 || year % 100 !== 0)
switch (true) {
  case monthOfYear === 'november':
  case monthOfYear === 'april':
  case monthOfYear === 'june':
  case monthOfYear === 'september':
    alert(`${monthOfYear} has 30 days `);
    break;
  case monthOfYear === 'february':
    if (isLeapYear) {
      alert(`${monthOfYear} has 29 days `);
    } else {
      alert(`${monthOfYear} has 28 days `);
    }
    break;
  default:
    alert(`${monthOfYear} has 31 days `);
}




