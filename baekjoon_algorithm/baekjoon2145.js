//숫자놀이
const readline = require("readline");
function solution(input) {
  let answer = "";

  const sum = (acc, cur) => {
    acc = Number(acc);
    acc += Number(cur);
    return acc;
  };

  for (let i = 0; i < input.length; i++) {
    let num = 0;
    for (let j = 0; j < input[i].length; j++) {
      num += Number(input[i][j]);
    }
    let nums = num.toString();
    while (nums.length >= 2) {
      nums = nums
        .split("")
        .map((item) => Number(item))
        .reduce(sum);
    }

    answer += nums + "\n";
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

  if (line === "0") {
    arr.pop();
    console.log(solution(arr));
  }
});
