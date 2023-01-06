/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */


// const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
//   return moneyA + moneyB + moneyC + moneyD;
// }

let arr = [1, 2, 3, 4];
let arr2 = [...arr];

const calculatorTotal = (...args) => {

  console.log(args);
  return ;
}

// let resultX = calculateTotal(10000, 8900, 1360, 2100);
// let resultY = calculateTotal(21500, 3200, 9800, 4700);
// let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a, b, c, d) => a + b + c + d;

// 화살표 함수와 this

function normalFunction() {
  console.log('일반함수 : ', this);
}

const arrowFunction = () => {
  console.log('화살표함수 : ', this);
}

normalFunction();
arrowFunction();

// 객체의 메서드로 함수를 실행할 경우는 일반함수로 실행해야 this가 객체를 찾습니다.
// 메서드 안에서의 함수는 this를 찾기 위해서는 arrowFunction이 오히려 좋아.

const user = {
  name: 'tiger',
  age: 32,
  address: '서울시 중랑구 면목동',
  grades: [80, 90, 100],
  totalGrades: function() {

    function foo() {
      console.log('foo : ', this);
    }

    const bar = () => {
      console.log('bar : ', this);
    }
    // foo();
    foo.call(user);
    bar();
  }
}

user.totalGrades();
/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
  let result = 1;
  for (let i = 0; i < powerCount; i++) {
    result *= numeric;
  }
  return result;
}

let powExpression = (numeric, powerCount) => Array(powerCount).fill(null).reduce((acc) => (acc * numeric), 1);

// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {
  let result = '';
  for (let i = 0; i < repeatCount; ++i) {
    result += text;
  }
  return result;
}

let repeatExpression = (text, repeatCount) => {
  Array(repeatCount).fill(null).reduce(acc => acc + text, '');
}