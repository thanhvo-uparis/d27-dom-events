const slidesList = document.querySelectorAll(".slide");
const btnList = document.querySelectorAll(".btn-action");
const pagiDot =document.querySelector(".pagination");
const dotsList = document.querySelectorAll(".dot");
const inner = document.querySelector(".inner");
let currentSlide = 0;
let autoplayInterval = null;

function uploadSlide(index) {
    dotsList.forEach(slide => slide.classList.remove("active"));
    dotsList[index].classList.add("active");
    slidesList.forEach(slide => slide.classList.remove("active"));
    slidesList[index].classList.add("active");
}

if (slidesList.length > 0 && dotsList.length > 0) {
    uploadSlide(currentSlide);
}

btnList.forEach(btn => {
    btn.addEventListener("click", function() {
        if (btn.classList.contains("next")) {
            currentSlide = (currentSlide + 1) % slidesList.length;
            uploadSlide(currentSlide);
        } else if (btn.classList.contains("prev")) {
            currentSlide = ((currentSlide - 1 + slidesList.length) % slidesList.length);
            uploadSlide(currentSlide);
        }
    }) 
});

dotsList.forEach((dot, index) => {
    dot.addEventListener("click", function(event) {
        const dotSelected = event.target.closest(".dot");
        if (dotSelected) {
            currentSlide = index;
            uploadSlide(index);
        }
    })
})

function nextSlide() {
        currentSlide = (currentSlide + 1) % slidesList.length;
        uploadSlide(currentSlide);
}

function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 3000);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

startAutoplay();
inner.addEventListener("mouseenter", stopAutoplay);
inner.addEventListener("mouseleave", startAutoplay);