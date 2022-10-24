//점수계산
const readline = require("readline");
const solution = (input) => {
  let numA = 0;
  let numB = 0;
  let power = "";
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    numA = Number(input[i].split(" ")[0]);
    numB = Number(input[i].split(" ")[1]);
    power = Math.pow(numA, numB).toString();
    answer += power.charAt(power.length - 1);
    console.log(power);
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
