const countries = require("./countries.js");
//LEVEL 3
const FIRST = 0;
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//1. The following is an array of 10 students ages:
//Sort the array and find the min and max age
const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);
const firstPositionAge = sortAges[FIRST];
let lastAPositionAge = sortAges.length - 1;
lastAPositionAge = sortAges[lastAPositionAge];
console.log(lastAPositionAge);

//Find the median age(one middle item or two middle items divided by two)
console.log(sortAges);
const middlePositionAge = sortAges.length / 2;
const firstHalfArrayAge = sortAges.splice(0, middlePositionAge);
const secondHalf = sortAges.splice(-middlePositionAge);
const lastIndexFirstHalfArrayAge = firstHalfArrayAge[firstHalfArrayAge.length - 1];
const firstIndexSecondHalfArrayAge = secondHalf[FIRST];
const medianAge = (lastIndexFirstHalfArrayAge + firstIndexSecondHalfArrayAge) / 2;
console.log(medianAge);

//Find the average age(all items divided by number of items)
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

const sumElementsAgesArray = (accumulator, currentValue) => accumulator + currentValue;
const averageAge = ages.reduce(sumElementsAgesArray) / ages.length;
console.log(averageAge);
const roundAverage = Math.ceil(averageAge);
console.log(roundAverage);

//Find the range of the ages(max minus min)
const rangeAges = lastAPositionAge - firstPositionAge;
console.log(rangeAges);

//Compare the value of (min - average) and (max - average), use abs() method
const maxLessAverage = Math.abs(lastAPositionAge - roundAverage);
console.log(maxLessAverage);
const minLessAverage = Math.abs(firstPositionAge - roundAverage);
console.log(minLessAverage);
const comparision = maxLessAverage === minLessAverage;
console.log(comparision);

//2.Slice the first ten countries from the countries array
const firstTenCountries = countries.slice(0, 10);
console.log(firstTenCountries);

//3.Find the middle country(ies) in the countries array
const calculateMiddleCountry = Math.floor(countries.length / 2)
const middlePositionCountry = countries[calculateMiddleCountry];
console.log(middlePositionCountry);

/*Divide the countries array into two equal arrays if it is even. If countries array is not even , 
one more country for the first half.*/
const isOdd = (countries.length % 2) !== 0
const halfOddCountries = Math.ceil(countries.length / 2)
const firstOddHalfCountries = countries.splice(0, halfOddCountries);
const secondOddHalfCountries = countries.splice(-halfOddCountries);
if (isOdd) {
  console.log(firstOddHalfCountries, secondOddHalfCountries);
} else {
  console.log(firstOddHalfCountries, secondOddHalfCountries);
};
