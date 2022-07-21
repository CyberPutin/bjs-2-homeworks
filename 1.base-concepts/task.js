'use strict';

function solveEquation(a, b, c) {
  
  const arr = [];
  const D = b ** 2 - 4 * a * c;

  if (D < 0) {
    return arr;
  } else if (D === 0) {
    arr.push(-b/(2*a));
    return arr;
  } else {
    arr.push((-b+Math.sqrt(D))/(2*a), (-b-Math.sqrt(D))/(2*a));
    return arr;
  }
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if (isNaN(percent)) {
    return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
  }
     
  if (isNaN(contribution)) {
    return (`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
  }

  if (isNaN(amount)) {
    return (`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
  }

  const loanBody = amount - contribution;
  let months;

  months = (date.getFullYear() - new Date().getFullYear()) * 12;
  //months -= today.getMonth();
  //months += date.getMonth();
  //months <= 0 ? 0 : months;

  const P = percent /(100*12);
  const monthsPayment = loanBody * (P + (P / (((1 + P) ** months) - 1)));

  totalAmount = Number((months * monthsPayment).toFixed(2));
  console.log(totalAmount);

  return totalAmount;
}