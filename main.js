const closeNav = document.querySelector('.close-nav'),
      openNav = document.querySelector('.menu-toggle'),
      mobileNav = document.querySelector('.nav-mobile');
      mobileLinks = document.querySelectorAll('.nav-mobile a');
      nav = document.querySelector('.nav');

closeNav.addEventListener('click', () => {
  mobileNav.style.display = 'none';
});

openNav.addEventListener('click', () => {
  mobileNav.style.display = 'flex';
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.style.display = 'none';
  })
})

window.addEventListener('scroll', () => {
  if(window.pageYOffset >= 60){
    nav.classList.add('scrollNav');
  }else {
    nav.classList.remove('scrollNav');
  }
})
