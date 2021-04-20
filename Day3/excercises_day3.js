// Level 1
/*1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the
 typeof operator to check different data types.*/
const firstName = 'Susana'
const lastName = 'Ruiz'
const country = 'Colombia'
const city = 'Medellín'
const age = 26
const isMarried = false
const now = new Date()
const year = now.getFullYear()

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

//2. Check if type of '10' is equal to 10
console.log('10' === 10)

//3. Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10)

//4. Boolean value is either true or false.
//i. Write three JavaScript statement which provide truthy value.
console.log(3 === 3)
console.log('potato' !== 'minino')
console.log(100 < 1000)
//ii.Write three JavaScript statement which provide falsy value.
console.log('potato' === 'minino')
console.log(parseInt('9.8') === 9.8)
console.log('Luna' >= 'Matilda')

/* 5.Figure out the result of the following comparison expression first 
without using console.log(). After you decide the result confirm it using console.log()*/
4 > 3 //true
4 >= 3 // ture
4 < 3 //false
4 <= 3 //false
4 == 4 //true
4 === 4 //true
4 != 4 //false
4 !== 4 //false
4 != '4'// false
4 == '4' //True
4 === '4' //false
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
//Find the length of python and jargon and make a falsy comparison statement.
console.log('phyton'.length != 'jargon'.length)

/* 6.Figure out the result of the following expressions first without using console.log(). 
After you decide the result confirm it by using console.log()*/
4 > 3 && 10 < 12 //true && true -> true
4 > 3 && 10 > 12 //true && false -> false
4 > 3 || 10 < 12 //true || true -> true
4 > 3 || 10 > 12 // true || false -> true
!(4 > 3) // false
!(4 < 3) // false
!(false) // true
!(4 > 3 && 10 < 12) //false
!(4 > 3 && 10 > 12) // true
!(4 === '4') //true

//7.Use the Date object to do the following activities
//What is the year today?
console.log(now.getFullYear())
//What is the month today as a number?
console.log(now.getMonth())
//What is the date today?
console.log(now.getDate())
//What is the day today as a number?
console.log(now.getDay())
//What is the hours now?
console.log(now.getHours())
//What is the minutes now?
console.log(now.getMinutes())
//Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime())

//Level 2
/*1.Write a script that prompt the user to enter base and height of the triangle
 and calculate an area of a triangle (area = 0.5 x b x h).*/
function triangleArea() {
  const base = prompt('Insert base here');
  const height = prompt('Insert height gere');
  const area = ((0.5) * base * height);
  alert(`The area of the triangle is  ${area}`)
}
triangleArea()

/*2.Write a script that prompt the user to enter side a, side b, and side c of the triangle  
and calculate the perimeter of triangle (perimeter = a + b + c)*/
function perimeterArea() {
  const sideA = prompt('Insert base here side a');
  const sideB = prompt('Insert base here side b');
  const sideC = prompt('Insert base here side c');
  const perimeter = (sideA + sideB + sideC);
  alert(`The perimeter of the triangle is  ${perimeter}`)
}
perimeterArea()

/*Get length and width using prompt and calculate an area of rectangle 
(area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width)) */
function rectangle() {
  const length = prompt('Insert length here');
  const width = prompt('Insert width here');
  const rectArea = (length * width);
  const rectperimeter = ((2) * (length + width));
  alert(`The area of the rectangle is  ${rectArea}`);
  alert(`The perimeter of the rectangle is ${rectperimeter}`)
}
rectangle()

/*Get radius using prompt and calculate the area of a circle (area = pi x r x r) 
and circumference of a circle(c = 2 x pi x r) where pi = 3.14.*/

function circleArea() {
  const radius = prompt('Insert radius here');
  const circleArea = (Math.PI * radius * radius);
  const circum = ((2) * Math.PI * radius);
  alert(`The area of the circle is  ${circleArea}`);
  alert(`The circumference of the circle is  ${circum}`)
}
circleArea()

