const webTechs = require("./web_techs.js");
const countries = require("./countries.js");
const FIRST = 0;

// 30 Days Of JavaScript: Arrays 
//LEVEL 1

function createArray(numberOfElements) {
  return new Array(numberOfElements);
}

//1. Declare an empty array
const emptyArray = createArray(0);
console.log(emptyArray)

//2. Declare an array with more than 5 number of elements
function fillTheArray(number, arrayInput) {
  return arrayInput.fill(number);
}
const arrayWithMoreThanFiveNum = createArray(8);
const arrayOfNumbers = fillTheArray(6, arrayWithMoreThanFiveNum);
console.log(arrayOfNumbers);

//3.Find the length of your array
function findLengthArray(array) {
  return array.length;
}
const lengthArray = findLengthArray(arrayOfNumbers);
console.log(lengthArray);

//4. Get the first item, the middle item and the last item of the array
function getPositionItem(array, position) {
  if (position === 'first') {
    const firstArrayItem = array[0]
    return firstArrayItem
  }
  if (position === 'middle') {
    const isEvenArray = array.length % 2 === 0;
    if (isEvenArray) {
      const positionEven = array.length / 2;
      const firstElement = array[positionEven]
      const secondElement = array[positionEven - 1]
      const middleArrayElement = (firstElement + secondElement) / 2;
      const elementMiddlePosition = array[middleArrayElement];
      // it doesn't work yet
      return elementMiddlePosition
    } else {
      const positionOdd = Math.floor(array.length / 2);
      const middleArrayItem = array[positionOdd];
      return middleArrayItem;
    }
  }
  if (position === 'last') {
    const lastArrayItem = array[array.length - 1];
    return lastArrayItem
  }
}
const positionItem = getPositionItem(arrayOfNumbers, 'middle');
console.log(positionItem);
//it's not finished yet

/*5. Declare an array called mixedDataTypes, put different data types in the array and find the 
length of the array. The array size should be greater than 5 */
const mixedDataTypes = ['Luna', 1995, true, [1, 2, 3], '1000', 55];
const lengthArray = mixedDataTypes.length;
console.log(lengthArray);

// /*6.Declare an array variable name itCompanies and assign initial values Facebook, Google, 
// Microsoft, Apple, IBM, Oracle and Amazon */

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//7.Print the array using console.log()
console.log(itCompanies);

//8. Print the number of companies in the array
const numberOfCompanies = itCompanies.length;
console.log(numberOfCompanies);

//9.Print the first company, middle and last company
const firstElement = itCompanies[FIRST]
console.log(firstElement);
const middlePositionCompany = Math.floor(itCompanies.length / 2);
const middlePositionCompany = itCompanies[middlePositionCompany];
console.log(middlePositionCompany);
const lastPositionCompany = itCompanies.length - 1;
lastPositionCompany = itCompanies[lastPositionCompany];
console.log(lastPositionCompany);

//10.Print out each company
itCompanies.forEach(element => console.log(element));

//11. Change each company name to uppercase one by one and print them out
itCompanies.map(company => console.log(company.toUpperCase()));

// //12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies. 
function printArrayAsSentence (array, sentence) {
  const convertArrayToString = array.toString();
  const arraySentence = `${convertArrayToString} ${sentence}`;
  return arraySentence
}
const sentence = printArrayAsSentence(itCompanies, 'are big IT companies.');
console.log(sentence);

// /*13. Check if a certain company exists in the itCompanies array. 
// If it exist return the company else return a company is not found*/
function companyExistArray(array, company) {
  const companyExist = array.indexOf(company) === 0;
  if (companyExist) {
    return company;
  } else {
    return 'Company is not found';
  }
};
const company = companyExistArray(itCompanies, 'Facebook');
console.log(company);

// //14. Filter out companies which have more than one 'o' without the filter method
function filterCompaniesArray(array) {
  const moreThanOneLetter = [];
  array.forEach(element => {
    let hasMoreThanOneLetter = element.replace(/[^o]/g, "").length;
    if (hasMoreThanOneLetter <= 1) {
      moreThanOneLetter.push(element);
    }
  })
  return moreThanOneLetter;
};
const filter = filterCompaniesArray(itCompanies);
console.log(filter);

// //15. Sort the array using sort() method
function sortArray (arrayInput) {
  return arrayInput.sort();
}
const arraySorted = sortArray(itCompanies);
console.log(arraySorted);

// //LEVEL 2
/*1.Create a separate countries.js file and store the countries array in to this file,
 create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file*/

console.log(countries);
console.log(webTechs);

function convertStringToArray (string) {
  const words = string.replace(/[.,]/g, "").split(' ');
  console.log(words)
  const countWordsText = words.length;
  return countWordsText
}
const newArray = convertStringToArray(text);
console.log(newArray);


// /*4. In countries array check if 'Ethiopia' exists in the array if it exists print 
// 'ETHIOPIA'. If it does not exist add to the countries list.*/

function findCountry(array = [], country = '') {
  const hasCountry = array.indexOf(country) !== -1;
  if (hasCountry) {
    return country;
  } else {
    const mergedArrays = array.concat([country]);
    return mergedArrays;
  }
};
const country = findCountry(countries, 'Ethiopia');
console.log(country)

/*5.In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a
CSS preprocess'. If it does not exist add Sass to the array and print the array.*/
function findWebTechs(array, tech) {
  const hasTech = array.indexOf(tech) !== -1;
  if (hasTech) {
     return `${tech} is a CSS preprocess`;
  } else {
    return array.concat([tech]);
  }
};
const webTechtoFind = findWebTechs(webTechs, 'Sass');
console.log(webTechtoFind);

// //6.Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
function concatenateArrays (array1, array2) {
  return array1.concat(array2);
}
const fullStack = (concatenateArrays(frontEnd, backEnd))
console.log(fullStack);
