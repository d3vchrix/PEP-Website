const projectContainer = document.getElementById('project-container');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

leftArrow.addEventListener('click', function () {
    // Get the exact width of one project item
    const itemWidth = document.querySelector('.project-item').offsetWidth;
    // Scroll left by that width
    projectContainer.scrollBy({ left: -itemWidth, behavior: 'smooth' });
});

rightArrow.addEventListener('click', function () {
    const itemWidth = document.querySelector('.project-item').offsetWidth;
    // Scroll right by that width
    projectContainer.scrollBy({ left: itemWidth, behavior: 'smooth' });
});