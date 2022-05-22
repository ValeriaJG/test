const blockBigImg = document.getElementById("block_big_img");
const bgBigImg = document.getElementById("bg_big_img");
const closeWindow = document.getElementById("close");
const bigImg = document.getElementById("big_img");
const photogallery = document.getElementById("photogallery");
var screenWidth = window.screen.width
const bigImages = document.createElement("img");
let arrayImage = 20;
const btnLeft = document.getElementById("arrow_left");
const btnRight = document.getElementById("arrow_right");
const blockArrow = document.getElementById("block_arrow_gallery");
let img2 = bigImages;
let array = 0

for (let i = 0; i <= arrayImage; i++) {
    let img = document.createElement("img");
    img.src = 'assets/img/photogallery/' + [i] + '.jpg';

    img.onclick = function () {
        bigImg.appendChild(img2);
        img2.src = img.src;

        clickBtnNext(i);
        clickBtnPrev(i);
        document.body.style.overflow = "hidden";
        blockBigImg.style.display = bigImg.style.display = bgBigImg.style.display = "flex";
        blockArrow.style.display = "grid"
    }

    closeWindow.onclick = bgBigImg.onclick = closeBigImages;
    photogallery.appendChild(img)
}

function clickBtnNext(array2) {
    array = array2

    btnRight.onclick = function () {
        array++;
        img2.src = "assets/img/photogallery/" + [array] + ".jpg";

        if (array > arrayImage) {
            array = 0;
            img2.src = "assets/img/photogallery/" + [array] + ".jpg";
        }
    }
}

function clickBtnPrev(array2) {
    array = array2

    btnLeft.onclick = function () {
        array--;
        img2.src = "assets/img/photogallery/" + [array] + ".jpg";

        if (array < 0) {
            array = arrayImage;
            img2.src = "assets/img/photogallery/" + [array] + ".jpg";
        }
    }
}

function closeBigImages() {
    blockBigImg.style.display = bgBigImg.style.display = blockArrow.style.display = "none";
    document.body.style.overflow = "";
}
