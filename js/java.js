window.onload = function() {
    // Анимация появления заголовка и подзаголовка на главной странице
    document.querySelector('.hero h1').classList.add('fade-in');
    setTimeout(() => {
        document.querySelector('.hero h2').classList.add('fade-in');
    }, 500);
};