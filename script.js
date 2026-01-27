document.addEventListener('DOMContentLoaded',()=>{
    const hamburgerMenu=document.querySelector('.hamburger-menu');
    const navLinks=document.querySelector('.nav-links');
    hamburgerMenu.addEventListener('click',()=>navLinks.classList.toggle('active'));
    document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>{if(navLinks.classList.contains('active'))navLinks.classList.remove('active');}));
});