//문자와 문자열

const readline = require("readline");

function solution(input) {
  let answer = input[0].split("")[input[1] - 1];
  return answer;
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (arr.length === 2) {
    console.log(solution(arr));
    rl.close();
  }
});
