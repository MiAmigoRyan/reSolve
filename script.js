
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



// window.addEventListener('resize', resizeText);
// document.addEventListener('DOMContentLoaded', resizeText);

// function resizeText() {
//     var container = document.getElementById('about');
//     var text = container.querySelector('.about-text');
//     var containerWidth = container.offsetWidth;
    
//     var scale = 0.015; // Adjust scaling factor based on your needs
//     var newSize = containerWidth * scale;
    
//     text.style.fontSize = newSize + 'px';
// }

// resizeText();

// document.addEventListener("DOMContentLoaded", ()=>{
//     const sections= document.querySelector('section');

//     const revealSection= () => {
//         sections.forEach(section => {
//             const sectonTop= secton.getBoundingClientRect().top;
//             const visiablePoint= 150;

//             if(sectionTop<window.innerHeight - visiablePoint){
//                 section.classList.add('visible');

//             }else{
//                 section.classList.remove('visible')
//             }
//         });
//     };
//     window.addEventListener('scroll', revealSection);
// })