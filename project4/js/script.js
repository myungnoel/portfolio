$('.barMenu').click(function(){
    $('.mobile_Nav').stop().animate({left:0},500);
});

$('.closeBtn').click(function(){
    $('.mobile_Nav').stop().animate({left:-350},500);
}); //movile nav click event


