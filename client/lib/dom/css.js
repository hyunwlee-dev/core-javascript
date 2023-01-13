function addClass(node, className) {
  if (typeof node === 'string')
    node = getNode(node);
  if (typeof className !== 'string')
    typeError('addClass함수의 두 번째 인자는 문자타입이어야 합니다.');
  node.classList.add(className);
}

function removeClass(node, className) {
  if (typeof node === 'string')
    node = getNode(node);
  if (!className) {
    node.className = '';
    return ;
  }
  if (typeof className !== 'string')
    typeError('removeClass함수의 두 번째 인자는 문자타입이어야 합니다.');
  // 인자를 전달하지 않을때는 다 밀어버리자!!
  node.classList.remove(className);
}

function toggleClass(node, className) {
  if (typeof node === 'string')
    node = getNode(node);
  if (typeof className !== 'string')
    typeError('toggleClass함수의 두 번째 인자는 문자타입이어야 합니다.');
  node.classList.toggle(className);
}

function getCss(node, prop) {
  if (typeof node === 'string')
    node = getNode(node);
  // 존재하지?
  if (!(prop in document.body.style)) {
    syntaxError('getCSS함수의 두번째 인자인 prop은 유효한 css속성이 아닙니다.');
  }
  return getComputedStyle(node)[prop];
}

function setCss(node, prop, value) {
  if (typeof node === 'string')
    node = getNode(node);
  if (!(prop in document.body.style)) {
    syntaxError('setCSS함수의 두번째 인자인 prop은 유효한 css속성이 아닙니다.');
  }
  if (!value)
    syntaxError('setCSS함수의 세번째 인자는 필수값입니다.');
  node.style[prop] = value;
}

function css(node, prop, value) {
  if (!value) return getCss(node, props);
  setCss(node, prop, value);
}