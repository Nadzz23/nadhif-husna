document.addEventListener("DOMContentLoaded", function () {
    const parallaxSections = document.querySelectorAll('.parallax');

    window.addEventListener('scroll', function () {
        let scrollPosition = window.pageYOffset;
        parallaxSections.forEach(section => {
            let speed = section.dataset.speed ? parseFloat(section.dataset.speed) : 0.5;
            let offset = scrollPosition * speed;
            section.style.backgroundPositionY = `calc(100% + ${offset}px)`;
        });
    });
});
