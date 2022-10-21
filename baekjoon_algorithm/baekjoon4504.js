//배수 찾기
const readline = require("readline");
function solution(input) {
  let num = Number(input[0]);
  let answer = "";
  for (let i = 1; i < input.length; i++) {
    if (Number(input[i]) % num === 0) {
      answer += input[i] + " is a multiple of " + num + " ." + "\n";
    } else {
      answer += input[i] + " is NOT a multiple of " + num + " ." + "\n";
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
  if (line === "0") {
    arr.pop();
    console.log(solution(arr));
  }
});
