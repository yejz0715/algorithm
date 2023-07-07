//디지털루트
const readline = require("readline");
function solution(input) {
  let answer = "";

  input.forEach((e) => {
    let number = e;
    if (number.length === 1) {
      answer += number + "\n";
    }
    while (number.length !== 1) {
      number = number
        .split("")
        .map((item) => Number(item))
        .reduce((a, b) => a + b)
        .toString();
      if (number.length === 1) {
        answer += number + "\n";
      }
    }
  });

  return answer;
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (arr[arr.length - 1] === "0") {
    arr.pop();
    console.log(solution(arr));
  }
});
