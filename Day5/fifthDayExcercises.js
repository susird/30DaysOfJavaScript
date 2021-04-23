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

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

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
