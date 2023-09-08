document.getElementById('mode-link').onclick = toggleDarkMode;
function toggleDarkMode() {
  var body = document.querySelector('body');
  body.classList.toggle('light-mode');
}

function toggleMenu() {
    var menuToggle = document.querySelector('.menu-toggle');
    var menuNavbarRight = document.querySelector('.menu-navbar-right');
    menuToggle.classList.toggle('active');
    menuNavbarRight.classList.toggle('open');
}



// Thêm sự kiện click vào body
document.body.addEventListener('click', function(event) {
    var menuNavbarRight = document.querySelector('.menu-navbar-right');
    var menuToggle = document.querySelector('.menu-toggle');
    var listS = document.querySelector('.list');
    var liS = document.querySelector('.limenuRight');

    if (menuNavbarRight.contains(event.target) || liS.contains(event.target)) {
        menuNavbarRight.classList.remove('open');
        menuToggle.classList.remove('active');
    }
});


// ____________________________________ [ Dem so nguoi vo trang ca nhan ]____________________________________________________
function updateVisitCount(count) {
    document.getElementById('visitCount').textContent = count;
}

// Hàm để lấy số lượt truy cập từ Local Storage
function getVisitCount() {
    const count = localStorage.getItem('visitCount');
    return count ? parseInt(count) : 0;
}

// Hàm để tăng số lượt truy cập và cập nhật lại trong Local Storage
function increaseVisitCount() {
    const currentCount = getVisitCount();
    const newCount = currentCount + 1;
    localStorage.setItem('visitCount', newCount);
    updateVisitCount(newCount);
}

// Khi trang được tải lên, ta sẽ cập nhật số lượt truy cập lên giao diện
document.addEventListener('DOMContentLoaded', function() {
    const currentCount = getVisitCount();
    updateVisitCount(currentCount);
});
increaseVisitCount();



// Ban F12
// document.addEventListener("contextmenu", function(e) {
//     e.preventDefault();
// });
// document.addEventListener("keydown", function(e) {
//     if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) {
//         e.preventDefault();
//     }
// });

// document.addEventListener('contextmenu', function(event) {
//     event.preventDefault();
//     alert('>> Tokisaki Nino: "Say no to "Inspect" website!" :))');
// });

// window.addEventListener('keydown', function(event) {
//     if (event.key === 'F12' || event.keyCode === 123) {
//     //   alert('Không được phép truy cập mã nguồn trang web!');
//       alert('Access to website source code is not allowed!');

//       event.preventDefault();
//     }
//   });

  



//   // Hàm để lưu trạng thái chế độ vào localStorage
// function saveModeToLocalStorage(mode) {
//     localStorage.setItem('siteMode', mode);
//   }
  
//   // Hàm để đọc trạng thái chế độ từ localStorage
//   function loadModeFromLocalStorage() {
//     const savedMode = localStorage.getItem('siteMode');
//     return savedMode || 'dark-mode'; // Nếu không có dữ liệu, mặc định sử dụng dark mode
//   }
  
//   // Hàm để thiết lập trạng thái chế độ tùy thuộc vào dữ liệu đã lưu
//   function setSiteMode() {
//     const currentMode = loadModeFromLocalStorage();
    
//     // Ứng dụng chế độ đã lưu vào trang web
//     if (currentMode === 'light-mode') {
//       // Áp dụng chế độ light mode vào trang web
//       document.body.classList.remove('dark-mode'); // Đảm bảo dark mode bị tắt
//       // Thêm lớp hoặc các thiết lập khác cho light mode
//     } else {
//       // Áp dụng chế độ dark mode vào trang web
//       document.body.classList.add('dark-mode'); // Đảm bảo dark mode được bật
//       // Thêm lớp hoặc các thiết lập khác cho dark mode
//     }
//   }
  
//   // Gọi hàm để thiết lập trạng thái chế độ khi trang web được tải
//   setSiteMode();
  