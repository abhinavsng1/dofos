

TweenMax.to('.backgroundOne',3,{opacity:1,ease: SteppedEase.config( 2)});
TweenMax.to('.backgroundTwo',3,{opacity:1,ease: SteppedEase.config( 2)});
TweenMax.to('#mainNavbar',1,{scaleY:1,delay:3,ease:   Back. easeOut.config( 1.7)});

var tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();
tl.from('#professionalDesign', 1.5, {y:-300, opacity: 0});
tl.from('.pDesign', 2, {x:-300, opacity: 0});

var t2 = new TimelineMax({onUpdate:updatePercentagee});
const controller2 = new ScrollMagic.Controller();
t2.from(".a3",1.5,{opacity:0,scale:0});

var t3 = new TimelineMax({onUpdate:updatePercentageee});
const controller3 = new ScrollMagic.Controller();
t3.from('#exploreDesign', 1.5, {y:-300, opacity: 0});
t3.from('#carouselExampleCaptions', 2, {x:-300, opacity: 0});

var t4 = new TimelineMax({onUpdate:updatePercentageeee});
const controller4 = new ScrollMagic.Controller();
t4.from("#sec4",2,{opacity:0,});

var t5 = new TimelineMax({onUpdate:updatePercentageeeee});
const controller5 = new ScrollMagic.Controller();
t5.from('.teamPic', 1.5, {scale:0, opacity: 0});
t5.from('.teamDet', 2, {color: '#e5e5e5',});


const scene = new ScrollMagic.Scene({
    triggerElement: "#ProfessionalDes",
              triggerHook: "onEnter",
              duration: "90%"
  })
    .setPin("#ProfessionalDesign")
    .setTween(tl)
          .addTo(controller);

const scene2 = new ScrollMagic.Scene({
    triggerElement: ".a3",
            triggerHook: "onEnter",
            duration: "100%"
})
    // .setPin("#ProfessionalDesign")
    .setTween(t2)
        .addTo(controller2);

const scene3 = new ScrollMagic.Scene({
    triggerElement: ".a4",
            triggerHook: "onEnter",
            duration: "75%"
})
    // .setPin("#ProfessionalDesign")
    .setTween(t3)
        .addTo(controller3);

const scene4 = new ScrollMagic.Scene({
    triggerElement: "#sec4",
            triggerHook: "onEnter",
            duration: "75%"
})
    // .setPin("#ProfessionalDesign")
    .setTween(t4)
        .addTo(controller4);
        
const scene5 = new ScrollMagic.Scene({
    triggerElement: "#sec5",
            triggerHook: "onEnter",
            duration: "75%"
})
    // .setPin("#ProfessionalDesign")
    .setTween(t5)
        .addTo(controller5);

function updatePercentage() {
    tl.progress();
    console.log(tl.progress());
  }

function updatePercentagee(){
    t2.progress();
}

function updatePercentageee(){
    t3.progress();
}

function updatePercentageeee(){
    t4.progress();
}

function updatePercentageeeee(){
    t5.progress();
}