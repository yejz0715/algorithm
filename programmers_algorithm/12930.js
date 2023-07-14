//이상한 문자 만들기
function solution(s) {
  let answer = "";
  let strings = s.split(" ");
  for (let i = 0; i < strings.length; i++) {
    for (let j = 0; j < strings[i].length; j++) {
      if (j % 2 === 0) {
        answer += strings[i][j].toUpperCase();
      } else {
        answer += strings[i][j].toLowerCase();
      }
    }
    if (i !== strings.length - 1) {
      answer += " ";
    }
  }
  return answer;
}
