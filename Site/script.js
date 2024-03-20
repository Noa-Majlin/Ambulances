
// // Snapping behavior between sections
// ScrollTrigger.create({
//   snap: {
//     // snap to the closest section
//     snapTo: "section",
//     // snap relative to the viewport
//     relativeTo: "viewport",
//     // snap when the user scrolls more than 50% in either direction
//     duration: {min: 0.5, max: 0.5}
//   }
// });

// Pinning sections
// gsap.timeline({
//   ScrollTrigger: {
//     trigger: "section1",
//     scrub:true,
//     start: "top top", // Pin when the top of the section reaches the top of the viewport
//     end: "bottom bottom", // Unpin when the bottom of the section reaches the bottom of the viewport
//     pin: true,
//     pinSpacing: false // Disable automatic adjustment of the pin spacing
//   })
// })
// .to("#section2",{y:"-100%"});




gsap.registerPlugin(ScrollTrigger);

gsap.to(".section2", {
    scrollTrigger: {
        trigger: ".start",
        pin: true,
        // markers: true,
        start: "top top", // Trigger animation when the top of section1 reaches the top of the viewport
        end: "+=1200", // End animation when the bottom of section1 reaches the top of the viewport
        scrub: true, // Enable smooth scrubbing effect
        pinSpacing: false,
    }
});

// let tl = gsap.timeline({
//     ScrollTrigger:{
//         trigger: '#section2',
//         start:'top top',
//         end:'bottom center',
//         scrub: true,
//         markers = true,
//         pin = true,
//     }
// })

// tl.to('#section2',{
//     y:800
// })


gsap.to(".Ambulance", {
    scrollTrigger:{
        trigger: ".buildings",
        start: "top 100px",
        end: "+=1000",
        toggleActions: "play pause restart none",
        // markers:true,
    },
    x: 1500,
    y: 100,
    scale: 6,
    duration: 4, 
    scrub: 5,


});

// gsap.set(".police",
//  {backgroundImage:
//  'src(img/BibiLong.png{innerWidth * 3}x${innerHeight})'});

// gsap.to(".police",{
//     xPercent: -100,
//     x: () => innerWidth,
//     ease: "none",
//     scrollTrigger: {
//         trigger:".police",
//         start: "top top",
//         end: () => innerWidth * 3,
//         scrub:true,
//         pin: true,
//         invalidateOnRefresh:true,
//         anticipatePin:1
//     }
// })


gsap.to(".pigeon", {
    scrollTrigger:{
        trigger: ".col",
        start: "top 100px",
        end: "+=1000",
        toggleActions: "play pause restart none",
        // markers:true,
    },
    rotation: 25,
    duration: 2, 
    scrub: 1,
});

 gsap.to(".newspaper", {
    scrollTrigger:{
        trigger: ".pigeon",
        start: "top 100px",
        end: "+=1000",
        toggleActions: "play pause restart none",
        // markers:true,
    },
    rotation: 14,
    duration: 2, 
    scrub: 1,
});

  gsap.to(".Bibi", {
    scrollTrigger:{
        trigger: ".Bibi",
        start: "top center",
        end: "+=1000",
        toggleActions: "play pause restart none",
        // markers:true,
    },
    rotation: -20,
    duration: 1, 
    ease:"none",
});

//   gsap.to(".Bibi", {
//     scrollTrigger:{
//         trigger: ".Bibi",
//         start: "top center",
//         end: "+=1000",
//         toggleActions: "play pause restart none",
//         // markers:true,
//     },
//     rotation: -14,
//     duration: 2, 
//     repeat: -1;
//     scrub: 1,
//     markers: 6,

// });



