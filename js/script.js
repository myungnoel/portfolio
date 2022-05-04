$(function(){
    let wheelDelta=0; //휠 이벤트를 사용하면 반환값을 확인하기 위한 변수
    let browser=0; //파이어폭스 브라우저 판별하기 위한 변수(모든 브라우저에 통일 시키기 위해)

    //section 9개 배열처리
    //마우스휠 아래(-120)-마우스를 한번 내릴때 나오는 값
    //다음섹션으로 넘어가게 하기
    //마우스휠 위(120)-마우스를 한번 올릴때 나오는 값
    //이전섹션으로 넘어가게 하기
    //mousewheel=크롬, 익스, 사파리, 오페라 등등..
    //파이어폭스는 DOMMouseScroll 를 사용
    //파이어폭스 브라우저 판별하는것은 = window.navigator.userAgent

    $('.section').each(function(index){
        $(this).on('mousewheel DOMMouseScroll', function(e){
            e.preventDefault();
            browser=window.navigator.userAgent.toLowerCase().indexOf('firefox')//파이어폭스인지 아닌지 아는 것
            //브라우저가 firefox이면 몇번째 있는지를 나타냄 -1을 가지면 firefox글자가 없는것임
            if(browser>=0){//0보다 크다는 이야기는 firefox를 가지고 있음
                wheelDelta=-e.detail*40;
                //console.log(wheelDelta)
            }else{
                wheelDelta=e.originalEvent.wheelDelta;
              //  console.log(wheelDelta)
            }
            let sct = $(window).scrollTop();
            if(wheelDelta<0){
                if(index < $('.section').length-1){
                    $('html, body').stop().animate({scrollTop:$(this).next().offset().top},500);
                }
            }else{
                if(index > 0){
                    $('html, body').stop().animate({scrollTop:$(this).prev().offset().top},500);}
            }
        })
    }); // fullpage
}); 

$('.hamberMenu').click(function(){
    $('.mobile_Nav').stop().animate({left:0},500);
});

$('.close_Btn').click(function(){
    $('.mobile_Nav').stop().animate({left:-200},500);
}); //movile nav click event

const contents=$('#fullpage>section');
const menuBtn=$('.nav_list>ul>li');
const mobileMenuBtn=$('.mobile_Nav>ul>li');

mobileMenuBtn.on({click:function(e){
    e.preventDefault();
    let tg=$(this);
    let i=tg.index();
    let section=contents.eq(i);
    let st=section.offset().top;
    $('html, body').stop().animate({scrollTop:st});
}});

menuBtn.hide();
$(window).scroll(function(){
    let sct=$(window).scrollTop();

    if(sct>=800){
        menuBtn.show();
        contents.each(function(){
            let tg =$(this);
            let i=tg.index();
            if(tg.offset().top <= sct){
                mobileMenuBtn.removeClass('on');
                mobileMenuBtn.eq(i).addClass('on');
                menuBtn.removeClass('active');
                menuBtn.eq(i).addClass('active');
            }
        });
    }
    if(sct==0){
        menuBtn.hide();
    }
   
});

$('#btn01').click(function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#sec1').offset().top},800);
});
$('#btn02').click(function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#sec2').offset().top},800);
});
$('#btn03').click(function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#sec3').offset().top},800);
});
$('#btn04').click(function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#sec4').offset().top},800);
});
$('#btn05').click(function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#sec5').offset().top},800);
});

let winW=$(window).width();
if(winW<=720){
    let proList = $('.profile-list>ul>li');
            let proListdiv = $('.profile-list>ul>.profile_list_dis div')
            $('.profile-left').addClass('on');
            proList.eq(0).stop().delay(1000).animate({opacity: 1},500);
            proList.eq(1).stop().delay(1300).animate({opacity: 1},800);
            proList.eq(2).stop().delay(1600).animate({opacity: 1},1100);
            proList.eq(3).stop().delay(1900).animate({opacity: 1},1400);
            proListdiv.addClass('on');
}else{
    $(window).scroll(function(){

        let sct = $(window).scrollTop();
        /* console.log(sct) */
        let sec2 = $('#sec2').offset().top;
        //console.log(sec2)
        if(sct == sec2){
            let proList = $('.profile-list>ul>li');
            let proListdiv = $('.profile-list>ul>.profile_list_dis div')
            $('.profile-left').addClass('on');
            proList.eq(0).stop().delay(1000).animate({opacity: 1},500);
            proList.eq(1).stop().delay(1300).animate({opacity: 1},800);
            proList.eq(2).stop().delay(1600).animate({opacity: 1},1100);
            proList.eq(3).stop().delay(1900).animate({opacity: 1},1400);
            proListdiv.addClass('on');
        }
    });
}


