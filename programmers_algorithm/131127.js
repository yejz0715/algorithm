//할인행사
function solution(want, number, discount) {
  let answer = 0;
  let products = discount.slice(0, 10); //미리 10개의 요소를 갖고있는 배열 생성[0-9]
  let countArr = [];

  //할인품목 [1-10]부터 10개씩 순회
  for (let i = 1; i <= discount.length - 9; i++) {
    //원하는 상품과 할인품목 비교해서 같은 상품 개수 구함
    countArr = want.map(
      (wantItem) =>
        products.filter((productItem) => wantItem === productItem).length || 0
    );
    //JSON.stringify(): 배열을 문자열로 비교
    if (JSON.stringify(countArr) === JSON.stringify(number)) {
      answer++;
    }

    //배열 맨 왼쪽요소 제거, 맨 오른쪽 요소 하나 추가
    products.shift();
    products.push(discount[i + 9]);
    console.log(products);
  }
  return answer;
  //number 와 비교해서 같다면 +1
}
console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);
