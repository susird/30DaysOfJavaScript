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
0
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
if (grades <= 49) {
  alert('Your grade is F');
} else if (grades <= 59){
  alert('Your grade is D');
} else if (grades <= 69) {
  alert('Your grade is C');
} else if (grades <= 89 ) {
  alert('Your grade is B');
} else if (grades <= 100) {
  alert('Your grade is A');
} else {
  alert('You don\'t have a grade');
}

/*2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer   */

const monthSeason = prompt('Enter the month:').toLocaleLowerCase()

if (monthSeason === 'september' || monthSeason === 'october' || monthSeason === 'november') {
  alert('The season is Autumn');
} else if (monthSeason === 'december' || monthSeason === 'january' || monthSeason === 'february') {
  alert('The season is Winter');
} else if (monthSeason === 'march' || monthSeason === 'april' || monthSeason === 'may') {
  lert('he season is Spring');
} else if (monthSeason === 'june' || monthSeason === 'july' || monthSeason === 'august') {
  alert('The season is Summer');
} else {
  alert(`${monthSeason} is not a season`);
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
const month = prompt('Enter the month:').toLocaleLowerCase()
if (month === 'november' || month === 'april' || month === 'june' || month === 'september') {
  alert(`${month} has 30 days`);
} else if (month === 'february') {
  alert(`${month} has 28 days `);
} else {
  alert(`${month} has 31 days `);
}

// 2. Write a program which tells the number of days in a month, now consider leap year.
const monthOfYear = prompt('Enter the month:').toLowerCase();
const year = Number(prompt('Enter the year:'));
const isLeapYear = (year % 4 === 0) && (year % 400 === 0 || year % 100 !== 0)

if (monthOfYear === 'november' || monthOfYear === 'april' || monthOfYear === 'june' || monthOfYear === 'september') {
  alert(`${monthOfYear} has 30 days `); 
} else if (monthOfYear === 'february') {
  if (isLeapYear) {
      alert(`${monthOfYear} has 29 days `);
    } else {
      alert(`${monthOfYear} has 28 days `);
    }
} else {
  alert(`${monthOfYear} has 31 days `);
}




