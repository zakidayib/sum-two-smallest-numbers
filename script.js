// Good Luck 💪🏾

function sumTwoSmallestNums(arr) {
  let smallest = Math.min(...arr);
  let newArr = arr.sort((a, b) => a - b);
  let secondSmallest;
  for (let i = newArr.length - 1; i >= 0; i--) {
    if (newArr[i] > smallest) {
      secondSmallest = newArr[i];
    }
  }
  return smallest + secondSmallest;
}

console.log(sumTwoSmallestNums([12, 5, 24, 55, 18]));
console.log(sumTwoSmallestNums([190, 300, 230, 800]));

// ```
// sumTwoSmallestNums([12, 5, 24, 55, 18]) ➞ 17
// sumTwoSmallestNums([190, 300, 230, 800]) ➞ 420
// ```;
// [5, 12, 18, 24, 55]
