const numbers = [175, 50, 25];

console.log( numbers.reduce(myFunc));

function myFunc(total, num) {
  return total - num;
}
