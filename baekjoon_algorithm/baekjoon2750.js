//수 정렬하기
const readline = require("readline");

function solution(input) {
  input.shift();
  const answer = input.sort((a, b) => a - b).join("\n");
  return answer;
}

let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (Number(arr[0]) === arr.length - 1) {
    console.log(solution(arr));
  }
});
