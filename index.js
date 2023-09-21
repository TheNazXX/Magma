const framesImages = [
  "",
  "./assets/images/frames/frames00007.png",
  "./assets/images/frames/frames00010.png",
  "./assets/images/frames/frames00013.png",
  "./assets/images/frames/frames00016.png",
  "./assets/images/frames/frames00019.png",
  "./assets/images/frames/frames00022.png",
  "./assets/images/frames/frames00025.png",
  "./assets/images/frames/frames00028.png",
  "./assets/images/frames/frames00031.png",
  "./assets/images/frames/frames00034.png",
  "./assets/images/frames/frames00037.png",
  "./assets/images/frames/frames00040.png",
  "./assets/images/frames/frames00043.png",
  "./assets/images/frames/frames00046.png",
  "./assets/images/frames/frames00049.png",
  "./assets/images/frames/frames00052.png",
  "./assets/images/frames/frames00055.png",
  "./assets/images/frames/frames00058.png",
  "./assets/images/frames/frames00061.png",
  "./assets/images/frames/frames00064.png",
  "./assets/images/frames/frames00067.png",
  "./assets/images/frames/frames00070.png",
  "./assets/images/frames/frames00073.png",
  "./assets/images/frames/frames00076.png",
  "./assets/images/frames/frames00079.png",
  "./assets/images/frames/frames00082.png",
  "./assets/images/frames/frames00085.png",
  "./assets/images/frames/frames00088.png",
  "./assets/images/frames/frames00091.png",
  "./assets/images/frames/frames00094.png",
  "./assets/images/frames/frames00097.png",
  "./assets/images/frames/frames00100.png",
  "./assets/images/frames/frames00103.png",
  "./assets/images/frames/frames00106.png",
  "./assets/images/frames/frames00109.png",
  "./assets/images/frames/frames00112.png",
  "./assets/images/frames/frames00115.png",
  "./assets/images/frames/frames00118.png",
  "./assets/images/frames/frames00121.png",
  "./assets/images/frames/frames00124.png",
  "./assets/images/frames/frames00127.png",
  "./assets/images/frames/frames00130.png",
  "./assets/images/frames/frames00133.png",
  "./assets/images/frames/frames00136.png",
  "./assets/images/frames/frames00139.png",
  "./assets/images/frames/frames00142.png",
  "./assets/images/frames/frames00145.png",
  "./assets/images/frames/frames00148.png",
  "./assets/images/frames/frames00151.png",
  "./assets/images/frames/frames00154.png",
  "./assets/images/frames/frames00157.png",
  "./assets/images/frames/frames00160.png",
  "./assets/images/frames/frames00163.png",
  "./assets/images/frames/frames00166.png",
  "./assets/images/frames/frames00169.png",
  "./assets/images/frames/frames00172.png",
  "./assets/images/frames/frames00175.png",
  "./assets/images/frames/frames00178.png",
  "./assets/images/frames/frames00181.png",
  "./assets/images/frames/frames00184.png",
  "./assets/images/frames/frames00187.png",
  "./assets/images/frames/frames00190.png",
  "./assets/images/frames/frames00193.png",
  "./assets/images/frames/frames00196.png",
  "./assets/images/frames/frames00199.png",
  "./assets/images/frames/frames00202.png",
];

