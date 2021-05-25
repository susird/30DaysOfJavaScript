const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon', 'Holi'];

function slicePositionElements(arrayInput, position) {
  if (position === 'first three') {
    const sliceFirstPositionArray = arrayInput.slice(0, 3);
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
  if (position === 'last three') {
    const sliceLastTreePositionArray = arrayInput.slice(arrayInput.length - 3);
    return sliceLastTreePositionArray;
  }
}

//17. Slice out the first 3 companies from the array
const firstTreePositionArray = slicePositionElements(itCompanies, 'first three');
console.log(firstTreePositionArray);

// //18. Slice out the last 3 companies from the array
const lastTreePositionArray = slicePositionElements(itCompanies, 'last three');
console.log(lastTreePositionArray);

// //19. Slice out the middle IT company or companies from the array
const middlePositionArray = slicePositionElements(itCompanies, 'middle');
console.log(middlePositionArray);

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

const middleITCompany = removeElement(calculateMiddleItCompany, itCompanies);
console.log(middleITCompany);

//22.Remove the last IT company from the array
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
const calculateMiddleItCompany = Math.floor(itCompanies.length - 1);

function removeElement(indexToDelete, array) {
  const newArray = [];
  function printElementandIndex(element, index) {
    if (indexToDelete !== index) {
      newArray.push(element);
    }
  }
  array.forEach(printElementandIndex);
  return newArray;
}

const lasITCompany = removeElement(calculateMiddleItCompany, itCompanies);
console.log(lasITCompany);

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
}

const removedElements = removeAllElements(shoppingCart1);
console.log(removedElements);

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
}

const addedItemAtBeginning = itemShoppingCart('Meat');
console.log(addedItemAtBeginning);

//add Sugar at the end of you shopping cart if it has not been already added
function itemShoppingCart(item) {
  const itemExist = shoppingCart.indexOf(item) !== 0;
  if (itemExist) {
    shoppingCart.push(item);
    return console.log(shoppingCart);
  } else {
    return 'This item already exist in the shoppin cart';
  }
}

const addItemAtTheEnd = itemShoppingCart('Sugar');
console.log(addItemAtTheEnd);

//remove 'Honey' if you are allergic to honey
function removeElement(itemToDelete, isAllergic, shoppingCart) {
  const newArray = [];
  function removeIfAllergic(element) {
    const itemtoRemove = itemToDelete === element && isAllergic;
    if (itemtoRemove !== true) {
      newArray.push(element);
    }
  }
  shoppingCart.forEach(removeIfAllergic);
  return newArray;
}

const removedItem = removeElement('Honey', true, shoppingCart1);
console.log(removedItem);

//modify Tea to 'Green Tea'
function modifyElement(itemToModify, ItemToAdd, shoppingCart) {
  const newArray = [];
  function replaceElement(element, index) {
    const itemToReplace = element === itemToModify;
    newArray.push(element);
    if (itemToReplace) {
      newArray[index] = ItemToAdd;
    }
  }
  shoppingCart.forEach(replaceElement);
  return newArray;
}

const modifyedItem = modifyElement('Tea', 'Green Tea', shoppingCart1);
console.log(modifyedItem);
