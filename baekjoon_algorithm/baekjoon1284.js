//집 주소
const readline = require("readline");
function solution(input) {
  let score = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i].length > 0) {
      score += input[i].length + 1;
    }
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === "0") {
        score += 4;
      } else if (input[i][j] === "1") {
        score += 2;
      } else {
        score += 3;
      }
    }
    console.log(score);
    score = 0;
  }
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
    return solution(arr);
  }
});
