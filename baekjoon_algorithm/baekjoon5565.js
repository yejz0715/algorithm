//영수증

const readline = require("readline");
function solution(input) {
  let answer = 0;
  for (let i = 1; i < input.length; i++) {
    answer += Number(input[i]);
  }
  return Number(input[0]) - answer;
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);

  if (arr.length === 10) {
    console.log(solution(arr));
  }
});
