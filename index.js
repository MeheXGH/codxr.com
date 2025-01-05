// Get the current page path
const currentPath = window.location.pathname;

// Loop through all navigation links
document.querySelectorAll('.nav-link').forEach(link => {
  // Check if the link's href matches the current path
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active');
  }
});


if (window.location.hash) {
  // Delay execution to allow the page to load before scrolling
  setTimeout(() => {
      const target = document.querySelector(window.location.hash);
      if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
      }
  }, 500); // Adjust delay as needed
}




function loco(){
    gsap.registerPlugin(ScrollTrigger);



const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
  lerp:0.02
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

};

// loco();

function smoothScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // ScrollTrigger setup
  ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
          if (arguments.length) {
              window.scrollTo({
                  top: value,
                  behavior: "smooth" // Enables smooth scrolling
              });
          }
          return window.scrollY;
      },
      getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => window.scrollTo(0, window.scrollY));
  ScrollTrigger.refresh();
}

smoothScroll();



function curAni(){

  
  document.addEventListener("mousemove",function(info){
    gsap.to(".cur",{
        left:info.x,
        top:info.y
    })
})
}
curAni();



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
  backgroundColor:"#000"
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
