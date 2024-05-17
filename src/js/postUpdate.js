import { infor_posts } from './dataPostsUp.js';
//Total Posts ___________________________________________________________________________
const countPost = infor_posts.length;
document.querySelector('.count_post').innerText = `[`+ countPost + "]";


const linkAvatar = "./assets/images/Avt.jpg"
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
