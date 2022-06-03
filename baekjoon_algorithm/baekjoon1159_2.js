//농구경기 첫글자가 같은 선수 5명이상이면 첫글자 출력 (for문 이용)
const readline = require("readline");
function solution(input) {
  let firstName = [];
  let count = 1;
  let maxString = "";
  for (let i = 1; i < input.length; i++) {
    firstName.push(input[i].split("")[0]);
  }
  firstName = firstName.sort(); //firstName 순서대로 정렬
  for (let i = 1; i <= firstName.length; i++) {
    //i=1부터 시작이라 조건 잘 확인해야함
    if (firstName[i] === firstName[i - 1]) {
      //i 와 바로 전에있는 문자 비교
      count++;
    } else {
      //같지 않다면 count 1
      if (count >= 5) {
        maxString += firstName[i - 1];
      }
      count = 1;
    }
  }
  return maxString !== "" ? maxString : "PREDAJA";
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (arr.length - 1 === Number(arr[0])) {
    console.log(solution(arr));
  }
});
