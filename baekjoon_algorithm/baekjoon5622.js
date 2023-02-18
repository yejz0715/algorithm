// 다이얼

const readline = require("readline");
function solution(input) {
  let word = input.split("");
  let dial = {
    2: ["A", "B", "C"],
    3: ["D", "E", "F"],
    4: ["G", "H", "I"],
    5: ["J", "K", "L"],
    6: ["M", "N", "O"],
    7: ["P", "Q", "R", "S"],
    8: ["T", "U", "V"],
    9: ["W", "X", "Y", "Z"],
  };
  let answer = 0;
  for (let i = 0; i < word.length; i++) {
    for (let j = 2; j <= 9; j++) {
      if (dial[j].includes(word[i])) {
        answer += j + 1;
        break;
      }
    }
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
