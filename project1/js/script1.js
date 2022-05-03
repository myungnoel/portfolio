var tab=$('.banner-right>ul>li');
var tabContent=$('.tab_menu>ul>li');

tab.click(function(){
    var tg=$(this);
    var tgInx=tg.index();
    tab.removeClass('id');
    tg.addClass('id');

    tabContent.css('display','none');
    tabContent.eq(tgInx).css('display','block');

})