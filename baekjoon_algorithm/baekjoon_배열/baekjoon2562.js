//최댓값, index 구하기
/*
3
29
38
12
57
74
40
85
61
*/
const readline = require("readline");
function solution(input) {
  let arrNum = [];
  let index;
  let max = 0;
  for (i = 0; i < input.length; i++) {
    arrNum = input.map((num) => Number(num));
    if (max < arrNum[i]) {
      max = arrNum[i];
      index = i + 1;
    }
  }
  return max + "\n" + index;
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (arr.length === 9) {
    console.log(solution(arr));
  }
});
