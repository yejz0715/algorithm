const { json } = require("stream/consumers");

const me = {
  firstName: "Lee",
  lastName: "Yeji",
  plan: {
    morning: "Eat breakfast and watch lectures",
    afternoon: "Study Javascript in a cafe",
    dinner: "Eat and spend time with my boyfriend",
    night: "Review what I learned today",
  },
  studySubjects: ["JS", "Typescript", "ReactJS", "VueJS", "NestJS"],
  favoriteFood: "Pizza",
  introduce: introduceMe,
};

// function introduceMe() {
//   let introMsg = `Hi! I'm ${this.lastName}`;
//   console.log(introMsg);
// }

// 1. firstName과 lastName을 연결하여 하나의 문자열로 만든 후, userName이라는 변수에 담아 출력하여 보세요.
const userName = me.firstName + me.lastName;
console.log(userName);

// 2. plan 중 dinner에 구조분해할당을 이용해 접근한 후, 문자열에 boyfriend라는 단어가 몇 번째 인덱스에 위치해있는지 출력해보세요. (출력형식: boyfriend는 i번째)
const {
  //lastName,
  plan: { morning, afternoon, dinner, night },
  studySubjects,
} = me;
const indexBoy = dinner.split(" ").indexOf("boyfriend") + 1;
console.log(indexBoy);

// 3. studySubjects에 요소들 중 JS를 포함하는 문자열을 찾아 Javascript로 변경하고, changedSubjects라는 이름의 변수를 만들어 새로운 배열을 저장하세요. + 출력

let changedSubjects = studySubjects
  .join() //문자열로 변경
  .replaceAll("JS", "Javascript") //String-replaceAll() 사용 JS->Javascript
  .split(","); // ','기준으로 쪼개고 배열에 저장 split:문자열을 나누고 배열로 변환
console.log(changedSubjects);

// 4. 2번에서 저장한 changedSubjects 요소를 아래와 같은 형태로 하나씩 출력하세요. (출력 형식 - 1. Javascript 2. Typescript

const indexSubjects = changedSubjects.map(
  (changedSubjects, index) => ` ${index + 1}. ${changedSubjects}`
);
console.log(indexSubjects.join().replaceAll(","));

// hint: this를 사용하여 객체의 속성에 접근할 수 있습니다.
// 5. 다음과 같은 결과를 리턴하는 introduceMe함수를 완성해보세요. (출력 형식 - Hi! I'm Yeji Lee, my favorite food is Pizza!!)

const { lastName } = me;
function introduceMe() {
  let introMsg = `Hi! I'm ${this.lastName}`;
  //return introMsg;
  console.log(introMsg);
}
introduceMe(this);
