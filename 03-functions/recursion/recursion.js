// My solution
function isEven(positiveWholeNumber) {
  if (positiveWholeNumber < 0) return isEven(-positiveWholeNumber);
  else if (positiveWholeNumber === 0) return true;
  else if (positiveWholeNumber === 1) return false;
  else return isEven(positiveWholeNumber - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));

// Eloquent Javascript's Solution

// function isEven(n) {
//   if (n == 0) return true;
//   else if (n == 1) return false;
//   else if (n < 0) return isEven(-n);
//   else return isEven(n - 2);
// }