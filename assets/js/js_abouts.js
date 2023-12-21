
function countDays() {
    const startDate = new Date('2004-02-11');
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - startDate.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    //document.querySelector('.views').innerText =  daysDiff + " days";
}
countDays();

// Radom color ___________________________________________________________________________
const colorStatus = document.querySelector(".status_discord");
function generateRandomNumber() {
    var color_1 = Math.floor(Math.random() * 256);
    var color_2 = Math.floor(Math.random() * 256);
    var color_3 = Math.floor(Math.random() * 256);

    // Sử dụng anime.js để thực hiện hiệu ứng chuyển màu
    anime({
        targets: colorStatus,
        backgroundColor: `rgb(${color_1}, ${color_2}, ${color_3})`,
        duration: 1000, // Thời gian chuyển màu (ms)
        easing: 'easeInOutQuad' // Kiểu chuyển động
    });
}
setInterval(generateRandomNumber, 2000); // Chuyển màu sau mỗi 2 giây




//Display basic information or Posts ___________________________________________________________________________
const basicInformation_Click = document.getElementById("basic_status");
const posts_Click = document.getElementById("post_status");
const mainInformation = document.querySelector(".basic_infor");
const mainPosts = document.querySelector(".posts");
const bannerElysia = document.querySelector(".img_banner_elysia");

document.addEventListener("DOMContentLoaded", function () { 
    // const likeBtn_Click = document.getElementById("like_like");
    // likeBtn_Click.addEventListener("click", function () {
    //     bannerElysia.classList.toggle("active");
    // });

    basicInformation_Click.addEventListener("click", function () {
        mainInformation.classList.add("active");
        basicInformation_Click.classList.add("active_");
        mainPosts.classList.remove("active");
        posts_Click.classList.remove("active_");
    });
    
    posts_Click.addEventListener("click", function () {
        mainInformation.classList.remove("active");
        basicInformation_Click.classList.remove("active_");
        mainPosts.classList.add("active");
        posts_Click.classList.add("active_");
    });
});




// async function fetchDiscordStatus() {
//     try {
//         const response = await axios.get(
//             `https://api.lanyard.rest/v1/users/${userID}`
//             // `https://api.lanyard.rest/v1/users/906037896295878706`
//         );

//         const { data } = response.data;
//         const { discord_status, activities } = data;

//         let backgroundColor;
//         switch (discord_status) {
//             case "online":
//                 backgroundColor = "#00ff1e";
//                 break;
//             case "idle":
//                 backgroundColor = "#f5c904";
//                 break;
//             case "dnd":
//                 backgroundColor = "#f50408";
//                 break;
//             case "offline":
//                 backgroundColor = "rgb(103, 107, 103)";
//                 break;
//             default:
//                 backgroundColor = "rgb(225, 0, 255)";
//                 break;
//         }

//         colorStatus.style.backgroundColor = backgroundColor;
//     } catch (error) {
//         console.error("Unable to get Discord status:", error);
//     }
// }

// Gọi hàm để lấy và cập nhật trạng thái Discord
// fetchDiscordStatus();
// setInterval(fetchDiscordStatus, 1000);  // Interval là 1 giây, không cần gọi mỗi giây
