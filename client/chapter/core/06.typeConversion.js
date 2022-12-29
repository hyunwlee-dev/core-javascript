/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2022;

console.log(YEAR);
console.log(typeof String(YEAR));

console.log(String(undefined));
// undefined -> 'undefined'
// null -> 'null'
let days = null;
console.log(String(days));

// boolean -> 'true' or 'false'
let isKind = true;
console.log(isKind + '');
console.log(String(isKind));


/* 데이터 → 숫자 ----------------------------------------------------------- */
// undeinfed -> NaN
console.log(Number(undefined));

// null -> 0
console.log(Number(null));

// boolean
let cutie = true;
console.log(cutie / 1);

// string 숫자형 문자
let num = '   123   ';
console.log(num / 1);

// numeric string
let width = '320px';
console.log(parseInt(width, 10));


/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, '' -> false
// 위에 나열한 것 이외의 것들 

console.log(Boolean(''));
console.log(!!null);