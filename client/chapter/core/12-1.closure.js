/* ---------------------------------------------------------------------- */
/* Closure.                                                               */
/* ---------------------------------------------------------------------- */

function first() {
  let x = 10;

  function second() {
    let y = 30;
    x + y;
  }

  return second;
}

const user = first()();

// 함수는 함수 자체가 태어난 환경을 기억한다.


// 클로저란?
// 전역의 오염을 막기 위해
function number() {
  let count = 0;

  function inner() {
    return ++count;
  }
  // return () => ++count;
  return inner;
}

const counter = number();
// console.log(count);


function handler() {
  let isClicked = false;
  // console.log(this);
  return function() {
    console.log(this); // .first
    if (isClicked === true) {
      this.style.background = 'transparent';
    }
    else {
      this.style.background = 'red';
    }
    isClicked = !isClicked;
  } 
}

document.querySelector('.first').addEventListener('click', handler());
