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
console.log(lastPositionNumber)
const calculateMiddlePositionNumber = Math.floor(numbersList.length / 2)
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
const numberCompanies = itCompanies.length
console.log(numberCompanies);

//9.Print the first company, middle and last company
console.log(itCompanies[FIRST]);
const calculateMiddlePositionCompany = Math.floor(itCompanies.length / 2)
const middlePositionCompany = itCompanies[calculateMiddlePositionCompany];
console.log(middlePositionCompany);
const lastPositionCompany = itCompanies.length - 1;
lastPositionCompany = itCompanies[lastPositionCompany];
console.log(lastPositionCompany);

//10.Print out each company
itCompanies.forEach(element => console.log(element));

//11. Change each company name to uppercase one by one and print them out
itCompanies.map(company => console.log(company.toUpperCase()));

//12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies. 
const convertArrayToString = itCompanies.toString()
const arraySentence = `${convertArrayToString} are big IT companies`;
console.log(arraySentence);

/*13. Check if a certain company exists in the itCompanies array. 
If it exist return the company else return a company is not found*/
const IT_EXIST = 0;
const companyExist = itCompanies.indexOf('Facebook');
if (companyExist === IT_EXIST) {
  console.log('This company does exist');
} else {
  console.log('Company is not found');
}

//14. Filter out companies which have more than one 'o' without the filter method
itCompanies.forEach(element => {
  const aCountArray = element.replace(/[^o]/g, "").length;
  if (aCountArray > 1) {
    console.log(element);
  }
});

//15. Sort the array using sort() method
console.log(itCompanies.sort());

//16. Reverse the array using reverse() method
const reversCompanies = itCompanies.reverse();
console.log(reversCompanies);

//17. Slice out the first 3 companies from the array
const sliceFirstPositionCompanies =itCompanies.slice(0, 3)
console.log(sliceFirstPositionCompanies);

//18. Slice out the last 3 companies from the array
const sliceLastPositionCompanies = itCompanies.slice(4)
console.log(sliceLastPositionCompanies);

//19. Slice out the middle IT company or companies from the array
const slicedMiddleCompanies = itCompanies.slice(3, 4) 
console.log(slicedMiddleCompanies);

const removeFirtsPositionIt = itCompanies.slice(0, 1);
console.log(removeFirtsPositionIt);

//21.Remove the middle IT company or companies from the array
const calculateMiddleItCompany = itCompanies.length / 2;
const middlePositionCompany = itCompanies.slice(calculateMiddleItCompany);
const firstPositionMiddleCompany = middlePositionCompany.slice(0,1);
console.log(firstPositionMiddleCompany);

//22.Remove the last IT company from the array
const removeLastPositionIt = itCompanies.slice(-1);
console.log(removeLastPositionIt);

//23.Remove all IT companies
const removeAllIt = itCompanies.splice();
console.log(removeAllIt);

//LEVEL 2
/*1.Create a separate countries.js file and store the countries array in to this file,
 create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file*/

console.log(countries);
console.log(webTechs);

//2. First remove all the punctuations and change the string to array and count the number of words in the array
const text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const words = text.replace(/[.,]/g, "").split(' ');
console.log(words);
const countWordsText = words.length
console.log(countWordsText);

//3.In the following shopping cart add, remove, edit items
let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
//add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat');
console.log(shoppingCart);
//add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar');
console.log(shoppingCart);
//remove 'Honey' if you are allergic to honey
shoppingCart.splice(4, 1);
console.log(shoppingCart);
//modify Tea to 'Green Tea'
shoppingCart[3] = 'Gren Tea';
console.log(shoppingCart);

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
}
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
}
findgWebTech(webTechs, 'Sass');

//6.Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

//LEVEL 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//1. The following is an array of 10 students ages:
//Sort the array and find the min and max age
const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);
const minAge = sortAges[FIRST];
let maxAge = sortAges.length - 1;
maxAge = sortAges[maxAge];
console.log(maxAge);

//Find the median age(one middle item or two middle items divided by two)
console.log(sortAges);
const halfAge = sortAges.length / 2;
const firstHalfArray = sortAges.splice(0, halfAge);
const secondHalf = sortAges.splice(-halfAge);
const lastIndexFirstHalfArray = firstHalfArray[firstHalfArray.length - 1];
const firstIndexSecondHalfArray = secondHalf[FIRST];
const medianAge = (lastIndexFirstHalfArray + firstIndexSecondHalfArray) / 2;
console.log(medianAge);

//Find the average age(all items divided by number of items)
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const reduceAgesArray = (accumulator, currentValue) => accumulator + currentValue;
const averageAge = ages.reduce(reduceAgesArray) / ages.length;
console.log(averageAge);
const roundAverage = Math.ceil(averageAge);
console.log(roundAverage);

//Find the range of the ages(max minus min)
const rangeAges = maxAge - minAge;
console.log(rangeAges);

//Compare the value of (min - average) and (max - average), use abs() method
const maxLessAverage = Math.abs(maxAge - roundAverage);
console.log(maxLessAverage);
const minLessAverage = Math.abs(minAge - roundAverage);
console.log(minLessAverage);
const comparision = maxLessAverage === minLessAverage;
console.log(comparision);

//2.Slice the first ten countries from the countries array
const firstTenCountries = countries.slice(0, 10)
console.log(firstTenCountries);

//3.Find the middle country(ies) in the countries array
const calculateMiddleCountry = Math.floor(countries.length / 2)
const middlePositionCountry = countries[calculateMiddleCountry];
console.log(middlePositionCountry);

/*Divide the countries array into two equal arrays if it is even. If countries array is not even , 
one more country for the first half.*/
const isOdd = (countries.length % 2) !== 0
if (isOdd) {
  const halfOddCountries = Math.ceil(countries.length / 2)
  const firstOddHalfCountries = countries.splice(0, halfOddCountries);
  const secondOddHalfCountries = countries.splice(-halfOddCountries);
} else {
  const halfCountries = countries.length / 2;
  const firstHalfCountries = countries.splice(0, halfCountries);
  const secondHalfCountries = countries.splice(-halfCountries);
}
