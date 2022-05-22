let images = ["1", "2", "3", "4", "5", "6", "7"];
let amountOfImages = images.length;
let currentIndex = 0;

const slide = document.getElementById("img");
const btnLeft = document.getElementById("arrow_left");
const btnRight = document.getElementById("arrow_right");

var slideInterval, slideAnimationInterval_1, slideAnimationInterval_2;

function slideAnimation(fadeOut) {
    img.style.animationName = fadeOut;
    img.style.animationDuration = "1.4s";
}

function stopAnim() {
    img.style.animationName = "";
    img.style.animationDuration = "";
    clearTimeout(slideInterval);
    clearTimeout(slideAnimationInterval_1);
    clearTimeout(slideAnimationInterval_2);
}

function anim() {
    slideInterval = setTimeout(nextImage, 3500)
    slideAnimationInterval_1 = setTimeout(slideAnimation, 0, "fadeOut");
    slideAnimationInterval_2 = setTimeout(slideAnimation, 2920, "fadeIn")
}

function goToSlide() {
    stopAnim();
    anim();
    updateImage();
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) currentIndex = amountOfImages - 1;
    goToSlide();
}

function nextImage() {
    currentIndex++;
    if (currentIndex == amountOfImages) currentIndex = 0;
    goToSlide();
}

function updateImage() {
    slide.src = "assets/img/photogallery/" + images[currentIndex] + ".jpg";
}

goToSlide()
btnLeft.addEventListener("click", prevImage);
btnRight.addEventListener("click", nextImage);