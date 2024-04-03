
document.addEventListener("DOMContentLoaded", function (){
    //dom 선택

const open = document.getElementById("open_btn");
const close = document.getElementById("close_btn");
const modal = document.getElementById("modal");

open.addEventListener("click", function () {
    modal.style.display = "flex";
});

close.addEventListener("click", function () {
    modal.style.display = "none";
});
});