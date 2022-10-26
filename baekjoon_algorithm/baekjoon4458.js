//첫글자를 대문자로
const readline = require("readline");
const solution = (input) => {
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === input[i][0]) {
        answer += input[i][0].toUpperCase();
        break;
      }
    }
    for (let k = 1; k < input[i].length; k++) {
      answer += input[i][k];
    }
    answer += "\n";
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
  if (Number(arr[0]) + 1 === arr.length) {
    arr.shift();
    console.log(solution(arr));
  }
});
