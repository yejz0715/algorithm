//줄세기
var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString();
let count = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] === "\n") {
    count += 1;
  }
}
console.log(count);
