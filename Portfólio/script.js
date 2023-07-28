// ===== MOBILE MENU =====
let menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-menu-active');
    this.classList.toggle('fa-xmark');
})

// ===== TYPING EFFECT =====
let typed = new Typed('.auto-input',{
    strings: ['Dev Front-End', 'Freelancer', 'Web Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})
