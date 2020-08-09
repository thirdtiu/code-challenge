$(document).foundation();

$(document).ready(function() {
    lottie.loadAnimation({
        container: document.getElementById('hero-banner-wave'), // the dom element that will contain the
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'data-color-2.json' // the path to the animation json
    });
})