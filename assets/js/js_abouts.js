/* <a href="" target="_blank" Here.</a> */
const html_ = `<a href="https://www.pinterest.com/ninomemories/elysia/" target="_blank"> Here.</a>`
let infor_posts = [
    {
        tittle: "[...]",
        description: "Elysia",
        urlImg: "https://pbs.twimg.com/media/GA4VuctasAA3j2U?format=jpg&name=large",
        dayPost: "2023/12/17",
        countView: "0",
        linkSource: "https://nino.is-a.dev/",
        hashTag: "#TokisakiNino, #Nino, #Elysia, #SimpsForElysia",
        viewCount: Math.floor(Math.random() * 2000),
    },
    {
        tittle: "[...]",
        description: "Elysia Album Pinterest. >>" + html_,
        urlImg: "https://pbs.twimg.com/media/F8T_VoEaEAAOqja?format=jpg&name=large",
        dayPost: "2023/12/17",
        countView: "0",
        linkSource: "https://nino.is-a.dev/",
        hashTag: "#TokisakiNino, #Nino, #Elysia",
        viewCount: Math.floor(Math.random() * 10000),
    },
    {
        tittle: "Tokisaki Nino",
        description: "Elysia is my waifu. I love her so much. I will post her pictures here. Simp for Elysia.",
        urlImg: "./assets/image/Elysia_.jpg",
        dayPost: "2023/12/17",
        countView: "0",
        linkSource: "https://nino.is-a.dev/",
        hashTag: "#TokisakiNino, #Nino, #Elysia",
        viewCount: 2387,
    },
    {
        tittle: "Tokisaki Nino",
        description: "This is my personal website. I will post my projects here. Hope you like it.",
        urlImg: "./assets/image/Ai.jpg",
        dayPost: "2023/12/17",
        countView: "0",
        linkSource: "https://nino.is-a.dev/",
        hashTag: "#TokisakiNino, #Nino, #Ai",
        viewCount: 3948,
    },


]

const countPost = infor_posts.length;
document.querySelector('.count_post').innerText = countPost;
const linkAvatar = "./assets/image/Avt.jpg"

function displayPosts(posts) {
    let mainPostScroll = document.getElementById('main_post_scroll');

    posts.forEach(post => {
        let postElement = document.createElement('div');
        postElement.innerHTML = `
            <div class="post_item">
                <div class="post_infor">
                    <img src="${linkAvatar}" alt="avt" class="post">
                    <div class="iuwyj">
                        <div class="post_name">Tokisaki Nino</div>
                        <div class="post_time">${post.dayPost}</div>
                    </div>
                </div>
                <span class="tittle_post">${post.tittle}</span>
                <p class="content_post">${post.description}</p>
                <div class="post_img">
                    <img src="${post.urlImg}" alt="avt">
                </div>
                <span class="hashtag">${post.hashTag}</span>
                <div class="infor_post_">
                    <div class="view_post">
                        <ion-icon name="eye-outline"></ion-icon>
                        <span class="count_views">${post.viewCount}</span>
                    </div>
                    <a class="source_post" href="${post.linkSource}" target="_blank">
                        <ion-icon name="code-slash-outline"></ion-icon>
                    </a>
                </div>
            </div>
        `;
        mainPostScroll.appendChild(postElement);
    });
}
displayPosts(infor_posts);



function countDays() {
    // Ngày cố định (28/07/2021)
    const startDate = new Date('2004-02-11');

    // Ngày hiện tại
    const currentDate = new Date();

    // Tính số ngày chênh lệch
    const timeDiff = currentDate.getTime() - startDate.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

    // Hiển thị kết quả lên trang HTML
    document.querySelector('.views').innerText =  daysDiff
}
countDays();


// Radom color
const colorStatus = document.querySelector(".status_discord");

function generateRandomNumber() {
    var randomNumber_1 = Math.floor(Math.random() * 256);
    var randomNumber_2 = Math.floor(Math.random() * 256);
    var randomNumber_3 = Math.floor(Math.random() * 256);

    // Sử dụng anime.js để thực hiện hiệu ứng chuyển màu
    anime({
        targets: colorStatus,
        backgroundColor: `rgb(${randomNumber_1}, ${randomNumber_2}, ${randomNumber_3})`,
        duration: 1000, // Thời gian chuyển màu (ms)
        easing: 'easeInOutQuad' // Kiểu chuyển động
    });
}
setInterval(generateRandomNumber, 2000); // Chuyển màu sau mỗi 2 giây



















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
