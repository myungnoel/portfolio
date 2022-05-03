// Observe Node's events ----------------------------------------------------------
function controlSwiper(nodeToObserve, observeOption, functionTarget){
    const target = nodeToObserve;
    const config = observeOption;
    let observer = new MutationObserver(functionTarget);
  
    observer.observe(target, config);
  }
  
  
  // Service's swiper ---------------------------------------------------------------------------------------
  function swiperService(){
    var swiper = new Swiper('.ser_swiper_container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: false,
      navigation: {
        nextEl: '.ser_swiper-button-next',
        prevEl: '.ser_swiper-button-prev',
      },
    });
    var swiper = new Swiper('.serlist_swiper_container', {
      slidesPerView: 'auto',
      spaceBetween: 0,
      loop: false,
    });
  
    const SLIDES = document.querySelectorAll('.ser_cont .swiper-wrapper article');
    const MENUS = document.querySelectorAll('.ser_list li.not_border');
    const MENU_LIST = document.querySelector('.ser_list_swiper');
    const SWIPER_ACTIVE = "swiper-slide-active";
    const SWIPER_PREV = "swiper-slide-prev", SWIPER_NEXT = "swiper-slide-next"; 
    const SER_ACTIVE = "ser_active";
    
    const changeSerSwiper = ()=>{
      for(let i=0; i<SLIDES.length; i++){
        let active = SLIDES[i].classList.contains(SWIPER_ACTIVE);
        if(active){
          MENUS[i].classList.add(SER_ACTIVE);
        } else{
          MENUS[i].classList.remove(SER_ACTIVE);
        }
      }
  
      // Menu list movement according to Slide
      const mobileWidth = window.innerWidth;
      if(mobileWidth<768){
        if(MENUS[0].classList.contains(SER_ACTIVE)||MENUS[1].classList.contains(SER_ACTIVE)){
          MENU_LIST.style.transform = `translate3d(${-0}px, 0px, 0px)`;
        } else if(MENUS[2].classList.contains(SER_ACTIVE)||MENUS[3].classList.contains(SER_ACTIVE)){
          MENU_LIST.style.transform = `translate3d(${-240}px, 0px, 0px)`;
        } else if(MENUS[4].classList.contains(SER_ACTIVE)){
          if(mobileWidth<550){  
          MENU_LIST.style.transform = `translate3d(${mobileWidth*.85-712}px, 0px, 0px)`;
          }
        }
      }
    }
    
    const target = document.querySelector('.ser_cont .swiper-wrapper');
    const config = {attributes: true, childList: true, subtree: true}
    controlSwiper(target, config, changeSerSwiper);
  
    // When each menu is clicked
    for(let i=0; i<MENUS.length; i++){
  
      MENUS[i].addEventListener('click', ()=>{
        // remove all SER_ACTIVE
        for(let del of MENUS){
          del.classList.remove(SER_ACTIVE);
        }
        
        // add SER_ACTIVE on clicked one
        MENUS[i].classList.add(SER_ACTIVE);
  
        // Movement of SLIDEs according to menu
        const browserWidth = window.innerWidth;
        const slideWidth_str = SLIDES[0].style.width;
        const slideWidth = Number(slideWidth_str.replace('px', ""));
        if(browserWidth < 360){
          target.style.transform = `translate3d(${i*-330}px, 0px, 0px)`;
        } else if(browserWidth < 768){
          target.style.transform = `translate3d(${i*-(slideWidth+30)}px, 0px, 0px)`;
        } else if(browserWidth < 1281){
          target.style.transform = `translate3d(${i*-816}px, 0px, 0px)`;
        } else{
          target.style.transform = `translate3d(${i*-1224}px, 0px, 0px)`;
        }
             
        // Add & remove the classes on SLIDES
        let class_name = `slide_0${i+1}`
  
        for(let del of SLIDES){
          del.classList.remove(SWIPER_ACTIVE);
          if(i !== 0) {del.classList.remove(SWIPER_PREV);}
          if(i !== SLIDES.length-1) {del.classList.remove(SWIPER_NEXT);}
        }
  
        for(let j=0; j<SLIDES.length; j++){
          if(SLIDES[j].classList.contains(class_name)){
            SLIDES[j].classList.add(SWIPER_ACTIVE);
            if(i !== 0) {SLIDES[j-1].classList.add(SWIPER_PREV);}
            if(i !== SLIDES.length-1) {SLIDES[j+1].classList.add(SWIPER_NEXT);}
          }
        }
      });
    }
  }
  
  // init ---------------------------------------------------------------------------------
  function init(){
    swiperService();
  }
  
  init();
  
  