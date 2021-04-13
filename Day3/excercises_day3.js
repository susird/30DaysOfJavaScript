// Level 1
/*1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the
 typeof operator to check different data types.*/
let firstName = 'Susana'
let lastName = 'Ruiz'
let country = 'Colombia'
let city = 'Medellín'
let age = 26
let isMarried = false
let now = new Date()
let year = now.getFullYear()

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
console.log(parseInt('9.8') == 10)

//4. Boolean value is either true or false.
//i. Write three JavaScript statement which provide truthy value.
console.log(3 === 3)
console.log('potato' != 'minino')
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
  let base = prompt('Insert base here',);
  let height = prompt('Insert height gere',);
  let area = ((0.5) * base * height);
  alert(`The area of the triangle is  ${area}`)
}
//console.log(triangleArea())

/*2.Write a script that prompt the user to enter side a, side b, and side c of the triangle  
and calculate the perimeter of triangle (perimeter = a + b + c)*/
function perimeterArea() {
  let sideA = prompt('Insert base here side a',);
  let sideB = prompt('Insert base here side b',);
  let sideC = prompt('Insert base here side c',);
  let perimeter = (sideA + sideB + sideC);
  alert(`The perimeter of the triangle is  ${perimeter}`)
}
//console.log(perimeterArea())

/*Get length(largo) and width using prompt and calculate an area of rectangle 
(area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width)) */
function rectangle() {
  let length = prompt('Insert length here',);
  let width = prompt('Insert width here',);
  let recArea = (length * width);
  let recperimeter = ((2) * (length + width));
  alert(`The area of the rectangle is  ${recArea}`);
  alert(`The perimeter of the rectangle is ${recperimeter}`)
}
//console.log(rectangle())

/*Get radius using prompt and calculate the area of a circle (area = pi x r x r) 
and circumference of a circle(c = 2 x pi x r) where pi = 3.14.*/

function circleArea() {
  let circRadius = prompt('Insert radius here',);
  let circArea = (Math.PI * circRadius * circRadius);
  let circumf = ((2) * Math.PI * circRadius);
  alert(`The area of the circle is  ${circArea}`);
  alert(`The circumference of the circle is  ${circumf}`)
}
//console.log(circleArea())

//5.Calculate the slope, x-intercept and y-intercept of y = 2x -2
function slopeCalculate() {
  let x = prompt('Insert the intercept here',);
  let y = ((2 * x) - 2);
  alert(`The slope is  ${y}/${x}`)
}
//console.log(slopeCalculate())

//6.Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
function calcSlope(coordinates) {
  const { x1, x2, y1, y2 } = coordinates;
  return (y2 - y1) / (x2 - x1);
}
//console.log(calcSlope({x1: 2, y1: 2, x2: 6, y2: 10}))

//7.Compare the slope of above two questions.
//console.log(slopeCalculate >= calcSlope)



//8. Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0
function calculateY() {
  let range = [-8, -7, -6, -5, -6, -5, -4, -3, -2, -1, 0];
  return range.map(x => Math.pow(x, 2) + 6 * x + 9)
}
console.log(calculateY())

//9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
function pay() {
  let hours = prompt('Insert hours here',);
  let rate = prompt(`Insert rate per hour here`,);
  let payment = (hours * rate);
  alert(`Your weekly earning is ${payment}`)
}
//console.log(pay())

//10.If the length of your name is greater than 7 say, your name is long else say your name is short.
function sizeLength() {
  let name = prompt('Insert your name here',);
  if (name.length > 7) {
    alert(`Your name is long`);
  } else {
    alert(`Your name is short`);
  }
}
//console.log(sizeLength())

//11. Compare your first name length and your family name length and you should get this output.
function compareLength() {
  let yourName = prompt('Insert your name here',);
  let familyName = prompt('Insert your family name here',);
  if (yourName.length > familyName.length) {
    alert(`Your firs name, ${yourName} is longer than your family name, ${familyName}`);
  } else {
    alert(`Your family name, ${familyName} is longer than your firs name, ${yourName}`);
  }
}
//console.log(compareLength())

//12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
function compareAges() {
  let myAge = 250;
  let yourAge = prompt('Insert your age here',);
  if (myAge > yourAge) {
    alert(`I am ${myAge - yourAge} years older than you.`);
  }
}
//console.log(compareAges())

/*13.Using prompt get the year the user was born and if the user is 18 or above allow
the user to drive if not tell the user to wait a certain amount of years.*/
function driveAge() {
  let birthYear = prompt('Insert your birth year here',);
  let today = 2021;
  let ofAge = 2003;
  let yearsOfAge = birthYear - ofAge;
  let age = today - birthYear;
  if (birthYear < 18) {
    alert(`You will be allowed to drive after ${yearsOfAge} years`);
  } else {
    alert(`You are ${age} old enough to drive`);
  }
}
//console.log(driveAge())

/*14.Write a script that prompt the user to enter number of years. Calculate the number 
of seconds a person can live. Assume some one lives just hundred years*/
function secondsLive() {
  let birthYear = prompt('Enter number of yours you live',);
  let seccondsYear = 31536000
  let calculate = birthYear * seccondsYear
  alert(`You lived ${calculate} seconds.`);
}
//console.log(secondsLive())

//15. Create a human readable time format using the Date time object
//. i 
let todayYear = now.getFullYear()
let month = now.getMonth() + 1
let day = now.getDay()
let hours = now.getHours()
let minutes = now.getMinutes()
console.log(`${todayYear}-${month}-${day} ${hours}:${minutes}`)
//ii. 
console.log(`${day}-${month}-${todayYear} ${hours}:${minutes}`)
//iii.
console.log(`${day}/${month}/${todayYear} ${hours}:${minutes}`)

let dateYear = now.getFullYear()
let dateMonth = now.getMonth() + 1
let dateDay = now.getDay()

function twoDigitsHour() {
  let dateHours = now.getHours()
  if (dateHours < 10) {
    return hour = "0" + dateHours
  } else {
    return dateHours
  }
}
function twoDigitsMin() {
  let dateMinutes = now.getMinutes()
  if (dateMinutes < 10) {
    return min = "0" + dateMinutes
  } else {
    return dateMinutes
  }
}
console.log(`${dateYear}-${dateMonth}-${dateDay}` + " " + twoDigitsHour() + ":" + twoDigitsMin())