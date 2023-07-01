//주사위 게임
/*
4
5 6
6 6
4 3
5 2
 */

const readline = require("readline");

function solution(input) {
  const nums = input.map((item) => item.split(" "));
  let changyoungScore = 0;
  let sangdeckScore = 0;
  let answer = "";
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      if (nums[i][0] > nums[i][1]) {
        sangdeckScore += Number(nums[i][0]);
        break;
      } else if (nums[i][0] < nums[i][1]) {
        changyoungScore += Number(nums[i][1]);
        break;
      }
    }
  }
  console.log(changyoungScore, typeof changyoungScore);
  changyoungScore = 100 - changyoungScore;
  sangdeckScore = 100 - sangdeckScore;
  answer = changyoungScore + "\n" + sangdeckScore;

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
