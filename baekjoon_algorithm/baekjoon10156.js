//과자
const readline = require("readline");
function solution(input) {
  let num =
    Number(input.split(" ")[0]) * Number(input.split(" ")[1]) -
    Number(input.split(" ")[2]);
  let answer = "";
  num <= 0 ? (answer = 0) : (answer = num);
  return answer;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
