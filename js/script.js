  /*let slides = document.getElementsByClassName('slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 4000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.opacity = 1;
    slides[currentSlide].style.zIndex = 2;
    slides[currentSlide].className = 'slide active';
    if (currentSlide) {
        slides[currentSlide - 1].style.opacity = 0;
        slides[currentSlide - 1].style.zIndex = -1;
    }
}*/
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("btn-slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active_btn", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active_btn";
};