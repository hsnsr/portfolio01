document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo h1');
    logo.addEventListener('click', () => {
        alert('カフェへようこそ！');
    });
});