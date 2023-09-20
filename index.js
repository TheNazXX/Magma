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
  let clutter = '';

  document
  .querySelector('#page2>h1')
  .textContent.split('')
  .forEach(function (dets) {
    clutter += `<span>${dets}</span>`;

    document.querySelector('#page2>h1').innerHTML = clutter;
  });

  gsap.to('#page2>h1>span', {
    scrollTrigger: {
      trigger: `#page2>h1>span`,
      start: `top bottom`,
      end: `bottom top`,
      scroller: `#main`,
      scrub: 0.5,
    },
    stagger: 0.2,
    color: `#fff`,
  });

})();

(function(){
  const canvas = document.querySelector("#page3>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
  });

  function files(index) {
  let data = `
  ./assets/images/frames/frames00007.png
  ./assets/images/frames/frames00010.png
  ./assets/images/frames/frames00013.png
  ./assets/images/frames/frames00016.png
  ./assets/images/frames/frames00019.png
  ./assets/images/frames/frames00022.png
  ./assets/images/frames/frames00025.png
  ./assets/images/frames/frames00028.png
  ./assets/images/frames/frames00031.png
  ./assets/images/frames/frames00034.png
  ./assets/images/frames/frames00037.png
  ./assets/images/frames/frames00040.png
  ./assets/images/frames/frames00043.png
  ./assets/images/frames/frames00046.png
  ./assets/images/frames/frames00049.png
  ./assets/images/frames/frames00052.png
  ./assets/images/frames/frames00055.png
  ./assets/images/frames/frames00058.png
  ./assets/images/frames/frames00061.png
  ./assets/images/frames/frames00064.png
  ./assets/images/frames/frames00067.png
  ./assets/images/frames/frames00070.png
  ./assets/images/frames/frames00073.png
  ./assets/images/frames/frames00076.png
  ./assets/images/frames/frames00079.png
  ./assets/images/frames/frames00082.png
  ./assets/images/frames/frames00085.png
  ./assets/images/frames/frames00088.png
  ./assets/images/frames/frames00091.png
  ./assets/images/frames/frames00094.png
  ./assets/images/frames/frames00097.png
  ./assets/images/frames/frames00100.png
  ./assets/images/frames/frames00103.png
  ./assets/images/frames/frames00106.png
  ./assets/images/frames/frames00109.png
  ./assets/images/frames/frames00112.png
  ./assets/images/frames/frames00115.png
  ./assets/images/frames/frames00118.png
  ./assets/images/frames/frames00121.png
  ./assets/images/frames/frames00124.png
  ./assets/images/frames/frames00127.png
  ./assets/images/frames/frames00130.png
  ./assets/images/frames/frames00133.png
  ./assets/images/frames/frames00136.png
  ./assets/images/frames/frames00139.png
  ./assets/images/frames/frames00142.png
  ./assets/images/frames/frames00145.png
  ./assets/images/frames/frames00148.png
  ./assets/images/frames/frames00151.png
  ./assets/images/frames/frames00154.png
  ./assets/images/frames/frames00157.png
  ./assets/images/frames/frames00160.png
  ./assets/images/frames/frames00163.png
  ./assets/images/frames/frames00166.png
  ./assets/images/frames/frames00169.png
  ./assets/images/frames/frames00172.png
  ./assets/images/frames/frames00175.png
  ./assets/images/frames/frames00178.png
  ./assets/images/frames/frames00181.png
  ./assets/images/frames/frames00184.png
  ./assets/images/frames/frames00187.png
  ./assets/images/frames/frames00190.png
  ./assets/images/frames/frames00193.png
  ./assets/images/frames/frames00196.png
  ./assets/images/frames/frames00199.png
  ./assets/images/frames/frames00202.png
  `;
  return data.split("\n")[index];
  }

const frameCount = 67;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `#page3`,
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
    trigger: "#page3",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
  });
})();




