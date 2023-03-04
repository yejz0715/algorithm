//나이순 정렬
/*
3
21 Junkyu
21 Dohyun
20 Sunyoung
*/
const readline = require("readline");
function solution(input) {
  let answer = "";
  let items = input
    .map((item) => item.split(" "))
    .sort((a, b) => Number(a[0]) - Number(b[0]));

  for (let i of items) {
    answer += i[0] + " " + i[1] + "\n";
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
  if (arr.length - 1 === Number(arr[0])) {
    arr.shift();
    console.log(solution(arr));
    rl.close();
  }
});
