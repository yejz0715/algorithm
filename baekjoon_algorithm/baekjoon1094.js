//막대기
const readline = require("readline");
function solution(input) {
  let num = Number(input);
  let numArr = [64, 32, 16, 8, 4, 2, 1];
  let sum = num;
  let count = 0;

  for (let i = 0; i < numArr.length; i++) {
    if (num === numArr[i]) {
      count = 1;
      break;
    }

    if (sum >= numArr[i]) {
      sum -= numArr[i];
      count += 1;
    }
  }

  return count;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
  rl.close();
});
