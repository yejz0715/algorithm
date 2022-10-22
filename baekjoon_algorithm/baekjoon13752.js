//히스토그램
const readline = require("readline");
function solution(input) {
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    answer += "=".repeat(Number(input[i])) + "\n";
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
  if (Number(arr[0]) === arr.length - 1) {
    arr.shift();
    console.log(solution(arr));
  }
});
