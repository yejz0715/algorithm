//더하기
const readline = require("readline");
function solution(input) {
  let sum = 0;
  let answer = "";

  // 개수 말고 합을 구하는 줄만 돌리고 싶을때 for문 홀수 루프 돌리기(i+2)
  for (let i = 1; i <= input.length; i += 2) {
    sum += input[i]
      .split(" ")
      .map((item) => Number(item))
      .reduce((a, b) => a + b);

    answer += sum + "\n";
    sum = 0;
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
  if (Number(arr[0]) === (arr.length - 1) / 2) {
    arr.shift();
    console.log(solution(arr));
  }
});
