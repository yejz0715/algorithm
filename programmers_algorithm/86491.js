//최소직사각형
function solution(sizes) {
  var answer = 0;
  let left = [];
  let right = [];
  sizes.map((item) =>
    item
      .sort((a, b) => b - a)
      .filter((item, index) =>
        index === 0 ? left.push(item) : right.push(item)
      )
  );
  answer = Math.max(...left) * Math.max(...right);
  return answer;
}
