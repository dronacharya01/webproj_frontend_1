var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

// Listen for mouse movement on the entire document
document.addEventListener("mousemove", function (dets) {
  
  // Move the custom cursor element (crsr) to the mouse's X position
  crsr.style.left = dets.x + "px";

  // Move the custom cursor element (crsr) to the mouse's Y position
  crsr.style.top = dets.y + "px";

  // Move the blur element 250px to the left of the mouse's X position
  // This creates an offset glow/blur effect that trails behind
  blur.style.left = dets.x - 250 + "px";

  // Move the blur element 250px above the mouse's Y position
  // Together with the left offset, this centers the blur around the cursor
  blur.style.top = dets.y - 250 + "px";
});


// Select all <h4> elements inside #nav
var h4all = document.querySelectorAll("#nav h4");

// Loop through each <h4> nav element
h4all.forEach(function (elem) {
  // When mouse enters a nav item
  elem.addEventListener("mouseenter", function () {
    // Enlarge the custom cursor
    crsr.style.scale = 3;
    // Add a white border
    crsr.style.border = "1px solid #fff";
    // Make cursor background transparent
    crsr.style.backgroundColor = "transparent";
  });

  // When mouse leaves the nav item
  elem.addEventListener("mouseleave", function () {
    // Restore cursor to normal size
    crsr.style.scale = 1;
    // Remove border and set default style
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});


gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from(".card", {
  scale: 0.8,
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});

