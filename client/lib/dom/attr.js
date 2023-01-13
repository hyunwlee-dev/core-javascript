// IFFE 패턴으로 만들어 보시오
// 요즘은 모듈화를 쓰는 추세
// const attr = (function() {
//   function getAttr(node, prop) {}
//   function setAttr(node, prop) {}
//   function attr(node, prop) {}
//   // incapsulation //캡슐화
//   return attr;
// })()

function getAttr(node, prop) {
  if (typeof node === 'string') {
    node = getNode(node);
  }
 return node.getAttribute(prop);
}

function setAttr(node, prop, value) {
  // validation
  if (typeof node === 'string') node = getNode(node);
  if (typeof prop !== 'string') throw new TypeError('setAttr 함수의 두 번째 인자는 문자 타입이어야 합니다.');
  if (prop.includes('data')) {
    let rest = prop.slice(5);
    node.dataset[rest] = value;
  }
  if (!value) throw new SyntaxError('setAttr 함수의 세 번째 인자는 필수값입니다.');
  
  node.setAttr(prop, value);
}

const attr = (node, prop, value) => !value ? getAttr(node, prop) : setAttr(node, prop, value);
