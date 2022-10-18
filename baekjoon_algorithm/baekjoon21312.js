//홀짝 칵테일(홀>짝)
const readline = require("readline");
function solution(input) {
  let answer = 0;
  let odds = input //홀수
    .split(" ")
    .map((item) => Number(item))
    .filter((num) => num % 2 !== 0);
  if (numArr.length === 0 || numArr.length === 3) {
    //3개 다 홀수이거나 짝수일 때 3개 다 곱
    answer += input
      .split(" ")
      .map((item) => Number(item))
      .reduce((a, b) => a * b);
  } else if (numArr.length === 1) {
    answer += numArr[0];
  } else {
    answer += numArr[0] * numArr[1];
  }

  return answer;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
