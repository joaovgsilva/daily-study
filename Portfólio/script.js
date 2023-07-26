// ===== MOBILE MENU =====
let menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-menu-active');
    this.classList.toggle('fa-xmark');
})