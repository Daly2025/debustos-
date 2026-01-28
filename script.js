document.addEventListener('DOMContentLoaded', () => {
    // Fix hamburger menu toggle for mobile
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // Fix FAQ accordion panel expansion
    const accordionButtons = document.querySelectorAll('.accordion');
    accordionButtons.forEach(accordion => {
        accordion.addEventListener('click', function() {
            const panel = this.nextElementSibling;
            // Toggle panel max-height to show/hide content
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Lógica del Carrusel (si existe, de lo contrario, ignora esta sección)
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    
    // Función para actualizar el carrusel
    function updateCarousel() {
        carouselItems.forEach((item, index) => {
            item.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Manejo de botones
    if (prevBtn && nextBtn) { // Asegúrate de que los botones existan antes de añadir event listeners
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
            updateCarousel();
        });
        
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % carouselItems.length;
            updateCarousel();
        });
    }
    
    // Rotación automática cada 5 segundos
    if (carouselItems.length > 0) { // Solo si hay elementos en el carrusel
        setInterval(() => {
            currentIndex = (currentIndex + 1) % carouselItems.length;
            updateCarousel();
        }, 5000);
    }

    // Ajustar el carrusel si la ventana cambia de tamaño
    window.addEventListener('resize', updateCarousel);

    // Inicializar el carrusel
    if (carouselItems.length > 0) {
        updateCarousel();
    }

    // Lógica del Lightbox para la galería
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    let currentImageIndex = 0;

    // Array para almacenar las fuentes de las imágenes de la galería
    const imageSources = Array.from(galleryImages).map(img => img.src);

    galleryImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            currentImageIndex = index;
            lightboxImg.src = image.src;
            lightboxModal.classList.add('show');
        });
    });

    lightboxClose.addEventListener('click', () => {
        lightboxModal.classList.remove('show');
    });

    lightboxPrev.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + imageSources.length) % imageSources.length;
        lightboxImg.src = imageSources[currentImageIndex];
    });

    lightboxNext.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % imageSources.length;
        lightboxImg.src = imageSources[currentImageIndex];
    });

    // Cerrar lightbox al hacer clic fuera de la imagen
    lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) {
            lightboxModal.classList.remove('show');
        }
    });
});