//직각삼각형
const readline = require("readline");
function solution(input) {
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    let a = input[i]
      .split(" ")
      .map((item) => Number(item))
      .sort((a, b) => b - a);
    if (a[1] ** 2 + a[2] ** 2 === a[0] ** 2) {
      answer += "right" + "\n";
    } else {
      answer += "wrong" + "\n";
    }
  }
  return answer;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let arr = [];
rl.on("line", (line) => {
  arr.push(line);
  if (line === "0 0 0") {
    arr.pop();
    console.log(solution(arr));
  }
});
