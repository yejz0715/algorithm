//팰린드롬인지 확인하기
const readline = require("readline");
function solution(input) {
  let left = "";
  let right = "";
  let rightTmp = "";
  let answer = 0;
  let length =
    input.length % 2 === 0 ? input.length / 2 : Math.floor(input.length / 2);

  for (let i = 0; i < length; i++) {
    left += input[i];
  }

  for (let j = input.length - 1; j >= length; j--) {
    right += input[j];
  }
  for (let k = input.length - 1; k > length; k--) {
    rightTmp += input[k];
  }

  if (input.length % 2 === 0) {
    left === right ? (answer = 1) : (answer = 0);
  } else {
    left === rightTmp ? (answer = 1) : (answer = 0);
  }
  return answer;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
  rl.close();
});
