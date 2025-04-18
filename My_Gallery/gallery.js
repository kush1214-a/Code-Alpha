const list = document.querySelector('.list');
const items = document.querySelectorAll('.list .item');
const thumbnails = document.querySelectorAll('.thumbnail .item');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let index = 0;
const total = items.length;
let interval = null;

// Show slide by index
function showSlide(i) {
    list.style.transform = `translateX(-${i * 100}%)`;

    thumbnails.forEach((thumb, idx) => {
        thumb.classList.toggle('active', idx === i);
    });
}

// Auto-play logic
function startAutoPlay() {
    interval = setInterval(() => {
        index = (index + 1) % total;
        showSlide(index);
    }, 4000); // change every 4 seconds
}

// Stop auto-play on interaction
function stopAutoPlay() {
    clearInterval(interval);
}

// Next & Prev Button
nextBtn.onclick = () => {
    stopAutoPlay();
    index = (index + 1) % total;
    showSlide(index);
    startAutoPlay();
};

prevBtn.onclick = () => {
    stopAutoPlay();
    index = (index - 1 + total) % total;
    showSlide(index);
    startAutoPlay();
};

// Thumbnail click
thumbnails.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
        stopAutoPlay();
        index = i;
        showSlide(index);
        startAutoPlay();
    });
});

// Start auto-play on load
showSlide(index);
startAutoPlay();
