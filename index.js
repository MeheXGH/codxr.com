function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
  lerp:0.02
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

};

loco();

function curAni(){

  
  document.addEventListener("mousemove",function(info){
    gsap.to(".cur",{
        left:info.x,
        top:info.y
    })
})
}
curAni();

// var tl = gsap.timeline({
//   scrollTrigger: {
//       trigger: ".page1 h1",
//       scroller: ".main",
//       markers: true,
//       start: "top 20%",
//       end: "top 0",
//       scrub: 3
//   }
// });

// tl.to(".page1 h1", {
//   x: -300,
// }, 'ani');

// tl.to(".page1 h2", {
//   x: 300,
// }, 'ani');

// tl.to(".page1 video",{
//     width:"100%"
// }, 'ani')

ScrollTrigger.matchMedia({
  // For phone screens
  "(max-width: 768px)": function() {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page1 h2",
        scroller: ".main",
        // markers: true,
        start: "bottom 25%",
        end: "bottom 5%",
        scrub: 3
      }
    });

    tl.to(".page1 h1", {
      x: -50, 
    }, 'ani');

    tl.to(".page1 h2", {
      x: 50, 
    }, 'ani');

    tl.to(".page1 video", {
      width: "100%", 
    }, 'ani');
  },

  // For laptop screens 
  "(min-width: 1025px)": function() {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers: true,
        start: "top 20%",
        end: "top 0",
        scrub: 3
      }
    });

    tl.to(".page1 h1", {
      x: -300,
    }, 'ani');

    tl.to(".page1 h2", {
      x: 300,
    }, 'ani');

    tl.to(".page1 video", {
      width: "100%",
    }, 'ani');
  }
});

var tl2 = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers: true,
      start: "top -70%",
      end: "top -75%",
      scrub: 3
  }
});
tl2.to(".main",{
  backgroundColor:"#fff"
})

var tl3 = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers: true,
      start: "top -421%",
      end: "top -426",
      scrub: 3
  }
});
tl3.to(".main",{
  backgroundColor:"#0F0D0D"
})

var cur = document.querySelector(".cur")
var boxes = document.querySelectorAll(".box")

boxes.forEach(function(elem){
  elem.addEventListener("mouseenter", function(){
    var att = elem.getAttribute("data-img");
    
    cur.style.width = "20vw";
    cur.style.height = "15vw";
    cur.style.borderRadius = "0";
    cur.style.mixBlendMode = "normal";
    cur.style.backgroundColor = "transparent";

    cur.style.backgroundImage = `url(${att})`;
    
    
  });



  elem.addEventListener("mouseleave",function(){
    cur.style.width = "15px";
    cur.style.height = "15px";
    cur.style.borderRadius = "50%";
    cur.style.mixBlendMode = "difference";
    cur.style.backgroundColor = "#EDBFFF";
    cur.style.backgroundImage = "none";
    
  })

})



// var cur = document.querySelector(".cur");
// var boxes = document.querySelectorAll(".box");

// boxes.forEach(function(elem){
//   elem.addEventListener("mouseenter", function(){
//     var att = elem.getAttribute("data-img");
    
//     cur.innerHTML = `<img src="${att}" style="width: 400px; height: 250px; border-radius: 0; mix-blend-mode: none;">`;
    
//   });

//   elem.addEventListener("mouseleave", function(){
//         cur.style.width = "15px";
//     cur.style.height = "15px";
//     cur.style.borderRadius = "50%";
//   });
// });
