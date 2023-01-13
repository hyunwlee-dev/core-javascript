/* ---------------------------------------------------------------------- */
/* DOM traversal                                                          */
/* ---------------------------------------------------------------------- */


/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

/* 문서 대상 확인 */
// - matches
// - contains

// let first = document.querySelector('.first');
let [first, second] = document.querySelectorAll('span');
// console.log(first);
// console.log(second);

console.log(getNode('.first'));

// 문서 대상 확인
// - matched
//          선택자 안에 class || id를 가지고 있는 대상이 있어?
console.log(getNode('.first').matches('.first'));

// - contains 
//          선택자의 자식들 중에 해당 element가 있어?
console.log(getNode("h1").contains(getNode(".first")));