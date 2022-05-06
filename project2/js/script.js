var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  }); // banner slide


var tabs=$('.ser_list > ul > li');
var contents=$('.ser_cont>article');

contents.hide();
contents.first().show();
tabs.click(function(){
  var tg= $(this);
  var tgInd=tg.index();
  tabs.removeClass('ser_active');
  tg.addClass('ser_active');
  contents.hide();
  contents.eq(tgInd).show();
});
var swiper1 = new Swiper(".ser_cont_daeri", {
  slidesPerView: 4,
  spaceBetween: 0,
  slidesPerGroup:4,
  loop: false,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
 breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup:2
    },
    // when window width is >= 720px
    720: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup:3,
    },
    // when window width is >= 980px
    980: {
      slidesPerView: 4,
      spaceBetween: 40,
      slidesPerGroup:4
    }
  }
});

/* menu Btn */
$('.app-btn').click(function(){
  $('.mobile-nav').stop().animate({left:0},500);
});


$('.app-btnx').click(function(){
  $('.mobile-nav').stop().animate({left:-300},500);
});

$('.mobile-nav>ul>li').hover(function(){
  $(this).find('ul').stop().slideDown(500);
},function(){
  $(this).find('ul').stop().slideUp(500);
});

$('.hamburger_menu').click(function(){
  $('.mobile-menu').stop().animate({left:0},500);
});


$('.app-btnx2').click(function(){
  $('.mobile-menu').stop().animate({left:-300},500);
});

$('.mobile-menu>ul>li').hover(function(){
  $(this).find('ul').stop().slideDown(500);
},function(){
  $(this).find('ul').stop().slideUp(500);
});

