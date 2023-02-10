//숫자놀이
const readline = require("readline");
function solution(input) {
  let answer = "";

  for (let i = 0; i < input.length; i++) {
    let lineNum = input[i];

    while (lineNum.length >= 2) {
      lineNum = lineNum
        .split("")
        .map((item) => Number(item))
        .reduce((a, b) => a + b)
        .toString();
    }
    answer += lineNum + "\n";
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

  if (line === "0") {
    arr.pop();
    console.log(solution(arr));
    rl.close();
  }
});
