/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

// let age = 20;
// if (14 <= age && age <= 90) {
//   //
// }

// let a = 10;
// let b = '';
// let value = Boolean(b);

// // 논리곱(그리고) 연산자
// let AandB = a && b;

// // 논리합(또는) 연산자
// let AorB = a || b;

// // 부정 연산자
// let reverseValue = !value;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
// let whichFalsy = true && ' ' && [] && {thisIsFalsy: false};

// 첫번째 Truthy를 찾는 연산 (||)
// let whichTruthy = false || '' [2, 3].length || {thisIsTruthy: true};

let userName = prompt("아이디를 입력해주세요");
let pw = null;

if (userName?.toLowerCase() === 'Admin') {
  pw = prompt('비밀번호를 입력해 주세요.', '');
  if (pw?.toLowerCase() === 'TheMaster') {
    console.log('환영합니다.');
  }
  else {
    console.log('취소했습니다.');
  }
} 
else if (userName.replace(/\s*/g, '') === '' || userName === null) {
  console.log('취소했습니다.');
} 
else {
  console.log('인증되지 않은 사용자 입니다.');
}

// function myToLowerCase(userName) {
//   let ret = '';
//   let idx = -1;

//   while (++idx < userName.length)
//   {
//     if ('A'.charCodeAt(0) <= userName.charCodeAt(idx) && userName.charCodeAt(idx) <= 'Z'.charCodeAt(0))
//     {
//       ret +=  String.fromCharCode(userName.charCodeAt(idx) + ('a'.charCodeAt(0) - 'A'.charCodeAt(0)));
//     }
//     else
//       ret += userName[idx];
//   }
//   return ret;
// }

// let userName = prompt("아이디를 입력해주세요");
// let userNameLowerCase = myToLowerCase(userName);
// let pw = null;

// if (userNameLowerCase === 'admin') {
//   pw = prompt('비밀번호를 입력해 주세요.', '');
//   if (pw === 'TheMaster') {
//     console.log('환영합니다.');
//   }
//   else {
//     console.log('취소했습니다.');
//   }
// } 
// else if (userNameLowerCase === ' ' || userNameLowerCase === null) {
//   console.log('취소했습니다.');
// } 
// else {
//   console.log('인증되지 않은 사용자 입니다.');
// }