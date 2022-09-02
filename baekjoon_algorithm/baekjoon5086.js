//배수와 약수
const readline = require("readline");
const solution = (input) => {
  let answer = [];
  for (let i = 0; i < input.length; i++) {
    let left = Number(input[i].split(" ")[0]);
    let right = Number(input[i].split(" ")[1]);
    if (right % left == 0) {
      answer.push("factor");
    } else if (left % right == 0) {
      answer.push("multiple");
    } else {
      answer.push("neither");
    }
  }
  return answer.join("\n");
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];
rl.on("line", (line) => {
  arr.push(line);
  if (line == "0 0") {
    arr.pop();
    console.log(solution(arr));
  }
});
