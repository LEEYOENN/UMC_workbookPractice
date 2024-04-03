document.addEventListener("DOMContentLoaded", function (){
//dom 선택
const number = document.getElementById("number");
const increase  = document.getElementById('increase');
const decrease = document.getElementById('decrease');

console.log(number);
console.log(increase);
console.log(decrease);

increase.addEventListener("click", function () {
    let num = number.textContent;
    num = Number(num) + 1;
    number.textContent = num;
    console.log("increase가 선택되었습니다");
});
decrease.addEventListener("click", function () {
    let num = number.textContent;
    num = Number(num) - 1;
    number.textContent = num;
    console.log("decrease가 선택되었습니다");
});
});