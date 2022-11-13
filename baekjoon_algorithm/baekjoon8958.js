//점수계산
const readline = require("readline");
const solution = (input) => {
  let count = "";
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === "O") {
        count += "^";
        if (count === "^") {
          count += "+";
        }
      } else {
        count += "";
      }
    }
    answer += count + "\n";
    count = 0;
  }
  return answer;
};
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  arr.push(line);
  if (arr.length - 1 === Number(arr[0])) {
    console.log(solution(arr));
  }
});
