const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//17. Slice out the first 3 companies from the array
const sliceFirstPositionArray = itCompanies.slice(0, 3);
console.log(sliceFirstPositionArray);

//18. Slice out the last 3 companies from the array
const sliceLastTreePositionArray = itCompanies.slice(itCompanies.length - 3);
console.log(sliceLastTreePositionArray);

//19. Slice out the middle IT company or companies from the array
const isEvenArray = itCompanies.length % 2 === 0;
const middlePositionElement = Math.floor(itCompanies.length / 2);
const middlePositionElementEven = Math.ceil(itCompanies.length / 3);
const sliceMiddlePositionElementEven = itCompanies.slice(middlePositionElementEven, middlePositionElementEven + 2);
const sliceMiddlePositionElementOdd = itCompanies.slice(middlePositionElement, middlePositionElement + 1);
if (isEvenArray) {
  console.log(sliceMiddlePositionElementEven);
} else {
  console.log(sliceMiddlePositionElementOdd);
};

//21.Remove the middle IT company or companies from the array
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
const calculateMiddleItCompany = Math.floor(itCompanies.length / 2);

function removeElement(indexToDelete, array) {
  const newArray = [];
  const printElementandIndex = (element, index) => {
    if (indexToDelete !== index) {
      newArray.push(element);
    };
  };
  array.forEach(printElementandIndex);
  return newArray;
};

console.log(removeElement(calculateMiddleItCompany, itCompanies));

//22.Remove the last IT company from the array
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
const calculateMiddleItCompany = Math.floor(itCompanies.length - 1);

function removeElement(indexToDelete, array) {
  const newArray = [];
  function printElementandIndex(element, index) {
    if (indexToDelete !== index) {
      newArray.push(element);
    };
  };
  array.forEach(printElementandIndex);
  return newArray;
};

console.log(removeElement(calculateMiddleItCompany, itCompanies));

//23.Remove all IT companies
const removeAllIt = itCompanies.splice();
console.log(removeAllIt);
//another way
function removeAllElements(shoppingCart) {
  const newArray = [];
  function removeElements(array) {
    if (array === shoppingCart1) {
      newArray.push();
    }
  };
  shoppingCart.forEach(removeElements);
  return newArray;
};

console.log(removeAllElements(shoppingCart1));

//LEVEL 2
//3.In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

//add 'Meat' in the beginning of your shopping cart if it has not been already added
function itemShoppingCart(item) {
  const itemExist = shoppingCart.indexOf(item) !== 0;
  if (itemExist) {
    shoppingCart.unshift(item);
    return console.log(shoppingCart);
  } else {
    return 'This item already exist in the shoppin cart';
  }
};

console.log(itemShoppingCart('Meat'));

//add Sugar at the end of you shopping cart if it has not been already added
function itemShoppingCart(item) {
  const itemExist = shoppingCart.indexOf(item) !== 0;
  if (itemExist) {
    shoppingCart.push(item);
    return console.log(shoppingCart);
  } else {
    return 'This item already exist in the shoppin cart';
  }
};

console.log(itemShoppingCart('Sugar'));

//remove 'Honey' if you are allergic to honey
function removeElement(itemToDelete, isAllergic, shoppingCart) {
  const newArray = [];
  function removeIfAllergic(element) {
    const itemtoRemove = itemToDelete === element && isAllergic;
    if (itemtoRemove !== true) {
      newArray.push(element);
    };
  };
  shoppingCart.forEach(removeIfAllergic);
  return newArray;
};

console.log(removeElement('Honey', true, shoppingCart1));

//modify Tea to 'Green Tea'
function modifyElement(itemToModify, ItemToAdd, shoppingCart) {
  const newArray = [];
  function replaceElement(element, index) {
    const itemToReplace = element === itemToModify;
    newArray.push(element);
    if (itemToReplace) {
      newArray[index] = ItemToAdd;
    }
  };
  shoppingCart.forEach(replaceElement);
  return newArray;
};

console.log(modifyElement('Tea', 'Green Tea', shoppingCart1));
