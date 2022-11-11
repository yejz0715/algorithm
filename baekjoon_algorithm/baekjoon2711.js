//오타맨 고창영_1개의 오타를 제거한 문자열 출력
const readline = require("readline");
function solution(input) {
  let answer = "";
  input.map((item) => {
    const num = Number(item.split(" ")[0]);
    const stringArr = item.split(" ")[1].split("");
    stringArr.splice(num - 1, 1); //splice(시작인덱스,제거할 요소 수)
    answer += stringArr.join("") + "\n";
  });
  return answer;
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);

  if (arr.length - 1 === Number(arr[0])) {
    arr.shift();
    console.log(solution(arr));
  }
});
