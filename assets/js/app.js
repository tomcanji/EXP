$(function () {

  // circle cursor
  var $circle = $('.circle');
  function moveCircle(e) {
    TweenLite.to($circle, 0.3, {
      css: {
        left: e.pageX,
        top: e.pageY,
        display: 'flex'
      }
    });
  }
  function reMoveCircle(e) {
    TweenLite.to($circle, 0.3, {
      css: {
        display: 'none'
      }
    });
  }

  $('#sound').on('mousemove', moveCircle);
  $('#sound').on('mouseleave', reMoveCircle);

  // menu colors for sections
  var ctrl = new ScrollMagic.Controller();

  var soundDuration = $('#sound').height()
  new ScrollMagic.Scene({
    triggerElement: '#sound',
    triggerHook: 0,
    duration: soundDuration
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
  $('#nav').on('show.bs.collapse', openMenu)
  $('#nav').on('hide.bs.collapse', closeMenu)

  function openMenu() {
    var menuAnimation = new TimelineMax()

    menuAnimation
    .to(".hovering-ball", 0.5, {
      width: '682px',
      height: '682px',
      ease: 'expo.in',
      x: 0,
      y: 0,
      top: '-242px',
      left: '-184px'
    });
  }

  function closeMenu() {
    var menuAnimation = new TimelineMax()
    menuAnimation.to(".hovering-ball", 0.5, {
      width: 0,
      height: 0,
      ease: 'expo.out',
      left: '96px',
      top: '87px',
      x: 15,
      y: 15
    });
  }

});
