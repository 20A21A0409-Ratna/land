const menuBtn=document.querySelector('.menu-btn');
const navMenu=document.querySelector('.nav-menu');
menuBtn.addEventListener('click',()=>{menuBtn.classList.toggle('open');navMenu.classList.toggle('show');});
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{e.preventDefault();document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});});});
