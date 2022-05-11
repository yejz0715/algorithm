// 나는 요리사다
/*
5 4 4 5  
5 4 4 4  
5 5 4 4
5 5 5 4  
4 4 4 5 
*/
const readline = require("readline");
function solution(input) {
  let answer = [];
  let sum = [];
  let sumNum;
  for (i = 0; i < input.length; i++) {
    sum = input[i]
      .split(" ")
      .map((num) => Number(num))
      .reduse((acc, cur, index) => {
        return (acc += cur);
      }, 0);
    console.log(sum);
  }
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (arr.length === 5) {
    //console.log(solution(arr));
    solution(arr);
  }
});
