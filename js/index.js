// 顶部广告关闭
(function () {
    const header = document.querySelector('.header')

    const HeaderCloseIcon = document.querySelector('.header .close-icon')

    HeaderCloseIcon.addEventListener('click', function () {
        header.style.display = 'none';
    })
})();

