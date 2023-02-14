//숫자놀이
const readline = require("readline");
const solution = (input) => {
  let numM = Number(input.split(" ")[0]);
  let numN = Number(input.split(" ")[1]);
  let numArr = [];
  let tmp = "";
  let answer = "";
  let tmpArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = numM; i <= numN; i++) {
    numArr.push(i);
  }
  for (let j = 0; j < numArr.length; j++) {
    if (Number(numArr[j]) / 10 < 1) {
      tmp += tmpArr[Number(numArr[j]) % 10];
      tmp += "\n";
    } else {
      tmp += tmpArr[Math.floor(Number(numArr[j]) / 10)] + " ";
      tmp += tmpArr[Number(numArr[j]) % 10];
      tmp += "\n";
    }
  }

  tmp = tmp
    .split("\n")
    .map((item) => item.split(" "))
    .sort()
    .map((item) => item.map((item) => tmpArr.indexOf(item)).join(""))
    .filter((item) => item !== "-1")
    .filter((item, index) =>
      (index + 1) % 10 === 0 ? (answer += item + "\n") : (answer += item + " ")
    );

  return answer;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  rl.close();
  console.log(solution(line));
});
