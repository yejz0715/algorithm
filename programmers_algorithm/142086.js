//가장 가까운 같은 글자
function solution(s) {
  let stringArr = [];
  let numArr = [];

  for (let i = 0; i < s.length; i++) {
    if (i == 0) {
      //처음은 고정값
      stringArr.push(s[i]);
      numArr.push(-1);
    } else {
      if (!stringArr.includes(s[i])) {
        stringArr.push(s[i]);
        numArr.push(-1);
      } else {
        let lastIndex = stringArr.lastIndexOf(s[i]);
        stringArr.push(s[i]);
        numArr.push(i - lastIndex);
      }
    }
  }
  return numArr;
}
console.log(solution("banana"));
