
function inti(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

 
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },

  // follwoing line is not required to work pinning on touch screen

  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
inti();
// document.querySelectorAll("h4")
// .forEach(function(elem){

//     gsap .from(elem,{
//         scrollTrigger: {
//         trigger:elem,
//            start:"top 50%",
//                     markers:true,
           
   
//         },
//     y:200,
//    duration:3,
//    ease:"expo.inOut",
   
   
//     })
// })


// gsap .from("#part img",{
//          scrollTrigger: {
//          trigger:"#part img",
//             start:"top 50%",
//                      markers:true,
//                      // scrub:true,
            
    
//          },
//          duration: 2,
//          scale: 0.3, 
//          opacity: 0, 
//          stagger: 0.3,
//          ease: "elastic", 
//          force3D: true,
    
//      })

//      gsap .from("#nav ",{
//               scrollTrigger: {
//               trigger:"#nav ",
//                  start:"top 10%",
//                           markers:true,
//                           // scrub:true,
                 
         
//               },
//               duration: 3,
//               opacity: 0, 
//               stagger:2,
//               ease: "expo.inOut", 
              
         
//           })
//           / document.querySelectorAll("h1")
//  .forEach(function(elem){
//      gsap .to(elem,{
//               scrollTrigger: {
//               trigger:elem,
//                  start:"top 20%",
//                           markers:true,
//                           // scrub:true,
                 
         
//               },
//               duration:3,
//               opacity: 1, 
//               stagger:2.2,
//               // scale:0.4,
//               ease: "elastic", 
//          force3D: true,

              
         
//           })
//         })
//          document.querySelectorAll("h4")
//         .forEach(function(elem){
//             gsap .from(elem,{
//                      scrollTrigger: {
//                      trigger:elem,
//                         start:"top 40%",
//                                  markers:true,
//                                  // scrub:true,
                        
                
//                      },
//                      x:0,
//                      duration:1,
//                      opacity: 0, 
//                      ease: "power1.inOut", 
                
       
                     
                
//                  })
//                })

// gsap .from("#image",{
//          scrollTrigger: {
//          trigger:"#image",
//             start:"top 80%",
//                      markers:true,
//                      // scrub:true,
            
    
//          },
//          duration: 3,
//          rotate:360,
//          scale: 0.2, 
//          opacity: 0, 
//          stagger: 0.5,
//          ease: "expo.inOut", 
         
    
//      })
     
//      / document.querySelectorAll("button")
//      .forEach(function(elem){
//          gsap .from(elem,{
//                   scrollTrigger: {
//                   trigger:elem,
//                      start:"top 50%",
//                               markers:true,
//                               // scrub:true,
                     
             
//                   },
//                   y:100,
//                   duration:2,
//                   opacity: 1, 
//                   stagger:2.6,
//                   // scale:0.4,
//                   ease: "ease.inOut", 
             
    
                  
             
//               })
//             })
    
var tl = gsap.timeline()
tl
.from("#nav",{
    
    stagger:1,
    delay:1,
    opacity:0,
})

    
tl.from("#text h1",{
    duration: 2,
    rotate:360,
    scale: 0.2, 
    opacity: 0, 
    stagger: 0.5,
    ease: "expo.inOut", 
})

            tl.from("#text h4",{
            
                    x:"50%",
                    opacity: 0, 
                    stagger: 1,
                    ease: "expo.inOut", 
           })
       
            tl.from("#text button",{
                     x:"-50%",
                     opacity: 0, 
                     stagger: 1,
                     ease: "expo.inOut", 
            })
            
tl.from("#image",{
    
    duration: 2,
         rotate:180,
         scale: 0.2, 
         opacity: 0, 
         stagger: 0.5,
         ease: "expo.inOut", 
})
tl.from("#write h4",{
    
    duration: 1,
         y:-100,
         opacity: 0, 
         stagger: 0.5,
         ease: "expo.inOut", 
})
tl.from("#write h1",{
    
    // rotate:-360,
    opacity:0,
    stagger:1,
    // repeat:-1,
})
tl.from("#write p",{
    

         rotate:360,
         scale: 0.1, 
         opacity: 0, 
         stagger: 2,
         ease: "expo.inOut", 
})
tl.from("#part img",{
    

    duration: 2,
   
             scale: 0.3, 
             opacity: 0, 
             stagger: 0.4,
             ease: "elastic", 
             force3D: true,
})
tl.from(".all h4",{
    

    
   x:-50,
              
             opacity: 0, 
             stagger:0.1,
             ease: "expo.inOut", 
             
})
tl.from(".all h1",{
    
             
             opacity: 0, 
             x:200,
             stagger: 0.3,
             ease: "expo.inOut", 
             
})
tl.from(".all p",{
    
   x:-100,
             opacity: 0,    
             stagger: 0.3,
             ease: "expo.inOut", 
             
})
tl.from("#shat img",{
    
   y:-100,
//    delay:0.1,
             opacity: 0,    
             stagger: 0.2,
             ease: "expo.inOut", 
             
})
tl.from("#last h4",{
   
    duration:0.3,
   x:-200,
             opacity: 0,    
             stagger: 2,
             ease: "expo.inOut", 
             
})
tl.from("#last h1",{
   
    duration:1,
   x:200,
             opacity: 0,    
             stagger: 2,
             ease: "expo.inOut", 
             
})
tl.from("#last p",{
   
    
   x:-200,
   duration:1,
             opacity: 0,    
             stagger: 2,
             ease: "expo.inOut", 
             
})
tl.from("#last button",{
   
    duration:1,
   x:200,
   
             opacity: 0,    
             stagger: 2,
             ease: "expo.inOut", 
             
})
tl.from("#picture",{
   
    duration:1,
   y:-500,
   delay:0.3,
             opacity: 0,    
             stagger: 1,
             ease: "expo.inOut", 
             
})
tl.from("#section5 h1",{
   
    duration:2,
    rotateY:-360,

    opacity:0,
    stagger:8,
    repeat:-1,
             
})

