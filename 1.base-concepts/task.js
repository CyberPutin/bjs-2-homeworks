'use strict';

function solveEquation(a, b, c) {
  
  const arr = [];
  const d = b ** 2 - 4 * a * c;

  if (d > 0) {
    arr.push((-b+Math.sqrt(d))/(2*a), (-b-Math.sqrt(d))/(2*a)); 
  } else if (d === 0) {
    arr.push(-b/(2*a));
  }
  return arr;
}



function calculateTotalMortgage(percent, contribution, amount, date) {
  
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
  let months = (date.getFullYear() - new Date().getFullYear()) * 12;
  //months -= today.getMonth();
  //months += date.getMonth();
  //months <= 0 ? 0 : months;

  const p = percent /(100*12);
  const monthsPayment = loanBody * (p + (p / (((1 + p) ** months) - 1)));
  let totalAmount = Number((months * monthsPayment).toFixed(2));
  
  console.log(totalAmount);

  return totalAmount;
}