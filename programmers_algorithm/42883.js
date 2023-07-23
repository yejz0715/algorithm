//큰 수 만들기
function solution(number, k) {
  let answer = "";
  let stack = [];
  for (let i = 0; i < number.length; i++) {
    //0-끝까지 갈꺼고

    //비어있으면 추가
    if (stack.length === 0) {
      stack.push(number[i]);
      continue;
    }

    while (true) {
      if (k === 0) break;
      if (stack.length === 0) break;
      if (number[i] <= stack[stack.length - 1]) break;

      //(stack 최근에 들어온 요소 < number[i])
      stack.pop();
      k--;
    }
    stack.push(number[i]);
  }
  return stack.splice(0, number.length - k).join("");
}
