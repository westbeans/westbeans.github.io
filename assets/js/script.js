document.addEventListener('DOMContentLoaded', function() {
    var carousel = document.getElementById('carouselExampleFade');
    var bsCarousel = new bootstrap.Carousel(carousel, {
        interval: 3000,
        wrap: true
    });
    
    // Force the carousel to cycle continuously
    setInterval(function() {
        bsCarousel.next();
    }, 3000);

    // Check if cookies were already accepted
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        document.getElementById('cookieConsent').style.display = 'none';
    }
});

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookieConsent').style.display = 'none';
}

function declineCookies() {
    localStorage.setItem('cookiesAccepted', 'false');
    document.getElementById('cookieConsent').style.display = 'none';
}
