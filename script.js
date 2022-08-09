let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

setInterval(nextSlide, 10000);
function nextSlide(){
  const n = slideIndex;
  showSlides(slideIndex = n+1);
}

function showSlides(n) {
  let i;
  console.log(slideIndex)
  let slides = document.getElementsByClassName("slider");
  let slides_autor = document.getElementsByClassName("slider_autor");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides_autor[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  slides_autor[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let slideIndexAtuacao = 1;
showAreasAtuacao(slideIndexAtuacao);

function currentSlideAtuacao(n) {
  showAreasAtuacao(slideIndexAtuacao = n);
}

setInterval(nextSlideAtuacao, 10000);
function nextSlideAtuacao(){
  const n = slideIndexAtuacao;
  showAreasAtuacao(slideIndexAtuacao = n+1);
}

function showAreasAtuacao(n) {
  let i;
  let slides_at = document.getElementsByClassName("slider_atuacao");
  if (n > slides_at.length) {slideIndexAtuacao = 1}
  for (i = 0; i < slides_at.length; i++) {
    slides_at[i].style.display = "none";
  }
  slides_at[slideIndexAtuacao-1].style.display = "block";
}

let isOpen = false;
function menu(){
  isOpen = isOpen? false : true;
  let header = document.getElementById('header_d')
  let nav1 = document.getElementById('nav_d_1')
  let nav2 = document.getElementById('nav_d_2')
  let nav3 = document.getElementById('nav_d_3')
  let nav4 = document.getElementById('nav_d_4')
  let icon = document.getElementById("img_id")

  if(isOpen){
    header.classList.remove('header')
    header.classList.add('header_open')  
    nav1.classList.remove('a_header_hide')
    nav1.classList.add('a_header_mobile')
    nav2.classList.remove('a_header_hide')
    nav2.classList.add('a_header_mobile')
    nav3.classList.remove('a_header_hide')
    nav3.classList.add('a_header_mobile')
    nav4.classList.remove('a_header_hide')
    nav4.classList.add('a_header_mobile')
    icon.src = "assets/menu_icon_close.png";
  }else{
    header.classList.add('header')
    header.classList.remove('header_open')
    nav1.classList.add('a_header_hide')
    nav1.classList.remove('a_header_mobile') 
    nav2.classList.add('a_header_hide')
    nav2.classList.remove('a_header_mobile') 
    nav3.classList.add('a_header_hide')
    nav3.classList.remove('a_header_mobile') 
    nav4.classList.add('a_header_hide')
    nav4.classList.remove('a_header_mobile') 
    icon.src = "assets/menu_icon.png";
  }
  console.log("ddd")
}