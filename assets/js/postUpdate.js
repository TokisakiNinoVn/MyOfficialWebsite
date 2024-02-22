/* <a href="" target="_blank" Here.</a> */
/* <b></b> */
/* <br> */
/* <i></i> */
// style="height: 100px;"

const html_ = `<a href="https://www.pinterest.com/ninomemories/elysia/" target="_blank">🍀Here.</a>`
const iwe = `🪶`
const linkNino = "https://nino.is-a.dev/"
let infor_posts = [
    {
        tittle: "Happy New Year 2024! 🎉🎉🎉",
        description: "Wishing everyone a new year filled with happiness, good health and great success! Hope the best things will come to you and your family in this new year. Leave the burdens of the old year behind and welcome new opportunities, new experiences and new achievements in the coming new year.        Happy New Year, live strong, love and be patient in the face of all challenges. Enjoy every moment and make every day a memorable one! A peaceful and happy new year!",
        urlImg: "https://pbs.twimg.com/media/GECXTnRbYAALhui?format=jpg&name=large",
        dayPost: "2023/12/24" + iwe,
        countView: "0",
        linkSource: linkNino,
        hashTag: "#TokisakiNino, #Nino, #Elysia, #SimpForElysia, #HappyNewYear2024",
        viewCount: Math.floor(Math.random() * 2000),
    },
    {
        tittle: "Christmas wishes 2023!",
        description: "<b>Merry Christmas 2023!</b> During this holiday season, I hope you and your family will be filled with joy, happiness and warmth. Wishing everyone a holiday filled with laughter, friendship, and memorable memories. Wishing you a new year filled with health, luck and success. May your dreams come true, and every step in life brings happiness and success. This year, keep your heart warm and full of love. Share joy with those around you and create meaningful moments. Christmas is not only a time to receive gifts, but also an opportunity to share, do charity and beautify the world around us. Happy Christmas and New Year, hope all the best things will come to you and your family. Merry Christmas and Happy New Year 2024! 🎄🌟",
        urlImg: "https://pbs.twimg.com/media/GA4VuctasAA3j2U?format=jpg&name=large",
        dayPost: "2023/12/24" + iwe,
        countView: "0",
        linkSource: linkNino,
        hashTag: "#TokisakiNino, #Nino, #Elysia, #SimpForElysia, #MerryChristmas, #HappyNewYear, #2023",
        viewCount: Math.floor(Math.random() * 2000),
    },
    {
        tittle: "Yahoo!",
        description: "Test code view video on post",
        urlImg: "./assets/image/mwsi.mp4",
        dayPost: "2023/12/21" + iwe,
        countView: "0",
        linkSource: linkNino,
        hashTag: "#TokisakiNino, #Nino",
        viewCount: Math.floor(Math.random() * 2000),
    },
    {
        tittle: "🎀🎀🎀",
        description: "Elysia Album Pinterest. " + html_,
        urlImg: "https://pbs.twimg.com/media/F8T_VoEaEAAOqja?format=jpg&name=large",
        dayPost: "2023/12/17" + iwe,
        countView: "0",
        linkSource: linkNino,
        hashTag: "#TokisakiNino, #Nino, #Elysia",
        viewCount: Math.floor(Math.random() * 1000),
    },
    {
        tittle: "Tokisaki Nino",
        description: "Elysia is my waifu. I love her so much. I will post her pictures here. Simp for Elysia.",
        urlImg: "./assets/image/Elysia_.jpg",
        dayPost: "2023/12/17" + iwe,
        countView: "0",
        linkSource: linkNino,
        hashTag: "#TokisakiNino, #Nino, #Elysia",
        viewCount: Math.floor(Math.random() * 1000),
    },
    {
        tittle: "Tokisaki Nino",
        description: "This is my personal website. I will post my projects here. Hope you like it.",
        urlImg: "./assets/image/Ai.jpg",
        dayPost: "2023/12/17" + iwe,
        countView: "0",
        linkSource: linkNino,
        hashTag: "#TokisakiNino, #Nino, #Ai",
        viewCount: Math.floor(Math.random() * 3000),
    },
]

//Total Posts ___________________________________________________________________________
const countPost = infor_posts.length;
document.querySelector('.count_post').innerText = `[`+ countPost + "]";


const linkAvatar = "./assets/image/Avt.jpg"
function displayPosts(posts) {
    let mainPostScroll = document.getElementById('items_scroll');

    posts.forEach(post => {
        let postElement = document.createElement('div');
        postElement.innerHTML = `
            <div class="post_item">
                <div class="post_infor">
                    <img src="${linkAvatar}" alt="avt" class="post">
                    <div class="iuwyj">
                        <div class="post_name">Tokisaki Nino✏️</div>
                        <div class="post_time">${post.dayPost}</div>
                    </div>
                </div>
                <span class="tittle_post">${post.tittle}</span>
                <p class="content_post">${post.description}</p>
                <div class="post_img">
                    ` + imageOrmp3(post.urlImg) + `
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


// Ảnh hoặc video
function imageOrmp3(url) {
    const endUrl = '.mp4'
    if (url.includes(endUrl)) {
        return `
            <video class="video_post" controls>
                <source src="${url}" type="video/mp4">
            </video>`;
    } else {
        return `<img src = "${url}" alt = "avt">`;
    }
}

//Total view count ___________________________________________________________________________
let totalViewCount = 0;
for (let post of infor_posts) {
    totalViewCount += post.viewCount;
}
document.getElementById("totalViewCount").innerHTML = `[`+ totalViewCount + "]";
