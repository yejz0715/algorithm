//3의 배수
const readline = require("readline");
function solution(input) {
  let count = 0;
  let answer = "";
  while (input.length >= 2) {
    input = input
      .split("")
      .map((item) => Number(item))
      .reduce((a, b) => a + b)
      .toString();
    count += 1;
  }
  let num = Number(input);
  num % 3 === 0
    ? (answer = count + "\n" + "YES")
    : (answer = count + "\n" + "NO");
  return answer;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
