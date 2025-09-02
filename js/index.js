$(document).ready(function() {
  gomo();
  sec04scroll();
  AOS.init({
    duration: 1000,
  });
  $(window).scroll(function() {
    if ($(window).scrollTop() >= 1) { //스크롤 내렸을때
      $('.header-wrap').addClass('fixed');
      $('.top_btn').css("display","flex");
    } else {
      $('.header-wrap').removeClass('fixed');
      $('.top_btn').hide();
    }
  });
  $(".top_btn").click(function(e){
    event.preventDefault();
    $('html,body').animate({scrollTop:0}, 800);
});
  gsap.registerPlugin(ScrollTrigger);
  var mainswipertab = ['전문의 책임진료', '구강검진 프로그램', '복합치료']
  var mainswiper = new Swiper('.visual_section .visual_slide', {
    loop: true,
    effect: 'fade',
    speed: 800,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.visual_section .visual_page_cont',
      clickable: true,
      renderBullet: function(index, className) {
        return '<p class="' + className + '">' + (mainswipertab[index]) + '</p>';
      }
    },
  });
  const slidePin = gsap.timeline({
    scrollTrigger: {
      trigger: '.section02',
      start: 'bottom bottom',
      end: '100% top',
      scrub: 1,
      pin: true,
      pinSpacing: false
    }
  });
  slidePin.from(".section03", {
    yPercent: '100',
  })
  ScrollTrigger.create({
    trigger: ".section05",
    start: "top top",
    end: "+=30%",
    pin: true,
    pinSpacing: false,
    scrub: 1,
  });
  var sec05swipertab = ['네비게이션 임플란트', '원데이 임플란트', '무절개 임플란트', '임플란트 재수술']
  var sec05swiper = new Swiper('.section05 .section05_cont', {
    loop: true,
    speed: 800,
    pagination: {
      el: '.section05 .section05_page_cont',
      clickable: true,
      renderBullet: function(index, className) {
        return '<p class="' + className + '">' + (sec05swipertab[index]) + '</p>';
      }
    },
  });
  var sec07 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section07 .sec07_cont_wrap",
      start: "top top",
      end: "bottom bottom",
      pin: ".sec07_lt"
    }
  });

  const productAnimation0 = gsap.timeline()
    .to(".pro_sect .cont .txt_box1", {
      duration: 10,
      delay: 10,
    });
  const productAnimation1 = gsap.timeline()
    .to(".pro_sect .cont .txt_box1", {
      opacity: 0,
      duration: 10,
    });
  const productAnimation2 = gsap.timeline()
    .to(".pro_sect .cont.cover_cont .left_box .cover_bg.bg_t", {
      height: '50%',
      duration: 100,
    })
  const productAnimation3 = gsap.timeline()
    .to(".pro_sect .cont.cover_cont .left_box .cover_bg.bg_b", {
      height: '50%',
      duration: 100,
    });
  const productAnimation4 = gsap.timeline()
    .to(".pro_sect .cont .img_box2 .img", {
      opacity: 1,
      duration: 0,
    });
  const productAnimation5 = gsap.timeline()
    .to(".pro_sect .cont.cover_cont .right_box .cover_bg.bg_t", {
      height: 0,
      duration: 100,
    });
  const productAnimation6 = gsap.timeline()
    .to(".pro_sect .cont.cover_cont .right_box .cover_bg.bg_b", {
      height: 0,
      duration: 100,
    });
  const productAnimation7 = gsap.timeline()
    .to(".pro_sect .cont.cover_cont .right_box .cover_bg.bg_r", {
      width: 0,
      duration: 100,
    });
  const productAnimation8 = gsap.timeline()
    .to(".pro_sect .cont.cover_cont .right_box .cover_bg.bg_l", {
      width: 0,
      duration: 100,
    });
  const productAnimation9 = gsap.timeline()
    .to(".pro_sect .cont .txt_box2", {
      opacity: 1,
      delay: 30,
      duration: 100,
    });


  const productTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".pro_sect",
      start: 'top top',
      end: "bottom+=500px top",
      scrub: 1.5,
      pin: true,
    }
  });

  productTimeline
    .add([productAnimation0])
    .add([productAnimation1, productAnimation2, productAnimation3, productAnimation4, productAnimation5, productAnimation6, productAnimation7, productAnimation8, productAnimation9])
  const slidePin2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section10',
      start: '70% 50%',
      end: 'bottom top',
      scrub: 1,
      pin: true,
      pinSpacing: false,
    }
  });
  $('.section11 .tab_btn p').on('click', function(e) {
    var tab_id = $(this).attr('data-type');
    $('.section11 .tab_btn p').removeClass('on');
    $('.section11 .tab_cont').removeClass('on');
    $(this).addClass('on');
    $("#" + tab_id).addClass('on');
  })
  $('.section14 .tab_btn p').on('click', function(e) {
    var tab_id = $(this).attr('data-type');
    $('.section14 .tab_btn p').removeClass('on');
    $('.section14 .tab_cont').removeClass('on');
    $(this).addClass('on');
    $("#" + tab_id).addClass('on');
  })


  var sec13swipertab = ['기본검진', '종합검진', '맞춤 검진', '스마일 검진']
  var sec13swiper = new Swiper('.section13 .section13_cont', {
    loop: true,
    loopedSlides: 5,
    speed: 800,
    slidesPerView: 'auto',
    spaceBetween: 150,
    centeredSlides: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.section13 .section13_page_cont',
      clickable: true,
      renderBullet: function(index, className) {
        return '<div class="' + className + '"><span></span><p>' + (sec13swipertab[index]) + '</p></div>';
      }
    },
  });


  var sec16swipertab = ['안내데스크I', '안내데스크II', '복도', '상담실I', '상담실II', '로비', '대기실', '치료실', '회복실']
  var sec16swiper = new Swiper('.section16 .tour_wrap', {
    loop: true,
    speed: 800,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.section16 .tour_page',
      clickable: true,
      renderBullet: function(index, className) {
        return '<div class="' + className + '"><span></span><p>' + (sec16swipertab[index]) + '</p><i></i><b></b></div>';
      }
    },
  });

  function copyToClipboard(val) {
    var t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
  }

  $('#copy_btn').click(function() {
    copyToClipboard('경기 성남시 분당구 황새울로342번길 9 4층');
    alert('주소를 복사하였습니다');
  });
  $('.section14 .tab_wrap .tab_cont .type_box>.btn').click(function() {
    $(this).parent().addClass('on');
  });
  $('.section14 .tab_wrap .tab_cont .detail button').click(function() {
    $(this).parent().parent().removeClass('on');
  });
  $('#copy_btn').click(function() {
    copyToClipboard('경기 성남시 분당구 황새울로342번길 9 4층');
    alert('주소를 복사하였습니다');
  });
  $('.layerPop .close').click(function() {
    $(".layerPop").hide();
    $("#modalback_bk").hide();
  });
});

