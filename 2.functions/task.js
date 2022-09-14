"use strict"

// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
   
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
    
    sum += arr[i];     
  }
  
  let avg = Number((sum / arr.length).toFixed(2));

  return { min, max, avg };
}

getArrayParams([-99, 100, 15, 0, 5]);



// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++ ) { 
    const funcResult = func(arrOfArr[i]);
    if (funcResult > max) {
      max = funcResult;
    }
  }
  
  return max;
}

makeWork([[3, 5, 10, 12], [30, 15, 5, 27]], worker);



// Задание 3
function worker2(arr) {
  let min = Infinity;
  let max = -Infinity;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return Math.abs(max - min);
}