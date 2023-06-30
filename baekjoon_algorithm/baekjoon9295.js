//주사위
/*
5
1 2
1 3
3 5
2 6
3 4
 */

const readline = require("readline");

function solution(input) {
  let sum = input.map((item) =>
    item.split(" ").reduce((a, b) => Number(a) + Number(b))
  );
  let answer = "";
  for (let i = 0; i < sum.length; i++) {
    let index = i + 1;
    answer += "Case " + index + ": " + sum[i] + "\n";
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
    rl.close();
  }
});
