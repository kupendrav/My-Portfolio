// gsap.registerPlugin( ScrollSmoother);

// // smooth scroll
// // ScrollTrigger.normalizeScroll(true)
// let smoother = ScrollSmoother.create({
//   wrapper:'#smooth-wrapper',
//   content:'#smooth-content',
//   smooth: 2,
//   effects: true,
//   normalizeScroll: true,
// });

// for toggle
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// /gsap animations


  gsap.to('.section__pic-container',{
    x:100,
    duration:2,
  });
  
  gsap.from ('.navbar',{
    y:-100,
    duration:2,
  });
  
  gsap.to('.section__text',{
    x:-30,
    duration:2,
  });
