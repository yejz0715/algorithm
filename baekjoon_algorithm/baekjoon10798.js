//세로읽기
/*
ABCDE
abcde
01234
FGHIJ
fghij
 */

const readline = require("readline");
function solution(input) {
    let answer = [];

    const maxLength = Math.max(...input.map((item) => item.length));

    const one = input[0].split("");
    const two = input[1].split("");
    const three = input[2].split("");
    const four = input[3].split("");
    const five = input[4].split("");

    for (let i = 0; i <= maxLength; i++) {
        answer.push(one[i]);
        answer.push(two[i]);
        answer.push(three[i]);
        answer.push(four[i]);
        answer.push(five[i]);
    }

    return answer.join("");
}
let arr = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    arr.push(line);
    if (arr.length === 5) {
        console.log(solution(arr));
        rl.close();
    }
});
