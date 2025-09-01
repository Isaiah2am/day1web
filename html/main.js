// Dit script gaat ervan uit dat je een container hebt met de klasse 'image-grid'
// en img-elementen daarin. Het voegt een hover-effect toe om afbeeldingen te schalen.

document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        .image-grid img {
            transition: transform 0.3s ease;
            cursor: pointer;
        }
        .image-grid img:hover {
            transform: scale(1.04);
            z-index: 1;
        }
    `;
    document.head.appendChild(style);
});

document.querySelectorAll('.smooth-scroll').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#home') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});