const inquiry=document.querySelector('.menu-button.inquiry');
const shopping=document.querySelector('.menu-button.shopping');

console.log(inquiry);
console.log(shopping);
function notyet(){
    alert('준비중입니다');
}

inquiry.addEventListener('click',notyet);

shopping.addEventListener('click',notyet);
