/* ---------------------------------------------------------------------- */
/* Functions → Expression                                                 */
/* ---------------------------------------------------------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calcTotal(10000, 8900, 1360, 2100);
let resultY = calcTotal(21500, 3200, 9800, 4700);
let resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function() {
  // arguments
  console.log(arguments);

  let total = 0;

  // 유사배열 - 배열로 만드는 법 
  let arr = Array.from(arguments) // static method
  // let arr = Array.prototype.slice.call(arguments);
  // Array야 slice좀 빌려쓰자

  arr.forEach(function(item, index) {
    console.log(item);
  });

  return arr.reduce(function (acc, current) {
    return acc + current;
  })

  // for (let i = 0; i < arguments.length; ++i) {
  //   total += arguments[i];
  // }

  // for (let value of arguments) {
    // total += value;
  // }
  // return total;
};


calculateTotal(100, 500, 300, 150, 400, 150);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function(){};



// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello () {};


// 콜백 함수 (표현)식
let callbackFunctionExpression;


// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;
