// 30 Days Of JavaScript: Arrays
//LEVEL 1

//1. Declare an empty array
const emptyArray = Array();
//2. Declare an array with more than 5 number of elements
const  numbersList = [5, 4, 8, 2, 9, 3, 7];

//3.Find the length of your array
console.log(numbersList.length);

//4. Get the first item, the middle item and the last item of the array
const FIRST = 0
console.log(numbersList[FIRST]);
let lastNumber = numbersList.length -1;
lastNumber = numbersList[lastNumber];
console.log(lastNumber)
const middleNumber = numbersList[Math.floor(numbersList.length / 2)];
console.log(middleNumber)

/*5. Declare an array called mixedDataTypes, put different data types in the array and find the 
length of the array. The array size should be greater than 5 */
const mixedDataTypes = ['Luna', 1995, true, [1, 2, 3], '1000', 55];
console.log(mixedDataTypes.length);

/*6.Declare an array variable name itCompanies and assign initial values Facebook, Google, 
Microsoft, Apple, IBM, Oracle and Amazon */

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//7.Print the array using console.log()
console.log(itCompanies);

//8. Print the number of companies in the array
console.log(itCompanies.length);

//9.Print the first company, middle and last company
console.log(itCompanies[FIRST]);
const middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
console.log(middleCompany)
let lastCompany = itCompanies.length -1;
lastCompany = itCompanies[lastCompany];
console.log(lastCompany)

//10.Print out each company
itCompanies.forEach(element => console.log(element))

//11. Change each company name to uppercase one by one and print them out
itCompanies.map(function(x) {return console.log(x.toUpperCase());})

//12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies. 
console.log(itCompanies.toString() + ' are big IT companies')

/*13. Check if a certain company exists in the itCompanies array. 
If it exist return the company else return a company is not found*/
const IT_EXIST = 0;
const companyExist = itCompanies.indexOf('Facebook')
if ( companyExist === IT_EXIST) {
  console.log('This company does exist')
} else {
  console.log('Company is not found')
}

//14. Filter out companies which have more than one 'o' without the filter method