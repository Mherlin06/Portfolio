// Starting page animation //
const logo = document.querySelector('.blog-logo');
const title = document.querySelector('.name span');
const contact = document.querySelector('#first-contact');
const medias = document.querySelectorAll('.logo-border');

window.addEventListener('load', () => {

    const introTimeline = gsap.timeline({paused: true});

    introTimeline
        .from(logo, 1, {transform: 'scale(0)', ease: 'power2.out'})
        .from(contact, 1, {opacity:0, ease: "power2.out"}, '-=1')
        .staggerFrom(medias, 1, {left: -200, ease: "power2.out"}, 0.3, '-=2');

    introTimeline.play();

});


const titleAnim = document.getElementById('txtAnim');

function writer(){

    new Typewriter( titleAnim, { deleteSpeed: 10})
    .changeDelay(20)
    .typeString("Hello, I'm Hugues, <br>")
    .pauseFor(300)
    .typeString('<span style="color: #f4ac9f">Amateur Photographer !</span>')
    .pauseFor(1000)
    .deleteChars(22)
    .typeString('<span style="color: #5c7457">Globe-trotter !</span>')
    .pauseFor(1000)
    .deleteChars(15)
    .typeString('<span style="color: #7a79af">Dev Full-stack !</span>')
    .start();    
}

setTimeout(writer,2000);