function validPopOpen(_id) {
  currentScrollTop = $(document).scrollTop();
  $('#modalback_bk').css({
    'opacity': '0.8',
    'height': $(document).height()
  }).fadeIn(100);
  $(".layerPop").hide();

  $('#' + _id).fadeIn(100);
  // var popupleftmargin = ($('#'+_id).outerWidth()) / 2;
  // var popuptopmargin = ($('#'+_id).outerHeight()) / 2;
  // $('#'+_id).css({
  // 'margin-top' : -popuptopmargin,
  // 'margin-left' : -popupleftmargin
  // });
}
function sec04scroll() {
const typeSlider = document.querySelector('.section04 .cont_wrap');
const typeSections = gsap.utils.toArray('.section04_item');

gsap.set(typeSlider, {
  clearProps: 'all'
});
gsap.set(typeSections, {
  clearProps: 'all'
});
gsap.set(gsap.utils.toArray('.section04_tit_inner'), {
  clearProps: 'all'
});

let typeSliderX = (typeSlider.scrollWidth - document.documentElement.clientWidth);
let typeSliderEnd = (typeSlider.offsetWidth * 5);
let itemGap = parseFloat(getComputedStyle(typeSlider).gap);
let leftMargin = parseFloat(getComputedStyle(typeSections[0]).paddingLeft);

let typeSlideData = Object.fromEntries(typeSections.map(function(section) {
  let sectionType = section.classList[1].replace('item--', '');
  let sectionStart = section.getBoundingClientRect().left - 300;
  let sectionWidth = section.getBoundingClientRect().width;
  let sectionEnd = sectionStart + sectionWidth;

  if (sectionType !== '01') {
    sectionStart = sectionStart - itemGap;
  }

  return [sectionType, {
    element: section,
    start: sectionStart,
    width: sectionWidth,
    end: sectionEnd
  }];
}));

let typeOption = {
  x: -typeSliderX,
  ease: 'none',
  scrollTrigger: {
    id: 'st-type-horizontal',
    trigger: typeSlider,
    pin: true,
    start: "-10% top",
    scrub: true,
    end: function() {
      return '+=' + typeSliderEnd;
    },
    onUpdate: function(trigger) {

      let scrollX = (typeSliderX * trigger.progress);
      let detailX = 0;
      let prevWidth = 0;
      let current;
      let title;

      typeSections.map(function(section) {

        const type = Object.keys(typeSlideData).filter(function(key) {
          return (section === typeSlideData[key].element);
        });

        title = typeSlideData[type].element.querySelector('.section04_tit_inner');

        if ((typeSlideData[type].start <= scrollX) && (typeSlideData[type].end >= scrollX)) {

          current = type.join('');

          if ((leftMargin + title.offsetWidth) > typeSlideData[type].element.getBoundingClientRect().right) {
            detailX = (typeSlideData[type].width - title.offsetWidth - (current == '01' ? leftMargin : 0));
          } else {
            detailX = (scrollX - prevWidth + (current != '01' ? leftMargin : 0));
          }

          gsap.set(title, {
            x: detailX < 0 ? 0 : detailX
          });

        } else {

          if (typeSlideData[type].end < scrollX) {
            prevWidth = (prevWidth + typeSlideData[type].width + itemGap);
          } else {
            gsap.set(title, {
              x: 0
            });
          }

        }
      });

    }
  }
}

gsap.to(typeSections, typeOption);
};
let refTimer = undefined;
$(window).resize(function() {
  gomo();
  window.addEventListener("resize", ScrollTrigger.update);
});

function gomo() {

  var docWidth = $(window).width();

  if (docWidth < 1000) {

    var href = $(location).attr('href');
    var pathname = $(location).attr('pathname');
    document.location.href = "../moblie/index_mo.html";
  }
}
