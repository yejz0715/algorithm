//문자열
const readline = require("readline");
function solution(input) {
  let answer = "";
  let firstNum = "";
  let lastNum = "";

  for (let i = 0; i < input.length; i++) {
    firstNum = input[i][0];
    for (let j = input[i].length - 1; j >= 0; j--) {
      lastNum = input[i][j];
      break;
    }
    answer += firstNum + lastNum + "\n";
    first = "";
  }
  return answer;
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (arr.length === Number(arr[0]) + 1) {
    arr.shift();
    console.log(solution(arr));
    rl.close();
  }
});
