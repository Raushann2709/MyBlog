document.addEventListener('DOMContentLoaded', function() {
    // Add tilt effect to cards
    const cards = document.querySelectorAll('.itinerary-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 15;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 15;
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateY(0) rotateX(0)';
        });
    });
    
    // Parallax effect for header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const scrollPosition = window.pageYOffset;
        header.style.transform = 'translateZ(' + (scrollPosition/10) + 'px)';
    });
});