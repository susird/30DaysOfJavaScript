const webTechs = require("./web_techs.js");
const countries = require("./countries.js");
const FIRST = 0;

// 30 Days Of JavaScript: Arrays 
//LEVEL 1

//1. Declare an empty array
const emptyArray = Array();
//2. Declare an array with more than 5 number of elements
const numbersList = [5, 4, 8, 2, 9, 3, 7];

//3.Find the length of your array
console.log(numbersList.length);

//4. Get the first item, the middle item and the last item of the array
const firstArrayItem = numbersList[FIRST];
console.log(firstArrayItem);
let lastPositionNumber = numbersList.length - 1;
lastPositionNumber = numbersList[lastPositionNumber];
console.log(lastPositionNumber);
const calculateMiddlePositionNumber = Math.floor(numbersList.length / 2);
const middlePositionNumber = numbersList[calculateMiddlePositionNumber];
console.log(middlePositionNumber);

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

//12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies. 
const convertArrayToString = itCompanies.toString();
const arraySentence = `${convertArrayToString} are big IT companies`;
console.log(arraySentence);

/*13. Check if a certain company exists in the itCompanies array. 
If it exist return the company else return a company is not found*/
function companyExistArray(company) {
  const companyExist = itCompanies.indexOf(company) === 0;
  if (companyExist) {
    return 'This company does exist';
  } else {
    return 'Company is not found';
  }
};

console.log(companyExistArray('Facebook'));

//14. Filter out companies which have more than one 'o' without the filter method
function filterCompaniesArray() {
  const moreThanOneLetter = [];
  itCompanies.forEach(element => {
    let hasMoreThanOneLetter = element.replace(/[^o]/g, "").length;
    if (hasMoreThanOneLetter <= 1) {
      moreThanOneLetter.push(element);
    }
  })
  return moreThanOneLetter;
};

console.log(filterCompaniesArray());

//15. Sort the array using sort() method
const sortArrayCompanies = itCompanies.sort();
console.log(sortArrayCompanies);

//16. Reverse the array using reverse() method
const reverseCompanies = itCompanies.reverse();
console.log(reverseCompanies);

//LEVEL 2
/*1.Create a separate countries.js file and store the countries array in to this file,
 create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file*/

console.log(countries);
console.log(webTechs);

//2. First remove all the punctuations and change the string to array and count the number of words in the array
const text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const words = text.replace(/[.,]/g, "").split(' ');
console.log(words);
const countWordsText = words.length;
console.log(countWordsText);

/*4. In countries array check if 'Ethiopia' exists in the array if it exists print 
'ETHIOPIA'. If it does not exist add to the countries list.*/

function findCountry(countries = [], country = '') {
  const hasCountry = countries.indexOf(country) !== -1;
  if (hasCountry) {
    console.log(country);
  } else {
    const mergeArrays = countries.concat([country]);
    console.log(mergeArrays);
  }
};

findCountry(countries, 'Ethiopia');

/*5.In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a
CSS preprocess'. If it does not exist add Sass to the array and print the array.*/
function findgWebTech(webTech, tech) {
  const hasTech = webTech.indexOf(tech) !== -1;
  if (hasTech) {
    console.log(`${tech} is a CSS preprocess`);
  } else {
    const mergeTech = webTechs.concat([tech]);
    console.log(mergeTech);
  }
};

findgWebTech(webTechs, 'Sass');

//6.Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
