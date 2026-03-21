
const projects = document.querySelector('.projects');
const projectItems = Array.from(document.querySelectorAll('.project-item'));

function getScrollStep() {
    if (!projectItems.length) return 260;
    const itemRect = projectItems[0].getBoundingClientRect();
    const style = window.getComputedStyle(projects);
    const gap = parseFloat(style.gap) || 16;
    return Math.round(itemRect.width + gap);
}

function getCurrentIndex() {
    const currentOffset = projects.scrollLeft;
    const step = getScrollStep();
    return Math.min(projectItems.length - 1, Math.max(0, Math.round(currentOffset / step)));
}

function scrollToIndex(index) {
    const target = Math.max(0, Math.min(index, projectItems.length - 1));
    projectItems[target].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
}

document.getElementById('left-arrow').addEventListener('click', function () {
    scrollToIndex(getCurrentIndex() - 1);
});

document.getElementById('right-arrow').addEventListener('click', function () {
    scrollToIndex(getCurrentIndex() + 1);
});

window.addEventListener('resize', function () {
    getScrollStep();
});
