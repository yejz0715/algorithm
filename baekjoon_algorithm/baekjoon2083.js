// 럭비클럽
/*
Joe 16 34
Bill 18 65
Billy 17 65
Sam 17 85
# 0 0

*/
const readline = require("readline");
function solution(input) {
  let answer = "";
  for (i = 0; i < input.length; i++) {
    let memberName = input[i].split(" ")[0];
    let memberAge = Number(input[i].split(" ")[1]);
    let memberKg = Number(input[i].split(" ")[2]);
    if (memberAge > 17 || memberKg >= 80) {
      console.log(memberName, "Senior");
    } else {
      console.log(memberName, "Junior");
    }
  }
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
arr = [];
rl.on("line", (line) => {
  arr.push(line);
  if (line === "# 0 0") {
    arr.pop();
    return solution(arr);
  }
});
