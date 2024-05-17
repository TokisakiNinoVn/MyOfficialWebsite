
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


//Like icon > play audio___________________________________________________________________________
document.addEventListener("DOMContentLoaded", function () {
    const likeBtn_Click = document.getElementById("like_like");
    const likeIcon_false = document.querySelector(".like_false");
    const likeIcon_true = document.querySelector(".like_true");
    const tool_music = document.querySelector(".tool_ely");

    const play_audio = document.querySelector(".play_icon");
    const pause_audio = document.querySelector(".pause_icon");
    const control_audio = document.querySelector(".control_play");

    const controlVolume = document.querySelector(".control_volume");
    const muteVolumeTrue = document.querySelector(".mute_volume-true");
    const muteVolumeFalse = document.querySelector(".mute_volume-false");

    const click_viewTool = document.querySelector(".weiurf");
    const toolStatus_hiden = document.querySelector(".hidden_control");
    const toolStatus_view = document.querySelector(".view_control");
    const toolStatus = document.querySelector(".qiouw");
    var tool_status = false;
    
    const true_audioLink = new Audio("./assets/audio/True.mp3");
    var like_status = false;
    var audio_status = false;
    var volume_status = false;


    const basicInformation_Click = document.getElementById("basic_status");
    const posts_Click = document.getElementById("post_status");
    const mainInformation = document.querySelector(".basic_infor");
    const mainPosts = document.querySelector(".posts");
    const bannerElysia = document.querySelector(".img_banner_elysia");
    
    //Display basic information or Posts ___________________________________________________________________________
    basicInformation_Click.addEventListener("click", function () {
        mainInformation.classList.add("active");
        basicInformation_Click.classList.add("active_");
        mainPosts.classList.remove("active");
        posts_Click.classList.remove("active_");
        if (like_status == true) {
            bannerElysia.classList.add("active");
        }
    });
    
    posts_Click.addEventListener("click", function () {
        mainInformation.classList.remove("active");
        basicInformation_Click.classList.remove("active_");
        mainPosts.classList.add("active");
        posts_Click.classList.add("active_");

        if(bannerElysia.classList.contains("active")){
            bannerElysia.classList.remove("active");
        }
    });
    
    likeBtn_Click.addEventListener("click", function () {
        if (likeIcon_false.classList.contains("active")) {
            likeIcon_false.classList.remove("active");
            likeIcon_true.classList.add("active");
            bannerElysia.classList.add("active");
            like_status = true;
            
            true_audioLink.play()
            audio_status = true;
            true_audioLink.volume = 0.1;
            tool_music.classList.add("tool_ely_active");
            play_audio.classList.remove("active");
            pause_audio.classList.add("active");
            volume_status = true;

            toolStatus.classList.add("tranform");
            tool_status = true;
            toolStatus_hiden.classList.add("active");
            toolStatus_view.classList.remove("active");
        } else {
            likeIcon_false.classList.add("active");
            likeIcon_true.classList.remove("active");
            bannerElysia.classList.remove("active");
            like_status = false;
            pauseAudio();
        }
    });
    

    control_audio.addEventListener("click", function () {
        if (audio_status == false) {
            playAudio();
            audio_status = true;
        } else {
            pauseAudio();
            audio_status = false;
        }
    });

    controlVolume.addEventListener("click", function () {
        if (volume_status == true) {
            true_audioLink.volume = 0;
            muteVolumeTrue.classList.add("active");
            muteVolumeFalse.classList.remove("active");
            volume_status = false;
        } else {
            true_audioLink.volume = 0.1;
            muteVolumeTrue.classList.remove("active");
            muteVolumeFalse.classList.add("active");
            volume_status = true;
        }
    });

    click_viewTool.addEventListener("click", function () {
        if (tool_status == false) {
            toolStatus_hiden.classList.add("active");
            toolStatus_view.classList.remove("active");
            toolStatus.classList.add("tranform");
            tool_status = true;
        } else {
            toolStatus_hiden.classList.remove("active");
            toolStatus_view.classList.add("active");
            toolStatus.classList.remove("tranform");
            tool_status = false;
        }
    })

    function playAudio() {
        true_audioLink.play();
        true_audioLink.volume = 0.1;
        play_audio.classList.remove("active");
        pause_audio.classList.add("active");
    }

    function pauseAudio() {
        true_audioLink.pause();
        play_audio.classList.add("active");
        pause_audio.classList.remove("active");
    }
});
