const webTechs = require("./web_techs.js");
const countries = require("./countries.js");

// // 30 Days Of JavaScript: Arrays 
// //LEVEL 1

// //1. Declare an empty array
// const emptyArray = Array();
// //2. Declare an array with more than 5 number of elements
// const numbersList = [5, 4, 8, 2, 9, 3, 7];

// //3.Find the length of your array
// console.log(numbersList.length);

// //4. Get the first item, the middle item and the last item of the array
// const FIRST = 0
// console.log(numbersList[FIRST]);
// let lastNumber = numbersList.length - 1;
// lastNumber = numbersList[lastNumber];
// console.log(lastNumber)
// const middleNumber = numbersList[Math.floor(numbersList.length / 2)];
// console.log(middleNumber)

// /*5. Declare an array called mixedDataTypes, put different data types in the array and find the 
// length of the array. The array size should be greater than 5 */
// const mixedDataTypes = ['Luna', 1995, true, [1, 2, 3], '1000', 55];
// console.log(mixedDataTypes.length);

// /*6.Declare an array variable name itCompanies and assign initial values Facebook, Google, 
// Microsoft, Apple, IBM, Oracle and Amazon */

// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// //7.Print the array using console.log()
// console.log(itCompanies);

// //8. Print the number of companies in the array
// console.log(itCompanies.length);

// //9.Print the first company, middle and last company
// console.log(itCompanies[FIRST]);
// const middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
// console.log(middleCompany)
// let lastCompany = itCompanies.length - 1;
// lastCompany = itCompanies[lastCompany];
// console.log(lastCompany)

// //10.Print out each company
// itCompanies.forEach(element => console.log(element))

// //11. Change each company name to uppercase one by one and print them out
// itCompanies.map(function (x) { return console.log(x.toUpperCase()); })

// //12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies. 
// console.log(itCompanies.toString() + ' are big IT companies')

// /*13. Check if a certain company exists in the itCompanies array. 
// If it exist return the company else return a company is not found*/
// const IT_EXIST = 0;
// const companyExist = itCompanies.indexOf('Facebook')
// if (companyExist === IT_EXIST) {
//   console.log('This company does exist')
// } else {
//   console.log('Company is not found')
// }

// //14. Filter out companies which have more than one 'o' without the filter method
// itCompanies.forEach(element => {
//   const aCountArray = element.replace(/[^o]/g, "").length;
//   if (aCountArray > 1) {
//     console.log(element)
//   }
// });

// //15. Sort the array using sort() method
// console.log(itCompanies.sort())

// //16. Reverse the array using reverse() method
// console.log(itCompanies.reverse())

// //17. Slice out the first 3 companies from the array
// console.log(itCompanies.slice(0, 3))

// //18. Slice out the last 3 companies from the array
// console.log(itCompanies.slice(4))

// //19. Slice out the middle IT company or companies from the array
// console.log(itCompanies.slice(3, 4))

// //20.Remove the first IT company from the array
// const facebookleIndex = itCompanies.indexOf('Facebook');
// console.log(itCompanies.splice(facebookleIndex, 1));

// //21.Remove the middle IT company or companies from the array
// const appleIndex = itCompanies.indexOf('Apple');
// console.log(itCompanies.splice(appleIndex, 1));

// //22.Remove the last IT company from the array
// const amazonIndex = itCompanies.indexOf('Amazon');
// console.log(itCompanies.splice(amazonIndex, 1));

// //23.Remove all IT companies
// console.log(itCompanies.splice())

// //LEVEL 2
// /*1.Create a separate countries.js file and store the countries array in to this file,
//  create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file*/

// console.log(countries)
// console.log(webTechs)

// //2. First remove all the punctuations and change the string to array and count the number of words in the array
// const text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// let words = text.replace(/[.,]/g, "").split(' ');
// console.log(words)
// console.log(words.length)

// //3.In the following shopping cart add, remove, edit items
// let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// //add 'Meat' in the beginning of your shopping cart if it has not been already added
// shoppingCart.unshift('Meat')
// console.log(shoppingCart);
// //add Sugar at the end of you shopping cart if it has not been already added
// shoppingCart.push('Sugar');
// console.log(shoppingCart);
// //remove 'Honey' if you are allergic to honey
// shoppingCart.splice(4, 1);
// console.log(shoppingCart);
// //modify Tea to 'Green Tea'
// shoppingCart[3] = 'Gren Tea'
// console.log(shoppingCart)

// /*4. In countries array check if 'Ethiopia' exists in the array if it exists print 
// 'ETHIOPIA'. If it does not exist add to the countries list.*/

// function findingCountry(countries = [], country = '') {
//   const isEthiopia = countries.indexOf(country) !== -1;
//   if (isEthiopia)  {
//     console.log(country);
//   } else {
//     const mergedArrays = countries.concat([country]);
//     console.log(mergedArrays) 
//   }
// }
// findingCountry(countries, 'Ethiopia');

/*5.In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a
CSS preprocess'. If it does not exist add Sass to the array and print the array.*/
// function findingWebTech(webTech, tech) {
//   const hasSass = webTech.indexOf(tech) !== -1;
//   if (hasSass) {
//     console.log(`${tech} is a CSS preprocess`);
//   }else {
//     const mergedTech = webTechs.concat([tech]);
//     console.log(mergedTech)
//   }
// }
// findingWebTech(webTechs, 'Sass');

//6.Concatenate the following two variables and store it in a fullStack variable.
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
// const backEnd = ['Node', 'Express', 'MongoDB'];
// const fullStack = frontEnd.concat(backEnd)
// console.log(fullStack)

//LEVEL 3
//1. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
  // Sort the array and find the min and max age
  