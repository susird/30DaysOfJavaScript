const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//17. Slice out the first 3 companies from the array
const sliceFirstPositionArray = itCompanies.slice(0, 3)
console.log(sliceFirstPositionArray);

//18. Slice out the last 3 companies from the array
const sliceLastTreePositionArray = itCompanies.slice(itCompanies.length - 3)
console.log(sliceLastTreePositionArray);
 // como sacar los ultimos (cuál es el principio de los 3 ultimos?)

//19. Slice out the middle IT company or companies from the array
const isEvenArray = itCompanies.length % 2 === 0;
const middlePositionElement = Math.floor(itCompanies.length /2);
const middlePositionElementEven = Math.ceil(itCompanies.length / 3);
const sliceMiddlePositionElementEven = itCompanies.slice(middlePositionElementEven, middlePositionElementEven + 2);
const sliceMiddlePositionElementOdd = itCompanies.slice(middlePositionElement, middlePositionElement + 1);
if(isEvenArray) {
  console.log(sliceMiddlePositionElementEven)
}else {
  console.log(sliceMiddlePositionElementOdd)
}

//21.Remove the middle IT company or companies from the array
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
const calculateMiddleItCompany = Math.floor(itCompanies.length / 2);

function removeElement (indexToDelete, array) {
  const newArray = [];
  const printElementandIndex =(element, index) => {
    if (indexToDelete !== index) {
      newArray.push(element);
    };
  };
  array.forEach(printElementandIndex);
  return newArray;
};

console.log(removeElement(calculateMiddleItCompany, itCompanies))

//22.Remove the last IT company from the array
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
const calculateMiddleItCompany = Math.floor(itCompanies.length -1);

function removeElement (indexToDelete, array) {
  const newArray = [];
  function printElementandIndex (element, index) {
    if (indexToDelete !== index) {
      newArray.push(element);
    };
  };
  array.forEach(printElementandIndex);
  return newArray;
};

console.log(removeElement(calculateMiddleItCompany, itCompanies))

//23.Remove all IT companies
const removeAllIt = itCompanies.splice();
console.log(removeAllIt);
//buscar otro método