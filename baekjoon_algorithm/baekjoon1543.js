//문서검색
const readline = require("readline");
function solution(input) {
  let answer = input[0]
    .replaceAll(input[1], "*")
    .split("")
    .filter((item) => item === "*");

  return answer.length;
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
  }
});
