$(document).ready(function(){

//   document.querySelectorAll("*").forEach(el => {
//   if (el.scrollWidth > window.innerWidth) {
//     el.style.outline = "2px solid red";
//   }
// });

//모바일 어긋났는지 확인


    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".gotop").fadeIn();
        } else {
            $(".gotop").fadeOut();
        }

     
    });
    
    
    $(".gotop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

    $(window).scroll(function () {
        $('.ani_stop').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).removeClass('ani_stop');
            }
            if (bottom_of_window < bottom_of_object) {
                $(this).addClass('ani_stop');
            }
        });
    });
    


document.querySelectorAll(".mega").forEach(mega => {

  const image = mega.querySelector(".menu-image");
  const text = mega.querySelector(".menu-text");
  const items = mega.querySelectorAll(".depth2-menu li");

  const data = {
    img1: {
      src: "images/main/busi_01.jpg",
      text: "기업의 가치와 철학을 소개합니다"
    },
    img2: {
      src: "images/main/busi_02.jpg",
      text: "연혁을 확인하세요"
    },
    img3: {
      src: "images/main/busi_03.jpg",
      text: "수상 내역"
    },
    img4: {
      src: "images/main/busi_04.jpg",
      text: "재무 정보"
    }
  };

  items.forEach(item => {
    item.addEventListener("mouseenter", () => {
      const key = item.dataset.img;
      if(data[key]){
        image.src = data[key].src;
        text.textContent = data[key].text;
      }
    });
  });

});





// 햄버거
const toggle = document.querySelector(".menu-toggle");
const gnb = document.querySelector(".gnb");

toggle.addEventListener("click", () => {
  gnb.classList.toggle("active");
});

// ✅ 변수명 변경 (충돌 방지)
const mobileMenuLinks = document.querySelectorAll(".gnb_menu > a");

mobileMenuLinks.forEach(link => {
  link.addEventListener("click", (e) => {

    const parent = link.parentElement;
    const mega = parent.querySelector(".mega");

    if (mega) {
      e.preventDefault();

      // 🔥 다른 메뉴 닫기
      document.querySelectorAll(".gnb_menu").forEach(item => {
        if(item !== parent){
          item.classList.remove("active");
        }
      });

      // 🔥 클릭한 메뉴 토글
      parent.classList.toggle("active");
    }
  });
});




let index = 0;
const slides = document.querySelectorAll(".slide");

function heroSlider(){

slides.forEach(slide=>{
slide.classList.remove("active");
});

index++;

if(index >= slides.length){
index = 0;
}

slides[index].classList.add("active");

}

setInterval(heroSlider,5000);
 



// 글자 공백 처리
const text = "EXPERIENCE THE DIFFERENCE";
const el = document.getElementById("heroText");

el.innerHTML = text.split(" ").map((word, i) => {
  const letters = word.split("").map((char, j) => {
    return `<span style="animation-delay:${(i * 0.3) + (j * 0.05)}s">${char}</span>`;
  }).join("");

  return `<span class="word">${letters}</span>`;
}).join(" ");


// flatpickr 달력

// flatpickr

const checkin = flatpickr("#checkin",{

dateFormat:"Y-m-d",

onChange:function(selectedDates){

checkout.set("minDate",selectedDates[0]);

}

});

const checkout = flatpickr("#checkout",{

dateFormat:"Y-m-d"

});


// dropdown

const roomBox=document.querySelector(".room-box");
const guestBox=document.querySelector(".guest-box");

const roomDrop=document.querySelector(".room-dropdown");
const guestDrop=document.querySelector(".guest-dropdown");

roomBox.addEventListener("click",(e)=>{

if(e.target.tagName!=="BUTTON"){
roomDrop.style.display="block";
guestDrop.style.display="none";
}

});

guestBox.addEventListener("click",(e)=>{

if(e.target.tagName!=="BUTTON"){
guestDrop.style.display="block";
roomDrop.style.display="none";
}

});


// outside click

document.addEventListener("click",(e)=>{

if(!roomBox.contains(e.target)){
roomDrop.style.display="none";
}

if(!guestBox.contains(e.target)){
guestDrop.style.display="none";
}

});


// room + -

const roomPlus=document.querySelector(".room-plus");
const roomMinus=document.querySelector(".room-minus");
const roomCount=document.querySelector(".room-count");

