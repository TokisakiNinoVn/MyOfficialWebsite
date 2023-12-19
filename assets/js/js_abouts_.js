const linkImg = [
    './assets/image/Elysia_916_1.jpg',
    './assets/image/Elysia_916_2.jpg',
    './assets/image/Elysia_916_3.jpg',
    './assets/image/Elysia_916_4.jpg',
    './assets/image/Elysia_916_5.jpg',
    './assets/image/Elysia_916_6.jpg',
    './assets/image/Elysia_916_7.jpg',
    './assets/image/Elysia_916_8.jpg',
    './assets/image/Elysia_916_9.jpg',
    './assets/image/Elysia_916_10.jpg',
    // './assets/image/Elysia_916_11.jpg',
    './assets/image/Elysia_916_12.jpg',
    './assets/image/Elysia_916_13.jpg',
];

function getRandomImageLink() {
    var randomIndex = Math.floor(Math.random() * linkImg.length);
    return linkImg[randomIndex];
}

var imgElement = document.querySelector('.elysia_paper');
var intervalTime = 3000; // Thay đổi hình ảnh sau mỗi 3 giây

function changeImage() {
    imgElement.style.opacity = 0; // Đặt opacity về 0 trước khi thay đổi ảnh
    setTimeout(function() {
        imgElement.src = getRandomImageLink();
        imgElement.style.opacity = 1; // Đặt opacity về 1 sau khi thay đổi ảnh
    }, 300); // Đợi 0.5 giây trước khi thay đổi ảnh để hiệu ứng fade có thể hoạt động
}

setInterval(changeImage, intervalTime);
