document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-in');
    faders.forEach((el, index) => {
        setTimeout(() => el.style.opacity = 1, index * 300); // Delay progressivo
    });
});


