//ハンバーガーメニュー
const ham = document.querySelector('#js-hamburger');
const gnav = document.querySelector('#js-nav');

let done = true;
ham.addEventListener("click",() => {
    gnav.classList.add('active');
    setTimeout(() => {
        done = false;
    },100)
});
document.addEventListener('click',() => {
    if(done === false) {
        gnav.classList.remove('active');
        setTimeout(() => {
            done = true;
        },100);
    };
});

//page-top
const page = document.querySelector('#js-page');

page.addEventListener('click', scroll_to_top);
function scroll_to_top(){
    window.scroll({top:0, behavior:'smooth'})
};

window.addEventListener('scroll', scroll_event);

function scroll_event(){
    if(window.pageYOffset < 200){
        page.style.opacity = '0';
    }else if(window.pageYOffset > 200){
        page.style.opacity = '1'
 };

};

//swiper
const swiper = new Swiper(".swiper",{
    loop:true,
    autoplay:true,
    pagination: {
        el: ".swiper-pagination", 
        type:'bullets'
    },
});

//fadeIn
 
window.onload=function(){
    const scroll = document.querySelectorAll('.about-box__desc');
     
    const Animation = function() {
      for(var i = 0; i < scroll.length; i++) {
      var triggerMargin = 100;
      if (window.innerHeight > scroll[i].getBoundingClientRect().top + triggerMargin) {
      scroll[i].classList.add('active');
      };
      };
      };
      window.addEventListener('scroll', Animation);
    }; 
