//ハンバーガーメニュー
const hamburger = document.querySelector('#check');
const gnav = document.querySelector('.gnav');

hamburger.addEventListener('click',function(){
   // hambuger.classList.toggle('active');
    gnav.classList.toggle('active');

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