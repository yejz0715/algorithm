//나이순 정렬
/*
3
21 Junkyu
21 Dohyun
20 Sunyoung
*/
const readline = require("readline");
function solution(input) {
  let items = input.map((item) => item.split(" "));
  let map = new Map(items.map((e) => [e[1], Number(e[0])]));
  map = [...map].sort((a, b) => a[1] - b[1]);
  for (let [k, v] of map) {
    console.log(v, k);
  }
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
    return solution(arr);
  }
});
