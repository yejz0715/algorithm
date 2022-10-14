// 더하기4 (백준에선 틀림->틀린이유 찾는중)
const readline = require("readline");
const solution = (input) => {
  let sum = 0;
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      sum += Number(input[i][j]);
    }
    answer += sum + "\n";
    sum = 0; //sum 초기화!
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
