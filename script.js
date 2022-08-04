//Método forEach --------
const arrayForEach = [10, 20, 30, 44, 55];
const arrayVazio = [];
function callbackForEach(element) {
  return arrayVazio.push(element * 2);
}
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i])
  }
}
//console.log(forEach(arrayForEach, callbackForEach));
//console.log(arrayVazio);

//Método Find
const arrayFind = [12, true, "alfafa", 4, 5]; // array para iteração do método

function callbackFind(element) {
  if (element > 2 && element < 12) {
    return true;
  }
}

function callbackFindTwo(element) {
  if (element > 15) {
    return true;
  }
}

function find(array, callback) {
  for (let i = 0; i < array.length; i++) {
    let elementoArr = array[i]
    let resultado = callback(elementoArr)
    if (resultado === true) {
      return elementoArr
    }
  }
}
//console.log(find(arrayFind, callbackFind));
//console.log(find(arrayFind, callbackFindTwo));

//Método IndexOf --------

const arrayFindIndex = [595, 206, "apollo", false, null, undefined, 8];

function callbackFindIndex(element) {
  return typeof element === "string" ? true : false;
}

function callbackFindIndexTwo(element) {
  return element == 3 ? true : false;
}

function FindIndex(array, callback) {
  for (let i = 0; i < array.length; i++) {
    let elementArr = array[i]
    let resultado = callback(elementArr)
    if (resultado === true) {
      return i
    }
  } return -1
}
//console.log(FindIndex(arrayFindIndex, callbackFindIndex));
//console.log(FindIndex(arrayFindIndex, callbackFindIndexTwo));

//Método Includes --------

const arrayIncludes = [53, 2, "duck", NaN, 456, 7];

function includes(array, searchElement) {
  for (let i = 0; i < array.length; i++) {
    let elementArr = array[i]
    let elementoPro = searchElement
    if (elementArr === elementoPro) {
      return true
    }
  } return false
}

//console.log(includes(arrayIncludes, "duck"));
//console.log(includes(arrayIncludes, 500));

//Método some --------
const arrySome = [12, 82, 563, 414, null];
const callbackSome = (element) => {
  return element > 82 ? true : false;
};

const callbackSome2 = (element) => {
  if (element) {
    return false;
  }
};

function some(array, callback) {
  for (let i = 0; i < array.length; i++) {
    let elementArr = array[i]
    let resultado = callback(array[i])
    if (resultado === true) {
      return true
    }
  } return false
}

//console.log(some(arrySome, callbackSome));
//console.log(some(arrySome, callbackSome2));

//Método Join --------

const arrayJoin = ["Fogo", "no", "Parquinho"];

function join(array, value) {
  let resultado = ''
  for (let i = 0; i < array.length; i++) {
    resultado += array[i]
    resultado += value

  } return resultado
}
console.log(join(arrayJoin, " "));
console.log(join(arrayJoin, ""));
