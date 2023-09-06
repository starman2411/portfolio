window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) 
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})


$(document).ready(function(){
    setTimeout(()=>{
    let title1 = document.getElementsByClassName("typed-out-first")[0];
    let title2 = document.getElementsByClassName("typed-out-second")[0];
    title1.classList.add('animation-title-1');
    title2.classList.add('animation-title-2');
}, 300);
});