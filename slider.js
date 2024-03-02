window.addEventListener('load', function() {
    // Obtenemos todas las imágenes dentro del slider
    const sliderImages = document.querySelectorAll('.slider img');
    let currentSlide = 0; // Índice de la imagen actual

    // Función para mostrar la siguiente imagen
    function showNextSlide() {
        // Ocultamos la imagen actual
        sliderImages[currentSlide].classList.remove('active');
        // Incrementamos el índice de la imagen actual
        currentSlide = (currentSlide + 1) % sliderImages.length;
        // Mostramos la siguiente imagen
        sliderImages[currentSlide].classList.add('active');
    }

    // Mostramos la primera imagen
    sliderImages[currentSlide].classList.add('active');

    // Mostramos las imágenes en un bucle cada cierto intervalo de tiempo (por ejemplo, cada 3 segundos)
    setInterval(showNextSlide, 3000);
});