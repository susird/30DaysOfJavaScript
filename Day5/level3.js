const countries = require("./countries.js");
//LEVEL 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//1. The following is an array of 10 students ages:
//Sort the array and find the min and max age
function sortToFindPositions(array, position) {
  const sortArray = array.sort((a, b) => a - b);
  if (position === 'min') {
    const firstPositionArray = sortArray[0];
    return firstPositionArray;
  }
  if (position === 'max') {
    let lastAPositionArray = sortArray[sortArray.length - 1];
    return lastAPositionArray;
  }
}
//first position or min age array
const firstPosition = sortToFindPositions(ages, 'min');
console.log(firstPosition);
//last position or max age array
const lastPosition = sortToFindPositions(ages, 'max');
console.log(lastPosition);

//Find the median age(one middle item or two middle items divided by two)
function findMiddlePosition(array) {
  const isEvenArray = array.length % 2 === 0;
  if (isEvenArray) {
    const positionEven = array.length / 2;
    const firstElement = array[positionEven];
    const secondElement = array[positionEven - 1];
    const middleArrayElement = (firstElement + secondElement) / 2;
    return middleArrayElement;
  } else {
    const positionOdd = Math.floor(array.length / 2);
    const middleArrayItem = array[positionOdd];
    return middleArrayItem;
  }
}
const middlePositionArray = findMiddlePosition(ages);
console.log(middlePositionArray);

//Find the average age(all items divided by number of items)
function findAverage(array) {
  const sumElementsAgesArray = (accumulator, currentValue) => accumulator + currentValue;
  const averageAge = array.reduce(sumElementsAgesArray) / array.length;
  return averageAge;
}
const average = findAverage(ages);
console.log(average);

//Find the range of the ages(max minus min)
function findRange(array) {
  const sortArray = array.sort((a, b) => a - b);
  const firstPositionArray = sortArray[0];
  const lastAPositionArray = sortArray[sortArray.length - 1];
  const rangeArray = lastAPositionArray - firstPositionArray;
  return rangeArray;
}
const range = findRange(ages);
console.log(range);

//Compare the value of (min - average) and (max - average), use abs() method
function compareValuesArray(array) {
  const sumElementsAgesArray = (accumulator, currentValue) => accumulator + currentValue;
  const averageArray = array.reduce(sumElementsAgesArray) / array.length;
  const sortArray = array.sort((a, b) => a - b);
  const firstPositionArray = sortArray[0];
  const lastAPositionArray = sortArray[sortArray.length - 1];
  const maxLessAverage = Math.abs(lastAPositionArray - averageArray);
  const minLessAverage = Math.abs(firstPositionArray - averageArray);
  return maxLessAverage === minLessAverage;
}

const comparitionValues = compareValuesArray(ages);
console.log(comparitionValues);
// is not finish yet :)

function slicePositionElements(arrayInput, position) {
  if (position === 'first teen') {
    const sliceFirstPositionArray = arrayInput.slice(0, 10);
    return sliceFirstPositionArray;
  }
  if (position === 'middle') {
    const isEvenArray = arrayInput.length % 2 === 0;
    if (isEvenArray) {
      const middlePositionElementEven = Math.ceil(arrayInput.length / 3);
      const sliceMiddlePositionElementEven = arrayInput.slice(middlePositionElementEven, middlePositionElementEven + 2);
      return sliceMiddlePositionElementEven;
    } else {
      const middlePositionElement = Math.floor(arrayInput.length / 2);
      const sliceMiddlePositionElementOdd = arrayInput.slice(middlePositionElement, middlePositionElement + 1);
      return sliceMiddlePositionElementOdd;
    }
  }
  if (position === 'last teen') {
    const sliceLastTreePositionArray = arrayInput.slice(arrayInput.length - 10);
    return sliceLastTreePositionArray;
  }
}

//2.Slice the first ten countries from the countries array
const firstTreePositionArray = slicePositionElements(countries, 'first teen');
console.log(firstTreePositionArray);

//3.Find the middle country(ies) in the countries array
const middlePositionArray = slicePositionElements(countries, 'middle');
console.log(middlePositionArray);

/*Divide the countries array into two equal arrays if it is even. If countries array is not even , 
one more country for the first half.*/
function divideArray(arrayInput) {
  const isOdd = arrayInput.length % 2 !== 0;
  const halfOddCountries = Math.ceil(countries.length / 2);
  const firstHalfCountries = arrayInput.splice(0, halfOddCountries);
  const secondHalfCountries = arrayInput.splice(-halfOddCountries);
  if (isOdd) {
    console.log(firstHalfCountries, secondHalfCountries);
  } else {
    console.log(firstHalfCountries, secondHalfCountries);
  };
}
divideArray(countries);
