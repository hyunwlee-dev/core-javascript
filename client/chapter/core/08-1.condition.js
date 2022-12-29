/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

const ans = globalThis.prompt('숫자 입력해봐여!');

let result = ans > 0 ? 1
            : ans < 0 ? -1
            : 0;
alert(result);

if (ans > 0) {
  console.log('1');
}
else if (ans < 0) {
  console.log('-1');
}
else {
  console.log('0');
}

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = 'yes';

// 영화 볼거니?
let goingToWatchMovie = 'no';

let answer = didWatchMovie ? '' : goingToWatchMovie;

if (didWatchMovie === 'yes') {
  console.log('그거 재밌더라..?');
} else if (goingToWatchMovie === 'yes') {
  console.log('너무 설렌다~~');
} else {
  console.log('음... 난 별루');
}

let movieMessage = (didWatchMovie.includes('yes')) ? '그거 재밌더라' :
(goingToWatchMovie === 'yes') ? '너무 설렌다~~' : '난 별루...';
// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식