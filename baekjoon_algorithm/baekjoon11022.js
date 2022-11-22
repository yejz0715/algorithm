const readline = require("readline");
function solution(input) {
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    a = Number(input[i].split(" ")[0]);
    b = Number(input[i].split(" ")[1]);
    s = a + b;
    n = i + 1;
    answer += `Case #${n}: ${a} + ${b} = ${s}` + "\n";
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
