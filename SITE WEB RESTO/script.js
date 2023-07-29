window.addEventListener("scroll", function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
})

function toggleMenu(){
    const toggleMenu = document.querySelector('.toggleMenu');
    const navbar = document.querySelector(".navbar");
    toggleMenu.classList.toggle('active');
    navbar.classList.toggle('active')
}