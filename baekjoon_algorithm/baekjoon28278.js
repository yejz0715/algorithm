//스택2
function solution(tc, input) {
    const stack = [];
    const answer = [];
    let num = 0;
    let i = 0;

    while (i !== tc) {
        if (input[i].length > 2) {
            num = input[i].split(" ")[1];
            stack.push(Number(num));
        } else {
            num = Number(input[i]);
            switch (num) {
                case 2:
                    stack.length !== 0
                        ? answer.push(stack.pop())
                        : answer.push(-1);
                    break;
                case 3:
                    answer.push(stack.length);
                    break;
                case 4:
                    stack.length !== 0 ? answer.push(0) : answer.push(1);
                    break;
                case 5:
                    stack.length !== 0
                        ? answer.push(stack[stack.length - 1])
                        : answer.push(-1);
                    break;
            }
        }
        i++;
    }

    return answer.join("\n");
}

const [tc, ...input] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

console.log(solution(Number(tc), input));
