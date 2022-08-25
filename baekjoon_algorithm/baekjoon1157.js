//단어공부
//Mississipi
const readline = require("readline");
function solution(input) {
  let answer = "";
  let word = input
    .toUpperCase()
    .split("")
    .sort()
    .reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      /*    =
      if(acc[cur]){ //새로운 값이 들어오면
      acc[cur]=acc[cur]+1; //속성추가하고 +1
      }else{
        acc[cur]=0+1; //같은 값이라면 +1만
      }
*/
      return acc;
    }, {}); //{A:2, B:1, C:3}

  let wordSet = Object.entries(word).sort((a, b) => b[1] - a[1]);
  //객체->이중배열 [['C',3], ['A',2], ['B',1]]

  if (wordSet.length === 1 || wordSet[0][1] !== wordSet[1][1]) {
    answer = wordSet[0][0];
  } else {
    answer = "?";
  }

  return answer;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  console.log(solution(line));
});
