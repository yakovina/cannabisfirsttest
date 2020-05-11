window.onload = () => {

    iphoneIntroT2 = new TimelineMax()
        .to('.yellow', 0.05, {ease: Power1.easeIn,backgroundColor: '#FCDA00', color: '#000000'}, 0)
        .to('.green', 0.05, {ease: Power1.easeIn,backgroundColor: '#0DC200', color: '#000000'}, 0.05)
        .to('.white', 0.05, {ease: Power1.easeIn,backgroundColor: '#ffffff', color: '#16A5C4'}, 0.1)
        .to('.red', 0.05, {ease: Power1.easeIn,backgroundColor: '#e20606', color: '#ffffff'}, 0.15)
        .to('.blue', 0.05, {ease: Power1.easeIn,backgroundColor: '#16A5C4', color: '#ffffff'}, 0.20)
        .to('.img', 0.05, {ease: Power1.easeIn,transform: "scale(1.7)"}, 0.25)
        .to('.img', 0.05, {ease: Power1.easeIn,transform: "scale(1)"}, 0.3)
        .to('.img', 0.05, {ease: Power1.easeIn,transform: "scale(1.5)"}, 0.35)
        .to('.img', 0.05, {ease: Power1.easeIn,transform: "scale(0)"}, 0.4)
        .to('#cannabis span', 0.5, {ease: Power1.easeIn,transform: "scaleX(3) rotate(180deg) translateX(10vh)", zIndex: 1}, 0.45)
        .to('.moveleft', 0.5, {ease: Power1.easeIn,transform: "translateX(-100vh)"}, 0.45)
        .to('.under', 0.5, {ease: Power1.easeIn,transform: "translateY(100vh)"}, 0.9)
        .to('#cannabis', 0.5, {ease: Power1.easeIn,transform: "translateY(100vh)"}, 1.3)
        .to('.up', 0.5, {ease: Power1.easeIn,transform: "translateY(110vh)"}, 1.5)
    iphoneIntroT2.duration(2);

    var controller = new ScrollMagic.Controller();
       let  scene2 = new ScrollMagic.Scene({
            triggerElement: '#stereotypes',
            duration: '2000',
           triggerHook: 0
        })
            .setTween(iphoneIntroT2)
           .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
           .addTo(controller);

    scene2.setPin("#stereotypes");
}
