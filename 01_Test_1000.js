const readline = require("readline");

//a+b : 1 2 =3
function solution(input) { 
	let result=input; //입력받은 값을 
   let numArr = result.split(" "); // split으로 공백기준으로 쪼갠 다음 배열 numArr에 넣음
   const a= Number(numArr[0]) //string->number 
   const b=Number(numArr[1])
    answer=a+b; 
    //console.log(answer);
    return answer;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});