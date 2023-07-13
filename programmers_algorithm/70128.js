// 내적
function solution(a, b) {
  let answer = 0;
  a.map((aItem, aIndex) => {
    b.map((bItem, bIndex) => {
      if (aIndex !== bIndex) {
        return;
      } else {
        answer += aItem * bItem;
      }
    });
  });
  return answer;
}
