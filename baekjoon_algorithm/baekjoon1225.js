//이상한 곱셈
const readline = require("readline");
function solution(input) {
  let numA = input.split(" ")[0];
  let numB = input.split(" ")[1];
  let answer = 0;
  for (let i = 0; i < numA.length; i++) {
    for (let j = 0; j < numB.length; j++) {
      answer += Number(numA[i]) * Number(numB[j]);
    }
  }

  return answer;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
