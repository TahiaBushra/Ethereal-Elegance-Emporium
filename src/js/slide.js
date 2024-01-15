// Slide
const slides = document.querySelector(".slides");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
let currIndex = 0;

const showSlide = (index) => {
    slides.style.transform = `translateX(-${index * 100}vw)`
};

const nextSlide = () => {
    if (currIndex < slides.children.length - 1) {
        currIndex++;
        showSlide(currIndex);
    } else {
        currIndex = 0;
        showSlide(currIndex);
    }
};

const prevSlide = () => {
    if (currIndex > 0) {
        currIndex--;
        showSlide(currIndex);
    } else {
        currIndex = slides.children.length - 1;
        showSlide(currIndex);
    }
};

btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide); 
