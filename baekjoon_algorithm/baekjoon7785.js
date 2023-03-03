//회사에 있는 사람 Map()
/*
4
Baha enter
Askar enter
Baha leave
Artem enter
*/
const readline = require("readline");
function solution(input) {
  let list = input.map((item) => item.split(" "));
  //map의 중복된 키가 있다면, 마지막 값이 적용됨
  let map = new Map(list.map((e) => [e[0], e[1]])); //list 요소를 key_value로 map에 저장
  let answer = [];

  for (let [k, v] of map) {
    if (v === "enter") {
      answer.push(k);
    }
  }
  answer = answer.sort().reverse().join("\n");
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
