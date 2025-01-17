Shery.mouseFollower();
Shery.makeMagnet('.magnet');
Shery.hoverWithMediaCircle('.nap', { videos: ['https://cuberto.com/assets/home/hero/header.mp4', 'https://cuberto.com/assets/projects/riyadh/cover.mp4', 'https://cuberto.com/assets/projects/qvino/cover.mp4'] })


gsap.to('.fleftelm',{
    scrollTrigger:{
        pin:true,
        trigger:'#fimages',
        start:'top top',
        end:'bottom bottom',
        endTrigger:'.last',
        scrub:1

    },
    y:'-300%',
    ease:'power1',

})

const section=document.querySelectorAll('.fleftelm')
Shery.imageEffect(".images", {
    style: 3,
    slideStyle: (setScroll) => {
        section.forEach((section,index)=>{
            ScrollTrigger.create({
                trigger:section,
                start:'top top',
                scrub:1,
                onUpdate:function(pro){
                    setScroll(pro.progress+index)
                }
            })
        })
    },
  });

const tl=gsap.timeline()
tl.from('.headings h1',{
    y:'200%',
    opacity:0,
    ease:'power2',
    duration:2,
    stagger:0.3

})
tl.from('#homemain h5',{
    y:'-100%',
    opacity:0,
    ease:'power4'
})