(function($){
    var Agency = {
        init: function(){
           this.parallax();
           this.header(); 
           this.section1(); 
           this.section2(); 
           this.section3(); 
           this.section4(); 
           this.section5(); 
           this.footer();
        },
        parallax: function(){
            const scrollEvent={
                init:function(){
                    this.header();
                    this.section2();
                    this.section3();
                    this.section4(); 
                    this.scrollTopBtn();
                },
                header: function(){
                    let newScr=$(window).scrollTop();; // 현재 스크롤값
                    let oldScr=newScr; //이전 스크롤값
                    let result='null'; // 방향을 판단 위 , 아래 

                    $(window).scroll(function(){
                        newScr=$(window).scrollTop();

                        //console.log('newScr:' + newScr, 'oldScr: '+oldScr);
                        result = (newScr - oldScr) > 0 ? 'DOWN' : 'UP';


                        if(result=="DOWN"){
                            $('#header').removeClass('addUp').addClass('addDown');
                        }
                        if(result=="UP"){
                            $('#header').removeClass('addDown').addClass('addUp');
                        }
                        oldScr=newScr;
                    });
                },
                section2: function(){
                    const titleTop=$('#section2 .title').offset().top;
                    //console.log(titleTop)
                    let winH=$(window).height();
                    let titTop=titleTop-winH;
                    //console.log(titTop)
        
                    $(window).scroll(function(){
                        if($(window).scrollTop() > titTop){ //scrollTop의 위치값이 130보다 크면 에니메이션 실행
                            $('#section2').addClass('addParallax');
                        }
                        if($(window).scrollTop() == 0){ // 스크롤을 올리면 추가된 클래스 삭제
                            $('#section2').removeClass('addParallax');
                        }
                    });
                },
/*                 section3:function(){
                    const titleTop=$('#section3 .title').offset().top;
                    //console.log(titleTop)
                    let winH=$(window).height;
                    //console.log(winH);
                    let titTop = titleTop - winH;
                            
                    $(window).scroll(function(){
                        if($(window).scrollTop() > titTop){ //scrollTop의 위치값이 130보다 크면 에니메이션 실행
                            $('#section3').addClass('addParallax');
                        }
                        if($(window).scrollTop() == 0){ // 스크롤을 올리면 추가된 클래스 삭제
                            $('#section3').removeClass('addParallax');
                        }
                    }); */
                    section3:function(){
                        const titleTop=$('#section3 .title').offset().top;
                        //console.log(titleTop)
                        let winH=$(window).height();
                        //console.log(winH)
                        let titTop=titleTop-winH;
                        $(window).scroll(function(){
                            if($(window).scrollTop() > titTop){//스크롤탑의 위치값이 130보다 크면
                                $('#section3').addClass('addParallax');
                            }
                            if($(window).scrollTop() == 0){//맨위가 되면 추가된 클래스 삭제
                                $('#section3').removeClass('addParallax');
                            }
                        });
                    },
                    section4:function(){
                        const section4=$('#section4');
                        const titleTop=$('#section4 .title').offset().top;
                        //console.log(titleTop);
                        let winH=$(window).height();
                        //console.log(winH);
                        let titTop=titleTop - winH;

                        $(window).scroll(function(){
                            if($(window).scrollTop() > titTop){
                                section4.addClass('addParallax');
                            }
                            if($(window).scrollTop() == 0){
                                section4.removeClass('addParallax');
                            }
                        });
                    },
                    scrollTopBtn:function(){
                        $('.topBtn').hide();
                        $(window).scroll(function(){
                            if($(window).scrollTop() == 0){
                                $('.topBtn').hide();
                            }
                            if($(window).scrollTop() >=500 ){
                                $('.topBtn').show();
                            }
                            $('.topBtn').on({click:function(){
                                $('html,body').stop().animate({scrollTop:0 },1000);
                                
                            }});
                        });
                    }
            }
            scrollEvent.init();
        },
        header: function(){
            const mainMenu=$('.gap .right-box nav > ul > li');
            const sub2 =$('.gap .right-box nav > ul > li .sub');
            const subMenu =$('.gap .right-box nav > ul > li > div > ul > li');
            const sub3 = $('.sub3');
            const hamberMenu=$('.gap .right-box .hamberMenu');
            const mobileNav=$('.gap .right-box .mobileNav');

            mainMenu.on({mouseenter: function(){
                    sub2.stop().fadeOut();
                    $(this).find('.sub').stop().fadeIn(300);
                }
            });
            mainMenu.on({mouseleave: function(){
                $(this).find('.sub').stop().fadeOut();
                } 
            });

            subMenu.on({mouseenter: function(){
                sub3.stop().fadeOut();
                $(this).find('.sub3').stop().fadeIn(300);
                }
            });
            hamberMenu.on({click:function(){
                    if(mobileNav.is(':visible')){
                        mobileNav.stop().slideUp();
                    }else{
                        mobileNav.stop().slideDown();
                    }
                }
            });
       
        },
        section1:function(){},
        section2:function(){

        },
        section3:function(){},
        section4:function(){
            let nb=0;
            $('.gallery-btn').each(function(index){
                $(this).on({click:function(){
                    nb = index;
                    //console.log(num)
                    gallery();
                }});
            });
            let winW=($(window).width()/4);
            let h=winW*0.8125132555673383;
            //console.log(winW)
            function gallery(){
                //초기화
                $('.gallery li').eq(0).hide().animate({top: 0, left:0}, 0);
                $('.gallery li').eq(1).hide().animate({top: 0, left:'25%'}, 0);
                $('.gallery li').eq(2).hide().animate({top: 0, left:'50%'}, 0);
                $('.gallery li').eq(3).hide().animate({top: 0, left:'75%'}, 0);

                $('.gallery li').eq(4).hide().animate({top: h, left:'0'}, 0);
                $('.gallery li').eq(5).hide().animate({top: h, left:'25%'}, 0);
                $('.gallery li').eq(6).hide().animate({top: h, left:'50%'}, 0);
                $('.gallery li').eq(7).hide().animate({top: h, left:'75%'}, 0);

                if(nb == 0){
                    $(".gallery li").eq(0).show().animate({top: 0, left: 0}, 300);
                    $(".gallery li").eq(1).show().animate({top: 0, left: '25%'}, 300);
                    $(".gallery li").eq(2).show().animate({top: 0, left: '50%'}, 300);
                    $(".gallery li").eq(3).show().animate({top: 0, left: '75%'}, 300);
    
                    $(".gallery li").eq(4).show().animate({top: h, left: '0%'}, 300);
                    $(".gallery li").eq(5).show().animate({top: h, left: '25%'}, 300);
                    $(".gallery li").eq(6).show().animate({top: h, left: '50%'}, 300);
                    $(".gallery li").eq(7).show().animate({top: h, left: '75%'}, 300); 
                }
                if(nb == 1){
                    $(".gallery li").eq(0).hide();
                    $(".gallery li").eq(2).hide();
                    $(".gallery li").eq(7).hide();

                    $(".gallery li").eq(1).show().animate({top: 0, left: '0%'}, 0);
                    $(".gallery li").eq(3).show().animate({top: 0, left: '25%'}, 0);
                    $(".gallery li").eq(4).show().animate({top: 0, left: '50%'}, 0);
                    $(".gallery li").eq(5).show().animate({top: 0, left: '75%'}, 0);
                    $(".gallery li").eq(6).show().animate({top: h, left: '0'}, 0);
                }
                if(nb == 2){
                    $(".gallery li").eq(0).hide();
                    $(".gallery li").eq(7).hide();

                    $(".gallery li").eq(1).show().animate({top: 0, left: '0%'}, 0);
                    $(".gallery li").eq(2).show().animate({top: 0, left: '25%'}, 0);
                    $(".gallery li").eq(3).show().animate({top: 0, left: '50%'}, 0);
                    $(".gallery li").eq(4).show().animate({top: 0, left: '75%'}, 0);

                    $(".gallery li").eq(5).show().animate({top: h, left: '0'}, 0);
                    $(".gallery li").eq(6).show().animate({top: h, left: '25%'}, 0);
                }
                if(nb == 3){
                    $(".gallery li").eq(1).hide();
                    $(".gallery li").eq(3).hide();
                    $(".gallery li").eq(6).hide();
                    $(".gallery li").eq(7).hide();

                    $(".gallery li").eq(0).show().animate({top: 0, left: '0%'}, 0);
                    $(".gallery li").eq(2).show().animate({top: 0, left: '25%'}, 0);
                    $(".gallery li").eq(4).show().animate({top: 0, left: '50%'}, 0);
                    $(".gallery li").eq(5).show().animate({top: 0, left: '75%'}, 0);
                }
                if(nb == 4){
                    $(".gallery li").eq(1).hide();
                    $(".gallery li").eq(2).hide();
                    $(".gallery li").eq(3).hide();
                    $(".gallery li").eq(4).hide();
                    $(".gallery li").eq(5).hide();
                    $(".gallery li").eq(6).hide();

                    $(".gallery li").eq(0).show().animate({top: 0, left: '0%'}, 0);
                    $(".gallery li").eq(7).show().animate({top: 0, left: '25%'}, 0);
                }
                if(nb == 5){
                    $(".gallery li").eq(0).hide();
                    $(".gallery li").eq(2).hide();
                    $(".gallery li").eq(4).hide();
                    $(".gallery li").eq(5).hide();
                    $(".gallery li").eq(7).hide();


                    $(".gallery li").eq(1).show().animate({top: 0, left: '0%'}, 0);
                    $(".gallery li").eq(3).show().animate({top: 0, left: '25%'}, 0);
                    $(".gallery li").eq(6).show().animate({top: 0, left: '50%'}, 0);
                }
            };
        },
        section5:function(){},
        footer:function(){}
    }
    Agency.init();
})(jQuery);