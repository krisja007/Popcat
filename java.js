const popcat = document.querySelector("#popcat");
const btn = document.querySelector("#btn");


const openMouthImg = "/Popcat/popcat01.jpg";
const closeMouthImg = "/Popcat/yut02.jpg";


const openMouthSound = new Audio("./Splat.mp3");
const closeMouthSound = new Audio("./Yeet.mp3");


btn.addEventListener("mousedown", openMouth);
btn.addEventListener("mouseup", closeMouth);


btn.addEventListener("touchstart", function(e) {
    e.preventDefault();
    openMouth();
})

btn.addEventListener("touchend", function(e) {
    e.preventDefault();
    closeMouth();
})


function openMouth() {
    popcat.src = openMouthImg;
    openMouthSound.play();
}

function closeMouth() {
    popcat.src = closeMouthImg;
    closeMouthSound.play();
}