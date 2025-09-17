var typed = new Typed(".text", {
  strings: [
    "Web Developer",
    "Frontend Developer",
    "Graphic Designer",
    "Web Designer",
    "YouTuber",
    "App Developer",
  ],
  typeSpeed: 100,
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  lopp: true,
});
const Hamburger = document.querySelector(".hamburger");
const Mobilemenu = document.querySelector(".mobile-menu"); 
const bars = document.querySelector(".fa-bars");

Hamburger.addEventListener("click",()=>Mobilemenu.classList.toggle('mobile-menu-active'));
Hamburger.addEventListener("click",()=>bars.classList.toggle('fa-xmark'));










// var typed = new Typed('.text', {
//   Strings: ["Frontend Developer", "Web Desinger", "YouTuber", "Web Developer"],
//   typeSpeed: 100,
//   backSpeed: 100,
//   backDelay: 1000,
//   loop: true,
// });

var tl = gsap.timeline()
tl.from(".container #part1 h1",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.3,

});
tl.from(".container #part2 a",{

    y:-40,
    opacity:0,
    duration:1,
    // backgroundColor:""
    stagger:1,
});


 var path =`M 10 100 Q 250 100 1500 100`;
var finalpath = `M 10 100 Q 250 100 1500 100`;
var string =document.querySelector('#string');

string.addEventListener("mousemove",function(dets){
       path =`M 10 100 Q ${dets.x} ${dets.y} 1500 100`;
     gsap.to("svg path",{
        attr:{d:path},
        duration:0.2,
        ease:"power3.out",
     })
})
string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalpath},
        duration:1.5,
        ease:"elastic.out(1,0.2)",
    })
});


var menu=document.querySelector(".hamburger i")
var cross = document.querySelector(".mobile-menu i")



var t1=gsap.timeline()
t1.to(".mobile-menu",{
    right:"0",
    duration:0.5,
})
t1.from(".mobile-menu a",{
     x:150,
     duration:0.6,
     stagger:0.2,
     opacity:0,
})
t1.from(".mobile-menu i",{
    opacity:0,
})

t1.pause()

menu.addEventListener("click",function(){
    t1.play();
})
cross.addEventListener("click",function(){
    t1.reverse();
})