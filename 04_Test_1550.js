const readline = require("readline");


//16진수->10진수( 최대 길이는 6글자, 음수x)
function solution(input) { 
<<<<<<< HEAD
 var arr=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F',];
arr['A']=10;
arr['B']=11;
arr['C']=12;
arr['D']=13;
arr['E']=14;
arr['F']=15;
console.log(`${arr}`);
   //let result=parseInt(input,16);
    
=======
input.length
  let result = input.split(" "); 
   let result2=parseInt(result,16);  
   //parseInt:문자열을 정수로 반환(문자열string,사용할진법16(16진수->10진수))
    
    console.log(result2);
   
>>>>>>> ffdc0e7015ad47a3c871e0cdec309b6b09f02613
   
   console.log(result);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(solution(line));
});