//5.Calculate the slope, x-intercept and y-intercept of y = 2x -2
function slopeCalculate() {
  let x = prompt('Insert the intercept here');
  let y = ((2 * x) - 2);
  alert(`The slope is  ${y}/${x}`)
}
slopeCalculate()

//6.Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
function calcSlope(coordinates) {
  const { x1, x2, y1, y2 } = coordinates;
  return (y2 - y1) / (x2 - x1);
}
calcSlope({x1: 2, y1: 2, x2: 6, y2: 10})

//7.Compare the slope of above two questions.
const compareSlope = slopeCalculate >= calcSlope

//8. Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0
function calculateY() {
  const range = [-8, -7, -6, -5, -6, -5, -4, -3, -2, -1, 0];
  return range.map(x => Math.pow(x, 2) + 6 * x + 9)
}
calculateY()

//9. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
function pay() {
  const hours = prompt('Insert hours here');
  const rate = prompt('Insert rate per hour here');
  const payment = (hours * rate);
  alert(`Your weekly earning is ${payment}`)
}
pay()

//10.If the length of your name is greater than 7 say, your name is long else say your name is short.
function sizeLength() {
  const name = prompt('Insert your name here');
  if (name.length > 7) {
    alert('Your name is long');
  } else {
    alert('Your name is short');
  }
}
sizeLength()

//11. Compare your first name length and your family name length and you should get this output.
function compareLength() {
  const yourName = prompt('Insert your name here');
  const familyName = prompt('Insert your family name here');
  if (yourName.length >= familyName.length) {
    alert(`Your firs name, ${yourName} is longer than your family name, ${familyName}`);
  } else {
    alert(`Your family name, ${familyName} is longer than your firs name, ${yourName}`);
  }
}
compareLength()

//12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
function compareAges() {
  const myAge = 250;
  const yourAge = prompt('Insert your age here');
  if (myAge > yourAge) {
    alert(`I am ${myAge - yourAge} years older than you.`);
  }
}
compareAges()

/*13.Using prompt get the year the user was born and if the user is 18 or above allow
the user to drive if not tell the user to wait a certain amount of years.*/
function driveAge() {
  const birthYear = prompt('Insert your birth year here');
  const today = 2021;
  const ofAge = 2003;
  const yearsOfAge = birthYear - ofAge;
  const age = today - birthYear;
  if (birthYear < 18) {
    alert(`You will be allowed to drive after ${yearsOfAge} years`);
  } else {
    alert(`You are ${age} old enough to drive`);
  }
}
driveAge()

/*14.Write a script that prompt the user to enter number of years. Calculate the number 
of seconds a person can live. Assume some one lives just hundred years*/
function secondsLive() {
  const age = prompt('Enter your age');
  const seccondsYear = 31536000;
  const calculate = age * seccondsYear;
  alert(`You lived ${calculate} seconds.`);
}
secondsLive()

//15. Create a human readable time format using the Date time object
//. i 
const todayYear = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDay();
const hours = now.getHours();
const minutes = now.getMinutes();
console.log(`${todayYear}-${month}-${day} ${hours}:${minutes}`);
//ii. 
console.log(`${day}-${month}-${todayYear} ${hours}:${minutes}`);
//iii.
console.log(`${day}/${month}/${todayYear} ${hours}:${minutes}`);

const dateYear = now.getFullYear();
const dateMonth = now.getMonth() + 1;
const dateDay = now.getDay();

//LEVEL 3
/*Create a human readable time format using the Date time object. The hour and the minute should
 be all the time two digits(7 hours should be 07 and 5 minutes should be 05 ) */
 function twoDigitsHour() {
  const formatTwoDigits = (numberToFormat) => numberToFormat < 10 ? `0${numberToFormat}` : String(numberToFormat)
  const hours = now.getHours() ;
  const minutes = now.getMinutes();
  return ` ${formatTwoDigits(hours)}:${formatTwoDigits(minutes)}`
}
console.log(`${dateYear}-${dateMonth}-${dateDay}` + twoDigitsHour())
