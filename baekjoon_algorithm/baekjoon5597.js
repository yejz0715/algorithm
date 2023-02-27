// 과제 안내신 분 _ 두 배열 비교하여 포함되지 않는 수 찾음
const readline = require("readline");
function solution(input) {
  let numArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
  let inputArr = input.map((item) => Number(item)).sort((a, b) => a - b);

  let answer = numArr.filter((item) => !inputArr.includes(item)).join("\n");
  //교집합 : numArr.filter((item)=>   inputArr.includes(item)) numArr에 있는 요소가 inputArr에 포함되어 있는지
  //차집합 : numArr.filter((item)=> ! inputArr.includes(item)) numArr에 있는 요소가 inputArr에 포함되어 있지 않은지

  return answer;
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (arr.length === 28) {
    console.log(solution(arr));
    rl.close();
  }
});
