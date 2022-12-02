//팰린드롬수
const readline = require("readline");
function solution(input) {
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    let reverse = input[i].split("").reverse().join("");
    input[i] === reverse ? (answer += "yes" + "\n") : (answer += "no" + "\n");
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
