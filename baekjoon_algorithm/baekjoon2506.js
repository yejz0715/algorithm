//ox퀴즈
const { count } = require("console");
const readline = require("readline");
const solution = (input) => {
  let numArr = input[0].split(" ");
  let count = 0;
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === "1") {
      count++;
    } else {
      count = 0;
    }
    sum += count;
  }

  return sum;
};
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  arr.push(line);
  if (arr.length === 2) {
    arr.shift();
    console.log(solution(arr));
  }
});
