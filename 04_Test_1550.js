const readline = require("readline");



function solution(input) { 
 
   let result=parseInt(input,16);
    
    console.log(result);
   
   
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});