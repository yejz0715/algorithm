//푸드파이트대회
function solution(food) {
  let left = "";
  food.forEach((item, index) => {
    index = index.toString();
    left += index.repeat(Math.floor(item / 2));
  });

  let right = [...left]
    .map((item) => Number(item))
    .reverse()
    .join("");
  let answer = left + 0 + right;
  return answer;
}
