//소음
//최대 100자리여서 문자열로 풀어야됨
const readline = require("readline");
function solution(input) {
  let numA = input[0].length - 1;
  let numB = input[2].length - 1;
  let answer = "";
  if (input[1] === "*") {
    answer = 1 + "0".repeat(numA + numB);
  } else if (input[1] === "+") {
    if (numA === numB) {
      answer = 2 + "0".repeat(numA);
    } else {
      answer =
        1 +
        "0".repeat(Math.max(numA, numB) - (Math.min(numA, numB) + 1)) +
        1 +
        "0".repeat(Math.min(numA, numB));
    }
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

  if (arr.length === 3) {
    console.log(solution(arr));
  }
});
