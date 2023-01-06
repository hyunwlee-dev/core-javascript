/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr = [10, 100, 1000, 10000];

function isArray(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array';
}
function isNull(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null';
}

console.log(typeof arr);
console.log(Array.isArray(arr));

/* 요소 순환 -------------------------------------------------------------- */

const user = {};

// forEach

/* ---------------------- arrow function은 this를 찾지 않는다 ---------------------- */
// arr.forEach((item, index) => {
//   this[index] = item;
// }, user);

arr.forEach(function(item, index) {
  this[index] = item;
}, user);

const span = document.querySelectorAll('span');

// 에벤트 위임?
span.forEach((item) => {
  item.addEventListener('click', function() {
    console.log(this);
  });
  item.addEventListener('click', (e)=> {
    console.log(e.target.style.background = 'orange');
  });
});

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
// arr.reverse();

// splice
arr.splice(1, 0, 23, 5);
console.log(arr);

// sort
// 반환 값 < 0 : a가 b보다 앞에 있어야 한다
// 반환 값 = 0 : a와 b의 순서를 바꾸지 않는다
// 반환 값 > 0 : b가 a보다 앞에 있어야 한다
arr.sort((a, b) => {
  return (a - b);
});
console.log(arr);

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map
let todo = ['밥먹기', '미용실가기', '코딩공부하기'];
let template = todo.map(todoList => {
  return `<li>${todoList}</li>`;
});
console.log(template);
template.forEach(item => {
  document.body.insertAdjacentElement('beforeend', item);
})

let newArray = arr.map(item => item * 2);

console.log(newArray);

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
console.log(arr.indexOf(100));
// lastIndexOf
// includes
console.log(arr.includes(10));

/* 요소 찾기 -------------------------------------------------------------- */


// find
const users = [
  {id:1,name:'로운'},
  {id:2,name:'승택'},
  {id:3,name:'연주'},
]

const find = users.find((item) => {
  return item.id < 5;
});

console.log(find); // 로운님만 나옴,

// findIndex
const findIndex = users.findIndex(item => {
  return item.id === 3;
})

console.log(findIndex);

// fillter
let result = arr.filter(number => {
  return number > 100;
});
console.log(result);

/* 요소 걸러내기 ----------------------------------------------------------- */
/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

const friends = [
  {
    name: "윤보라",
    age: 28,
    job: "작꼬저",
  },
  {
    name: "이로운",
    age: 23,
    job: "배고픈 개발자",
  },
  {
    name: "오승택",
    age: 21,
    job: "물음표살인마",
  },
];

// reduce
let age = friends.reduce((cal, curr) => {
  return cal + curr.age;
}, 0);

console.log(age);

let template2 = todo.reduce((acc, cur, index)=>{
  return /* html */`<li>할일 ${index + 1} : ${cur}</li>`;
}, '');

console.log(template2);
console.log(age);
// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

let str = '성찬 보경 일범 세민 형진 주현';

// split : 문자 -> 배열
let nameArray = str.split(' ');
console.log(nameArray);

// join : 배열 -> 문자
console.log(nameArray.join(' / '));