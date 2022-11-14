//점수계산
const readline = require("readline");
const solution = (input) => {
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    let count = 0;
    let sum = 0;

    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === "O") {
        count++;
      } else {
        count = 0;
      }
      sum += count;
    }
    answer += sum + "\n";
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
    arr.shift();
    console.log(solution(arr));
  }
});
