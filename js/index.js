const spans = document.querySelectorAll('h1 span');
const button = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const media = document.querySelectorAll('.media-bubble');
const l1 = document.querySelector('.line-1');
const l2 = document.querySelector('.line-2');

window.addEventListener('load', () => {

    const timeline = gsap.timeline({paused: true});

    timeline
            .staggerFrom(spans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
            .staggerFrom(button, 1, {opacity:0, ease: "power2.out"}, 0.3, '-=1' )
            .from(l1, 1, {width: 0, ease: 'power2.out'}, '-=2')
            .from(l2, 1, {width: 0, ease: 'power2.out'}, '-=2')
            .from(logo, 0.4, {transform: 'scale(0)', ease: 'power2.out'}, '-=2')
            .staggerFrom(media, 1, {left: -200, ease: "power2.out"}, 0.3, '-=1');

    timeline.play();

})