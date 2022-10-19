//뒤집한 덧셈
const readline = require("readline");
function solution(input) {
  let numA = parseInt(input.split(" ")[0].split("").reverse().join(""), 10);
  let numB = parseInt(input.split(" ")[1].split("").reverse().join(""), 10);
  let answer = (numA + numB).toString();
  answer = parseInt(answer.split("").reverse().join(""), 10);

  return answer;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
