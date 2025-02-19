let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100 + '%';
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset})`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// 自动播放功能（可选）
setInterval(nextSlide, 3000);

// 页面加载完成后显示第一张图片
window.onload = function() {
    showSlide(currentIndex);
};