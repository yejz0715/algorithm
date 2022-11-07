//치킨댄스를 추는 곰곰이를 본 임스
const readline = require("readline");
function solution(input) {
  let answer = 0;
  let numA = Number(input[0]);
  let numC = Math.floor(Number(input[1].split(" ")[0]) / 2);
  let numB = Number(input[1].split(" ")[1]);
  numA >= numC + numB ? (answer = numC + numB) : (answer = numA);
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
  }
});
