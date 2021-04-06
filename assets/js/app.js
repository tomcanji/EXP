$(function () {

  // menu colors for sections
  var ctrl = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    triggerElement: '#sec1',
    triggerHook: 0.15
  })
  .setClassToggle("#nav", "colored-section-1")
  .addIndicators({
    colorTrigger: "white",
    colorStart: "white",
    colorEnd: "white",
    indent: 40
  })
  .addTo(ctrl);

  new ScrollMagic.Scene({
    triggerElement: '#sec2',
    triggerHook: 0.15
  })
  .setClassToggle("#nav", "colored-section-2")
  .addIndicators({
    colorTrigger: "blue",
    colorStart: "blue",
    colorEnd: "blue",
    indent: 140
  })
  .addTo(ctrl);

  new ScrollMagic.Scene({
    triggerElement: '#sec3',
    triggerHook: 0.15
  })
  .setClassToggle("#nav", "colored-section-3")
  .addIndicators({
    colorTrigger: "blue",
    colorStart: "blue",
    colorEnd: "blue",
    indent: 140
  })
  .addTo(ctrl);

  new ScrollMagic.Scene({
    triggerElement: '#sec4',
    triggerHook: 0.15
  })
  .setClassToggle("#nav", "colored-section-4")
  .addIndicators({
    colorTrigger: "blue",
    colorStart: "blue",
    colorEnd: "blue",
    indent: 140
  })
  .addTo(ctrl);

  new ScrollMagic.Scene({
    triggerElement: '#sec5',
    triggerHook: 0.15
  })
  .setClassToggle("#nav", "colored-section-5")
  .addIndicators({
    colorTrigger: "blue",
    colorStart: "blue",
    colorEnd: "blue",
    indent: 140
  })
  .addTo(ctrl);


  // Menu toggle animation
  $('#nav').on('shown.bs.collapse', openMenu)
  $('#nav').on('hidden.bs.collapse', closeMenu)

  function openMenu() {
    var menuAnimation = new TimelineMax()
    menuAnimation.to(".hovering-ball", 0.5, {
      width: '682px',
      height: '682px',
      ease: Sine.easeInOut
    });
  }

  function closeMenu() {
    var menuAnimation = new TimelineMax()
    menuAnimation.to(".hovering-ball", 0.5, {
      width: '0',
      height: '0',
      ease: Sine.easeInOut
    });
  }

});
