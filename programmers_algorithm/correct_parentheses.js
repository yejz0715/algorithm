//올바른 괄호(correctParentheses)
function solution(s) {
  let items = s.split("");
  let count = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i] === "(") {
      count += 1;
    } else {
      count -= 1;
    }

    if (count < 0) {
      return false;
    }
  }
  if (count === 0) {
    return true;
  } else {
    return false;
  }
}
//console.log(solution(")())(()"));
