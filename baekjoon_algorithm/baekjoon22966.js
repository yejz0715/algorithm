//가장 쉬운 문제를 찾는 문제
const readline = require("readline");
function solution(input) {
  let answer = "";
  let lines = input.map((item) => item.split(" ").reverse().join(""));
  let minNum = lines.map((item) => Number(item[0])).sort((a, b) => a - b)[0];
  for (let i = 0; i < lines.length; i++) {
    for (let j = 1; j < lines[i].length; j++) {
      if (minNum === Number(lines[i][0])) {
        answer += lines[i][j];
      }
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
  if (Number(arr[0]) === arr.length - 1) {
    arr.shift();
    console.log(solution(arr));
  }
});
