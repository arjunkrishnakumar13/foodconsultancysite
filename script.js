// script.js - small UI behaviors: hero carousel, mobile nav toggle
document.addEventListener('DOMContentLoaded', function(){
  // hero carousel
  const slides = document.querySelectorAll('.hero .slide');
  let cur = 0;
  if(slides.length>1){
    slides[cur].classList.add('active');
    setInterval(()=>{
      slides[cur].classList.remove('active');
      cur = (cur+1)%slides.length;
      slides[cur].classList.add('active');
    },4000);
  }

  // mobile nav toggle
  const btn = document.querySelector('#menuBtn');
  const navLinks = document.querySelector('.nav-links');
  if(btn && navLinks){
    btn.addEventListener('click',()=>{
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.gap = '8px';
      navLinks.style.background = '#fff';
      navLinks.style.padding = '8px';
      navLinks.style.borderRadius = '8px';
      navLinks.style.boxShadow = '0 8px 26px rgba(0,0,0,.08)';
    })
  }
});
