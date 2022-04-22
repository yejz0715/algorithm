let music = {
  name: "스토커",
  singer: "10cm",
  detail: {
    regDate: "2014-11-19",
    genre: ["rock"],
    lyrics: `나도 알아 나의 문제가 무엇인지
        난 못났고 별 볼일 없지
        그 애가 나를 부끄러워 한다는 게
        슬프지만 내가 뭐라고
        빛나는 누군갈 좋아하는 일에
        기준이 있는 거라면
        이해할 수 없지만 할 말 없는 걸
        난 안경 쓴 샌님이니까
        내가 이렇게 사랑하는데 이렇게 원하는데
        나는 아무것도 할 수 없고 바라만 보는데도
        내가 그렇게 불편할까요 내가 나쁜 걸까요
        아마도 내일도 그 애는 뒷모습만`,
  },
};

/** 
   * 1. `music`객체를 이용하여 아래와 같은 형식으로 출력해 보세요.
    10cm는 10CM로 변경하여 출력해 주세요.(문자열 메서드 중 대문자로 출력하는 메서드를 사용하세요.)
    출력 결과 : 노래 제목은 스토커로, 가수는 10CM입니다.
   * */
let {
  name,
  singer,
  detail: { regDate, genre, lyrics },
} = music;

console.log(`노래 제목은 ${name}, 가수는 ${singer.toUpperCase()}입니다.`);
/**
   * 2. regDate를 가져와 yyyy년 mm월 dd일 형식으로 1) 변경하고 2) formattedDate에 저장한 후, 출력하여 보세요.
    출력 결과 : 2014년 11월 19일
    (Date 사용하지 않고 구현해 보세요.)
   */
let formattedDate;
formattedDate = regDate.replace("-", "년 ").replace("-", "월 ");
console.log(formattedDate + "일");
/**
   * 3. 아래 updatedGenre에 1) genre의 내용을 저장한 후, 2) "folk"를 추가한 후 인덱스를 붙여 요소를 출력해 보세요.
    출력 결과 : 1. rock
                2. folk
  
    (출력시, for문 또는 map을 사용하여 출력하세요.)          
   */
let updatedGenre;
updatedGenre = genre;

updatedGenre.push("folk");
updatedGenre = updatedGenre.map((g, index) => index + 1 + ". " + g + "\n");
console.log(updatedGenre.join().replace(",", ""));

/**
 * 4. lyrics 중 `안경`이라는 단어가 1) 포함되어 있는지 확인하고
 * 2) 있다면 해당 단어를 `선글라스`로 변경하여 출력해 보세요. (문자열 메서드를 사용하세요.)
 */
lyrics.includes("안경")
  ? console.log(lyrics.replaceAll("안경", "선글라스"))
  : console.log("없음");
