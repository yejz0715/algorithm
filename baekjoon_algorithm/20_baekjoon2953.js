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
  console.log(input);
  let answer = [];
  for (i = 0; i < input.length; i++) {
    answer = input[i].split(" ").map((a) => Number(input[a]));
    console.log(input, typeof input);
  }
  console.log(answer);
}
let arr = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  arr.push(line);
  if (arr.length == 5) {
    //console.log(solution(arr));
    solution(arr);
  }
});
