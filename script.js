const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) => {
    // 核心改进:不管点到谁，都向上找到最近的那个 class 为 rating 的 div
    const ratingDiv = e.target.closest('.rating');

    // 如果点的地方不在 .rating 内部，就什么都不做
    if (!ratingDiv) return;

    // 1. 切换样式
    removeActive();
    ratingDiv.classList.add('active');

    // 2. 获取评价内容
    selectedRating = ratingDiv.querySelector('small').innerHTML;
});

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}