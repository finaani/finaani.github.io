var tl = new TimelineMax({
  repeat: -1
});
tl.to('div', 1, {
  y: 200
});
tl.to('div', 1, {
  rotation: 360
}, '+=1');
tl.to('div', 1, {
  y: 0,
  ease: Elastic.easeOut
});

//TweenMax.from('div', 3, {
 // x: 100,
  //opacity: 0,
  //repeat: -1,
  //yoyo: true,
  //yoyoEase: true,
  //ease: Elastic.easeOut

//})
