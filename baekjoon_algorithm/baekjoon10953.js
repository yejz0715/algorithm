//A+B-6
const readline = require("readline");
const solution = (input) => {
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    answer +=
      input[i]
        .split(",")
        .map((num) => Number(num))
        .reduce((a, b) => a + b) + "\n";
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
  if (arr.length == Number(arr[0]) + 1) {
    arr.shift();
    console.log(solution(arr));
  }
});