const bridgesImages = [
  "",
  "./assets/images/bridges/bridges00004.png",
  "./assets/images/bridges/bridges00007.png",
  "./assets/images/bridges/bridges00010.png",
  "./assets/images/bridges/bridges00013.png",
  "./assets/images/bridges/bridges00016.png",
  "./assets/images/bridges/bridges00019.png",
  "./assets/images/bridges/bridges00022.png",
  "./assets/images/bridges/bridges00025.png",
  "./assets/images/bridges/bridges00028.png",
  "./assets/images/bridges/bridges00031.png",
  "./assets/images/bridges/bridges00034.png",
  "./assets/images/bridges/bridges00037.png",
  "./assets/images/bridges/bridges00040.png",
  "./assets/images/bridges/bridges00043.png",
  "./assets/images/bridges/bridges00046.png",
  "./assets/images/bridges/bridges00049.png",
  "./assets/images/bridges/bridges00052.png",
  "./assets/images/bridges/bridges00055.png",
  "./assets/images/bridges/bridges00058.png",
  "./assets/images/bridges/bridges00061.png",
  "./assets/images/bridges/bridges00064.png",
  "./assets/images/bridges/bridges00067.png",
  "./assets/images/bridges/bridges00070.png",
  "./assets/images/bridges/bridges00073.png",
  "./assets/images/bridges/bridges00076.png",
  "./assets/images/bridges/bridges00079.png",
  "./assets/images/bridges/bridges00082.png",
  "./assets/images/bridges/bridges00085.png",
  "./assets/images/bridges/bridges00088.png",
  "./assets/images/bridges/bridges00091.png",
  "./assets/images/bridges/bridges00094.png",
  "./assets/images/bridges/bridges00097.png",
  "./assets/images/bridges/bridges00100.png",
  "./assets/images/bridges/bridges00103.png",
  "./assets/images/bridges/bridges00106.png",
  "./assets/images/bridges/bridges00109.png",
  "./assets/images/bridges/bridges00112.png",
  "./assets/images/bridges/bridges00115.png",
  "./assets/images/bridges/bridges00118.png",
  "./assets/images/bridges/bridges00121.png",
  "./assets/images/bridges/bridges00124.png",
  "./assets/images/bridges/bridges00127.png",
  "./assets/images/bridges/bridges00130.png",
  "./assets/images/bridges/bridges00133.png",
  "./assets/images/bridges/bridges00136.png",
  "./assets/images/bridges/bridges00139.png",
  "./assets/images/bridges/bridges00142.png",
  "./assets/images/bridges/bridges00145.png",
  "./assets/images/bridges/bridges00148.png",
  "./assets/images/bridges/bridges00151.png",
  "./assets/images/bridges/bridges00154.png",
  "./assets/images/bridges/bridges00157.png",
  "./assets/images/bridges/bridges00160.png",
  "./assets/images/bridges/bridges00163.png",
];


  
(function () {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
  });

  locoScroll.on('scroll', ScrollTrigger.update);

  ScrollTrigger.scrollerProxy('#main', {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },

    pinType: document.querySelector('#main').style.transform ? 'transform' : 'fixed',
  });

  ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
  ScrollTrigger.refresh();
})();

(function(){
  const textPage2 = document.querySelector('#page2>h1');
  const textPage4 = document.querySelector('#page4>h1');

  // textColorTransform(textPage2);
  // textColorTransform(textPage4);
})();


var clutter = "";

document.querySelector("#page4>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page4>h1").innerHTML = clutter;
})

gsap.to("#page4>h1>span",{
  scrollTrigger:{
      trigger:`#page4>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub: .5,
  },
  stagger:.2,
  color:`#fff`
})

function textColorTransform(textPage){
  let clutter = '';

  textPage
  .textContent.split('')
  .forEach(function (dets) {
    clutter += `<span>${dets}</span>`;
    textPage.innerHTML = clutter;
  });
}



(function(){
  const canvasFramesImages = document.querySelector("#page3>canvas");
  const triggerCanvasFramesImages = "#page3";

  const canvasBridgesImages = document.querySelector("#page5>canvas");
  const triggerCanvasBridgesImages = "#page5";

  createCanvasImages(canvasFramesImages, framesImages, triggerCanvasFramesImages);
  createCanvasImages(canvasBridgesImages, bridgesImages, triggerCanvasBridgesImages);
 
})();

function createCanvasImages(canvas, arrayImages, trigger){
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
  });

  function files(index) {
    return arrayImages[index];
  }

  const imagesCount = arrayImages.length - 1;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < imagesCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: imagesCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: .5,
      trigger: trigger,
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    let canvas = ctx.canvas;
    let hRatio = canvas.width / img.width;
    let vRatio = canvas.height / img.height;
    let ratio = Math.max(hRatio, vRatio);
    let centerShift_x = (canvas.width - img.width * ratio) / 2;
    let centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  };

  ScrollTrigger.create({
    trigger: trigger,
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
  });
};

