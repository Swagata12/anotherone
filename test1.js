let num = [2, 5, 7, 6, 18, 19, 9, 20, 21];
function findOddnumber(n) {
  let countOdd = 0;
  let countEven = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 === 0) {
      countEven++;
    } else {
      countOdd++;
    }
  }
  return [countOdd, countEven];
}
console.log(findOddnumber(num));
