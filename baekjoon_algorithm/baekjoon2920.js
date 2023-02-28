//음계
const readline = require("readline");

function solution(input) {
  let arr = input.split(" ");
  let answer = "";
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (Number(arr[i + 1]) === Number(arr[i]) + 1) {
      count += 1;
    } else if (Number(arr[i + 1]) === Number(arr[i]) - 1) {
      count += -1;
    } else {
      return "mixed";
    }
  }

  if (count > 0) {
    answer = "ascending";
  } else if (count < 0) {
    answer = "descending";
  }

  return answer;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
  rl.close();
});
