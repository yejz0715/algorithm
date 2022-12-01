//이칙연산
const readline = require("readline");
function solution(input) {
  let answer = 0;
  let numA = Number(input.split(" ")[0]);
  let numB = Number(input.split(" ")[1]);
  let numC = Number(input.split(" ")[2]);

  (numA * numB) / numC > (numA / numB) * numC
    ? (answer = Math.floor((numA * numB) / numC))
    : (answer = Math.floor((numA / numB) * numC));
  return answer;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
