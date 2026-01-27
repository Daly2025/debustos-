document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Lógica del Carrusel
    const carouselItems = document.querySelector('.carousel-items');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // Solo inicializar el carrusel si los elementos existen en la página
    if (carouselItems && prevBtn && nextBtn) {
        const items = document.querySelectorAll('.carousel-item');
        const totalItems = items.length;
        let currentIndex = 0;

        function updateCarousel() {
            const itemWidth = items[0].clientWidth;
            carouselItems.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
        }

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarousel();
        });

        // Carrusel automático
        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        }, 5000); // Cambia de imagen cada 5 segundos

        // Ajustar el carrusel si la ventana cambia de tamaño
        window.addEventListener('resize', updateCarousel);

        // Inicializar el carrusel
        updateCarousel();
    }
});