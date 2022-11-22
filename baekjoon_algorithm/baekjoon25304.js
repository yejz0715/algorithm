const readline = require("readline");
function solution(input) {
  let amount = Number(input[0]);
  let price = 0;
  let answer = "";
  for (let i = 2; i < input.length; i++) {
    price += input[i]
      .split(" ")
      .map((item) => Number(item))
      .reduce((a, b) => a * b);
  }
  amount === price ? (answer = "Yes") : (answer = "No");
  return answer;
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  arr.push(line);
  if (Number(arr[1]) + 2 === arr.length) {
    console.log(solution(arr));
  }
});
