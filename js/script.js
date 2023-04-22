//ハンバーガーメニュー
const hamburger = document.querySelector('#check');
const gnav =document.querySelector('.gnav');

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('active');
    gnav.classList.toggle('active');

});