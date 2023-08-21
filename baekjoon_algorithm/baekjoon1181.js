//단어정렬
/*
13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours
*/

const readline = require("readline");
function solution(input) {
    let answer = "";
    input.sort();
    input.sort((a, b) => a.length - b.length);
    let sortArr = new Set(input);

    sortArr.forEach((item) => {
        answer += item + "\n";
    });

    return answer;
}
let arr = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    arr.push(line);
    if (arr.length - 1 === Number(arr[0])) {
        arr.shift();
        console.log(solution(arr));
        rl.close();
    }
});
