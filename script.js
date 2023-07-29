var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x-50+"px"
    crsr.style.top = dets.y-8+"px"
    blur.style.left = dets.x - 200 + "px"
    blur.style.top = dets.y - 200 + "px"
})
var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=2;
        crsr.style.border="1px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1;
        crsr.style.border="0px solid #95c11E"
        crsr.style.backgroundColor="#95c11E"
    })
})




gsap.to("#nav",{
    backgroundColor :"#000",
    height : "90px",
    duration : 1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger : "#main",
        scroller : "body",
        // markers:true,
        start:"top -30%",
        end:"top -60%",
        scrub:1
        
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:1
    }
})
gsap.from(".cards",{
    scale:0.8,
    opacity:0.5,
    duration:0.8,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:1
    }
})
gsap.from("#quote1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#quote1",
        scroller:"body",
        start:"top 55%",
        end:"top 98%",
        scrub:2
    }
})

gsap.from("#quote2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#quote2",
        scroller:"body",
        start:"top 95%",
        end:"top 98%",
        scrub:2
    }
})

gsap.from("#page4 h4",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h4",
        scroller:"body",
        start:"top 90%",
        end:"top 90%",
        scrub:2
    }
})