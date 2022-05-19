//정규표현식
let str =
  "Upon leaving the East Australian Current,(888*%$^&%0928375)Marlin and Dory";
//console.log(str.test("Dory"));
console.log(/Dory/.test(str));
console.log(str.search("Dory"));
console.log(str.replace("Dory", "DORY"));

//% index
console.log(str.search(/\%/));
//0,2,5 아닌 숫자
console.log(str.match(/[1346789]/g));
