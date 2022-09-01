//배수와 약수
const readline = require("readline");
const solution = (input) => {
  for (let i = 0; i < input.length; i++) {
    let left = Number(input[i].split(" ")[0]);
    let right = Number(input[i].split(" ")[1]);
    if (right % left == 0) {
      console.log("factor");
    } else if (left % right == 0) {
      console.log("multiple");
    } else {
      console.log("neither");
    }
  }
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
    return solution(arr);
  }
});
