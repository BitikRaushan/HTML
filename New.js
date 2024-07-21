let slideIndex = 0;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function prevSlide() {
    showSlides(slideIndex -= 1);
}

function showSlides(index) {
    let slides = document.getElementsByClassName("slide");
    if (index >= slides.length) { slideIndex = 0 }
    if (index < 0) { slideIndex = slides.length - 1 }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}
const letters = document.querySelectorAll('.letter');

letters.forEach((letter, index) => {
    setTimeout(() => {
        letter.style.opacity = 1;
        setTimeout(() => {
            letter.style.opacity = 0;
        }, 1000); // Letter stays visible for 1 second
    }, index * 500); // Each letter appears with a delay of 0.5 seconds
});
