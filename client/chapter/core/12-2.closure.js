function earth() {
  let water = true;
  let apple = {
    founder: 'Steve Jobs',
    ceo: 'Tim Cook',
    product: ['iphone', 'macbook', 'macStudio', 'appleWatch']
  };
  let o2 = 9999;
  // function tiger() {
  //   console.log(water, o2);
  // }
  // return tiger;
  return function() {
    console.log(water, o2);
  }
}

const ufo = earth();

// GC가 화성 강한 자기장에 팅