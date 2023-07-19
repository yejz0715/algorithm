//타겟넘버
//배열에 있는 수를 순서대로 더하고 빼서 target이 될수 있는 방법의 수 구하기
function solution(numbers, target) {
  let count = 0;
  let length = numbers.length;

  const dfs = (i, sum) => {
    //종료조건
    if (i === length) {
      if (sum === target) {
        count++;
      }
    } else {
      //재귀호출
      dfs(i + 1, sum + numbers[i]);
      dfs(i + 1, sum - numbers[i]);
    }
  };
  dfs(0, 0);
  return count;
}
