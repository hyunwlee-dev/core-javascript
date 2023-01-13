/* ---------------------------------------------------------------------- */
/* Event Handling                                                         */
/* ---------------------------------------------------------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])

// const first = getNode('.first');
// function handler() {
//   console.log('hit !');

//   // 너무 쎄요
//   // getNode('.second').remove();
//   css('.second', 'display', 'none');
// }
// first.addEventListener('click', handler);

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener


// function bindEvent(node, type, handler) {
//   if (typeof node === 'string') {
//     node = getNode(node);
//   }
//   if(!(/mouseenter|click|mousemove|mouseleave/g.test(type))){
//     typeError('bindEvent 함수의 두 번째 인자는 유효한 이벤트 타입 이어야 합니다.')
//   }
//   node.addEventListener(type, handler);
//   // 이게 왜 클로져? 
//   return () => node.removeEventListener(type, handler);
// }

// const off = bindEvent();
// off();

// bindEvent('.first', 'click', handler);

const first = getNode('.first');
const second = getNode('.second');
const ground = getNode('.ground');
const ball = getNode('.ball');

function debounce(callback, limit = 100) {
  let timeout
  return function(...args) {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
          callback.apply(this, args)
      }, limit)
  }
}

function throttle(callback, limit = 100) {
  let waiting = false
  return function() {
      if(!waiting) {
          callback.apply(this, arguments)
          waiting = true
          setTimeout(() => {
              waiting = false
          }, limit)
      }
  }
}

ground.addEventListener('mousemove', debounce(() => {

}, 1000));

ground.addEventListener('click', function(e) {
  console.log(e.offsetX, e.offsetY);
  ball.style.transform = `translate(${e.offsetX - ball.offsetWidth / 2}px, 
  ${e.offsetY - ball.offsetHeight / 2}px)`;
})


ground.addEventListener('mousemove', function(e) {
  console.log(e.offsetX, e.offsetY);
  let posX = e.offsetX;
  let posY = e.offsetY;

})