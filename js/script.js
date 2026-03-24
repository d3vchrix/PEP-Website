const projectContainer = document.getElementById('project-container');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

leftArrow.addEventListener('click', function () {
    const itemWidth = document.querySelector('.project-item').offsetWidth;
    projectContainer.scrollBy({ left: -itemWidth, behavior: 'smooth' });
});

rightArrow.addEventListener('click', function () {
    const itemWidth = document.querySelector('.project-item').offsetWidth;
    projectContainer.scrollBy({ left: itemWidth, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }
    });
    scrollTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});