// 나는 요리사다
/*
5 4 4 5  
5 4 4 4  
5 5 4 4
5 5 5 4  
4 4 4 5 
*/
const readline = require("readline");
function solution(input) {
  let sum = Number.MIN_SAFE_INTEGER;
  let maxSum = 0;
  let index;
  for (i = 0; i < input.length; i++) {
    sum = input[i]
      .split(" ")
      .map((num) => Number(num))
      .reduce((acc, cur) => {
        return (acc += cur);
      }, 0);
    if (maxSum < sum) {
      maxSum = sum;
      index = i + 1;
    }
  }
  return index + " " + maxSum;
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (arr.length === 5) {
    console.log(solution(arr));
  }
});
