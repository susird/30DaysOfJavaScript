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
  let recperimeter = ((2) * (length + width))
  alert(`The area of the rectangle is  ${recArea}`)
  alert(`The perimeter of the rectangle is ${recperimeter}`)
}
//console.log(rectangle())

/*Get radius using prompt and calculate the area of a circle (area = pi x r x r) 
and circumference of a circle(c = 2 x pi x r) where pi = 3.14.*/

function circleArea() {
  let circRadius = prompt('Insert radius here',);
  let circArea = (Math.PI * circRadius * circRadius);
  let circumf = ((2) * Math.PI * circRadius);
  alert(`The area of the circle is  ${circArea}`)
  alert(`The circumference of the circle is  ${circumf}`)
}
//console.log(circleArea())

//5.Calculate the slope, x-intercept and y-intercept of y = 2x -2
function slopeCalculate() {
  let x= prompt('Insert the intercept here', );
  let y = ((2 * x) - 2)
  alert(`The slope is  ${y}/${x}`)
}
//console.log(slopeCalculate())

//6.Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
function calcSlope(coordinates) {
  const {x1,x2,y1,y2} = coordinates;
  return (y2 - y1) / (x2 - x1);
}
console.log(calcSlope({x1: 2, y1: 2, x2: 6, y2: 10}))

//7.Compare the slope of above two questions.
console.log(slopeCalculate >= calcSlope)
