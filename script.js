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