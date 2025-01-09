// document.addEventListener("DOMContentLoaded", function(){
//     document.getElementById("burger").addEventListener("click", function(){
//         document.querySelector(".bgHeader").classList.toggle("open")
//     })
// })

const burger = document.getElementById('burger');
const menu = document.getElementById('burgermenu');

burger.addEventListener('click', () => {
    menu.classList.toggle('open');
});