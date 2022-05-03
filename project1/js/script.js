let cnt=0;
let moving=$('.section_t_box>ul'); //움직일 대상
let timer; //반복시키기?
let wid=moving.find('li').width();

let banner=$('.banner_slide> li');
let btns=$('.banner-btn>ul>li');
let current=0;
let slideLeftbtn=$('.b_leftBtn');
let slideRightbtn=$('.b_rightBtn');
let setIntervalId;

slides();
function slides(){
    setIntervalId=setInterval(function(){
        let prev=banner.eq(current);
        let prevBtn=btns.eq(current);

        move(prev, 1, 0);
        prevBtn.find('img').attr('src','./img/banner-icon1.png');

        current++;
        if(current==banner.size())current=0;

        let next=banner.eq(current);
        let nextBtn=btns.eq(current);

        move(next, 0, 1);
        nextBtn.find('img').attr('src','./img/banner-icon.png');
    },4000);
};
function move(tg, start, end){
    tg.css('opacity', start).stop().animate({opacity:end},500);
}

slideRightbtn.hover(function(){
    clearInterval(setIntervalId);
},function(){
    slides()
})
slideRightbtn.click(function(){
    let prev=banner.eq(current);
    let prevBtn=btns.eq(current);

    move(prev, 1, 0);
    prevBtn.find('img').attr('src','./img/banner-icon1.png');

    current++;
    if(current==banner.size())current=0;

    let next=banner.eq(current);
    let nextBtn=btns.eq(current);

    move(next, 0, 1);
    nextBtn.find('img').attr('src','./img/banner-icon.png');
});

slideLeftbtn.hover(function(){
    clearInterval(setIntervalId);
},function(){
    slides()
})
slideLeftbtn.click(function(){
    let prev=banner.eq(current);
    let prevBtn=btns.eq(current);

    move(prev, 1, 0);
    prevBtn.find('img').attr('src','./img/banner-icon1.png');

    current--;
    if(current==-banner.size())current=0;

    let next=banner.eq(current);
    let nextBtn=btns.eq(current);

    move(next, 0, 1);
    nextBtn.find('img').attr('src','./img/banner-icon.png');
});


btns.hover(function(){
    clearInterval(setIntervalId);
},function(){
    slides()
})

btns.click(function(){
    let tg=$(this);
    let i=tg.index();
    if(current==i) return;
    let currentEl=banner.eq(current);
    let nextEl=banner.eq(i);
    current=i;
    currentEl.css('opacity',1).stop().animate({opacity:0},500);
    btns.find('img').attr('src','./img/banner-icon1.png');
    nextEl.css('opacity',0).stop().animate({opacity:1},500);
    tg.find('img').attr('src','./img/banner-icon.png');
}); 



 slide()
function slide(){
    timer=setInterval(function(){
        moving.animate({left:wid*-1},500,function(){
            $(this).children('li:first').insertAfter(($(this).children('li:last')));
            $(this).css({left:0});
        })
    },5000);
};

$('.section_slide').hover(function(){
    clearInterval(timer);
},function(){
    slide()
});

$('.rightBtn').click(function(){
    moving.stop().animate({left:wid*-1},500,function(){
        $(this).children('li:first').insertAfter( $(this).children('li:last'));
        $(this).css({left:0})
    })
});
$('.leftBtn').click(function(){
    moving.find('li:last').insertBefore(moving.find('li:first'));
    moving.css({left:-wid}).stop().animate({left:0},500) //-200 위치에 있다가 0 위치로 나타나게 하기
});//section_slide 

