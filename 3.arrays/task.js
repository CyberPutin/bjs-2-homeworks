"use strict"

//Задача 1

function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((it, i) => it === arr2[i]);
}

//Задача 2

function advancedFilter(arr) {
  return arr.filter(positiveNum => positiveNum > 0 && positiveNum % 3 === 0).map((item) => item * 10);
}