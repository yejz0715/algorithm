//대표값2
const readline = require("readline");
function solution(input) {
  let average = input.map((item) => Number(item)).reduce((a, b) => a + b) / 5;
  let num = input.map((item) => Number(item)).sort((a, b) => a - b)[2];
  let answer = average + "\n" + num;
  return answer;
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
