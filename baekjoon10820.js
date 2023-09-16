//문자열 분석
function solution(input) {
    let asciiNum = 0;
    const ascii = Array(4).fill(0);
    for (let i = 0; i < input.length; i++) {
        asciiNum = input.charCodeAt(i);
        if (97 <= asciiNum && asciiNum <= 122) {
            ascii[0] += 1;
        } else if (65 <= asciiNum && asciiNum <= 90) {
            ascii[1] += 1;
        } else if (48 <= asciiNum && asciiNum <= 57) {
            ascii[2] += 1;
        } else if (asciiNum === 32) {
            ascii[3] += 1;
        } else {
            continue;
        }
    }
    return ascii.join(" ");
}

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < input.length; i++) {
    if (1 <= input[i].length) {
        console.log(solution(input[i]));
    }
}
