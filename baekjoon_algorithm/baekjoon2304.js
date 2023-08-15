//창고다각형
/*
7
2 4
11 4
15 8
4 6
5 3
8 10
13 6
*/
const readline = require("readline");

function solution(input) {
    const length = input.length;
    let answer = 0;
    let arr = input
        .map((item) => item.split(" ").map(Number))
        .sort((a, b) => a[0] - b[0]);

    //가장 큰 높이와 index
    let maxHight = 0;
    for (let line of arr) {
        const [num, hight] = line;
        maxHight = Math.max(hight, maxHight);
    }
    const maxIndex = arr.findIndex((item) => item[1] === maxHight);

    let currX = arr[0][0];
    let currY = arr[0][1];

    // maxHight 기준 왼쪽
    for (let i = 1; i <= maxIndex; i++) {
        const [num, hight] = arr[i];
        if (currY <= hight) {
            answer += (num - currX) * currY;
            currX = num;
            currY = hight;
        }
    }

    currX = arr[length - 1][0];
    currY = arr[length - 1][1];

    //maxHight 기준 오른쪽
    for (let i = length - 2; i >= maxIndex; i--) {
        const [num, hight] = arr[i];
        if (rightY <= hight) {
            answer += (rightX - num) * rightY;
            rightX = num;
            rightY = hight;
        }
    }

    answer += maxHight;
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
