$(document).ready(function() {
  AOS.init({
    duration: 1000,
  });
  var swiper = new Swiper('.mainPop', {
   loop:true,
   slidesPerView: 1,
   speed: 800,
   watchOverflow: true,
   pagination: {
         el: '.mainPop .swiper-pagination',
         clickable : true,
     },
 });
 $(".top_btn").click(function(e){
   event.preventDefault();
   $('html,body').animate({scrollTop:0}, 800);
});
  $(".main_menu a").click(function(e) {
    $('.bg').hide();
    $(".nav").hide();
  });
  $(".btn_menu").click(function(e) {
    e.preventDefault();
    $(".bg").show();
    $(".nav").fadeIn();
  });

  $(document).on("click touchstart", ".bg, .btn_close", function(e) {
    e.preventDefault();
    $('.bg').hide();
    $(".nav").fadeOut();
  });
  gsap.registerPlugin(ScrollTrigger);
  var mainswipertab = ['산부인과 여성 전문의', '서현삼성산부인과의 특별함', '여성성형클리닉']
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
        return '<p class="' + className + '"></p>';
      }
    },
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
}


function goPc() {

  var docWidth = $(window).width();

  if (docWidth >= 1000) {

    var href = $(location).attr('href');
    var pathname = $(location).attr('pathname');
    document.location.href = "index.html";
  }
}
$(window).resize(function() {
  goPc();
});
