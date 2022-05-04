const readline = require("readline");

//세수정렬 sort() : 배열 안의 원소를 정렬하는 함수(오름차순)
function solution(input) {
  let result = "";
  let numArr = input.split(" ");
  let answer = [];

  // map
  numArr.map((num) => answer.push(Number(num)));
  answer.sort((a, b) => a - b);

  answer.map((num) => (result += num + " "));
  console.log(result);
  // let a = Number(numArr[0]);
  // let b = Number(numArr[1]);
  // let c = Number(numArr[2]);

  // let arr = [a, b, c];

  //console.log(`${arr.sort()}`);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  solution(line);
});
