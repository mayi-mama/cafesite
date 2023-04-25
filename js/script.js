//ハンバーガーメニュー
const hamburger = document.querySelector('#js-hamburger');
const gnav = document.querySelector('#js-nav');

hamburger.addEventListener('click',function(){
    gnav.classList.toggle('active');
    /*確認　
    hamburger.classList.toggle('active);*/
});


//swiper
const swiper = new Swiper(".swiper",{
    loop:true,
    autoplay:true,
    pagination: {
        el: ".swiper-pagination", 
        type:'bullets'
    },
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
