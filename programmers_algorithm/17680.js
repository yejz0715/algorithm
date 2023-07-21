//캐시
function solution(cacheSize, cities) {
  const hit = 1;
  const miss = 5;
  let count = 0;
  let cacheArr = [];

  if (cacheSize === 0) return cities.length * 5; //예외처리

  cities.map((citiesItem) => {
    //소문자로 통일
    citiesItem = citiesItem.toLowerCase();

    //index (없으면 -1)
    const findIndex = cacheArr.findIndex(
      (cacheItem) => cacheItem === citiesItem
    );

    //특정요소 확인하고, 배열 앞에 추가
    if (findIndex !== -1) {
      cacheArr.splice(findIndex, 1); //있으면 같은 요소 제거(오래된 요소로 )
      count += hit;
    } else {
      count += miss;
    }
    cacheArr.unshift(citiesItem);

    if (cacheArr.length > cacheSize) {
      //배열이 캐시크기보다 크면 가장 오래된 요소 제거
      cacheArr.pop();
    }
  });
  return count;
}