roomPlus.onclick=()=>{

roomCount.innerText=parseInt(roomCount.innerText)+1;

document.getElementById("roomTotal").innerText=roomCount.innerText;

};

roomMinus.onclick=()=>{

if(roomCount.innerText>1){

roomCount.innerText=parseInt(roomCount.innerText)-1;

}

document.getElementById("roomTotal").innerText=roomCount.innerText;

};


// guests

const plusBtns=document.querySelectorAll(".plus");
const minusBtns=document.querySelectorAll(".minus");

plusBtns.forEach(btn=>{

btn.onclick=function(){

let count=this.previousElementSibling;

count.innerText=parseInt(count.innerText)+1;

updateGuests();

};

});

minusBtns.forEach(btn=>{

btn.onclick=function(){

let count=this.nextElementSibling;

if(count.innerText>0){

count.innerText=parseInt(count.innerText)-1;

}

updateGuests();

};

});

function updateGuests(){

const counts=document.querySelectorAll(".count");

let total=0;

counts.forEach(c=>{

total+=parseInt(c.innerText);

});

document.getElementById("guestTotal").innerText=total;

}



    $('.retail_r a').eq(0).show().siblings().hide();

    var i = 0;
    $('.retail_l ul li ').click(function(){
        // i++;

        // if(i >2 ){
        //     i=0;
        // };
        const index = $(this).index()
        // $('.retail_r a').eq(i).siblings().fadeOut();
        $('.retail_r a').eq(index).siblings().fadeOut();
        // $('.retail_r a').eq(i).fadeIn();
        $('.retail_r a').eq(index).fadeIn();
        // $(this).eq(i).addClass('active')
        $(this).addClass('active')
        // $(this).eq(i).siblings().removeClass('active')
         $(this).siblings().removeClass('active')
       

    });
 





    // about js 금색 테두리 스크롤시 애니메이션

const imgWrap = document.querySelector('.img-wrap');

window.addEventListener('scroll', () => {
  const rect = imgWrap.getBoundingClientRect();

  if (rect.top < window.innerHeight - 100) {
    imgWrap.classList.add('active');
  }
});



// retail-menu  애니메이션

const menuItems = document.querySelectorAll('.retail-menu li');
const visuals = document.querySelectorAll('.visual-item');

menuItems.forEach(item => {
  item.addEventListener('click', () => {

    const target = item.getAttribute('data-tab');

    // 메뉴 active
    menuItems.forEach(el => el.classList.remove('active'));
    item.classList.add('active');

    visuals.forEach(v => {

      if (v.classList.contains('active')) {
        v.classList.remove('active');
        v.classList.add('out');

        setTimeout(() => {
          v.classList.remove('out');
        }, 400);
      }

      if (v.id === target) {
        v.classList.add('active');
      }

    });

  });
});





const track = document.querySelector('.hotel-track');
const cards = document.querySelectorAll('.hotel-card');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const progress = document.querySelector('.progress-bar');
const pageText = document.querySelector('.page');

let page = 0;

const visible = 4;
const total = cards.length;
const totalPage = Math.ceil(total / visible);

let autoSlide;


function updateSlider(){

const cardWidth = cards[0].offsetWidth;
const move = cardWidth * visible * page;

track.style.transform = `translateX(-${move}px)`;

const percent = (page / (totalPage - 1)) * 100;
progress.style.width = percent + "%";

pageText.innerText = `${page + 1} / ${totalPage}`;

}


next.addEventListener('click',()=>{

page++;

if(page >= totalPage){

page = 0;

}

updateSlider();

});


prev.addEventListener('click',()=>{

page--;

if(page < 0){

page = totalPage - 1;

}

updateSlider();

});


// 드래그 슬라이드
let startX = 0;

track.addEventListener('mousedown',(e)=>{

startX = e.clientX;

});

track.addEventListener('mouseup',(e)=>{

let moveX = e.clientX - startX;

if(moveX < -80){

page++;

if(page >= totalPage){

page = 0;

}

}

if(moveX > 80){

page--;

if(page < 0){

page = totalPage - 1;

}

}

updateSlider();

});




document.querySelector(".top-btn").addEventListener("click",function(e){

e.preventDefault();

window.scrollTo({

top:0,

behavior:"smooth"

});

});



 
    // setInterval(function(){
    //     $('.retail_l ul li').trigger('click')
    // },4000);

})