$(document).ready(function(){

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
    // setInterval(function(){
    //     $('.retail_l ul li').trigger('click')
    // },4000);

})