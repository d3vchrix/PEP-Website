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


const element = document.getElementById('text-target');
  const words = element.innerText.split(' '); 
  const limit = 10; 

  if (words.length > limit) {
    element.innerText = words.slice(0, limit).join(' ') + '...';
  }
  const element2 = document.getElementById('text-target2');
  const words2 = element2.innerText.split(' '); 
  const limit2 = 10; 

  if (words2.length > limit2) {
    element2.innerText = words2.slice(0, limit2).join(' ') + '...';
  }
  
  const element3 = document.getElementById('text-target3');
  const words3 = element3.innerText.split(' '); 
  const limit3 = 10; 

  if (words3.length > limit3) {
    element3.innerText = words3.slice(0, limit3).join(' ') + '...';
  }