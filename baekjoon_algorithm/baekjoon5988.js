//홀수일까 짝수일까(백준에서 틀림 -> 이유 찾는중)
const readline = require("readline");
function solution(input) {
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    le;
    if (input[i] % 2 === 0) {
      answer += "even" + "\n";
    } else {
      answer += "odd" + "\n";
    }
  }

  return answer;
}
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
