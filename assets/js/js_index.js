document.getElementById('mode-link').onclick = toggleDarkMode;
function toggleDarkMode() {
  var body = document.querySelector('body');
  body.classList.toggle('light-mode');
//   body.id.toggle('light-mode');
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

  




// Lấy thẻ body
var body = document.body;

// Function để thêm hoặc xóa lớp CSS "light-mode"
function toggleLightMode() {
  body.classList.toggle('light-mode');
  
  // Kiểm tra xem lớp đã được thêm vào hay không
  var hasLightMode = body.classList.contains('light-mode');
  
  // Nếu có lớp "light-mode", thêm id "light-mode" vào body, ngược lại xóa id "light-mode"
  if (hasLightMode) {
    body.id = 'light-mode';
  } else {
    body.removeAttribute('id');
  }
}


// Gắn sự kiện click cho nút
var button = document.getElementById('toggle-button');
button.addEventListener('click', toggleLightMode);


// Hàm để lưu trạng thái chế độ vào Local Storage
function saveLightModeState(isLightMode) {
    localStorage.setItem('lightMode', isLightMode);
}

// Hàm để đọc trạng thái chế độ từ Local Storage
function getLightModeState() {
    return localStorage.getItem('lightMode') === 'true';
}

// Hàm khởi tạo trạng thái ban đầu
function initializeLightMode() {
    var body = document.body;
    var lightModeClass = "light-mode";
    var isLightMode = getLightModeState();

    // Nếu đã lưu trạng thái chế độ sáng, áp dụng nó cho trang
    if (isLightMode) {
        body.classList.add(lightModeClass);
        body.id = "light-mode";
    }
}

// Hàm chuyển đổi chế độ sáng/tối
function toggleLightMode() {
    var body = document.body;
    var lightModeClass = "light-mode";
    var isLightMode = getLightModeState();

    // Đảo ngược trạng thái và lưu nó vào Local Storage
    isLightMode = !isLightMode;
    saveLightModeState(isLightMode);

    // Áp dụng trạng thái chế độ sáng/tối cho trang
    if (isLightMode) {
        body.classList.add(lightModeClass);
        body.id = "light-mode";
    } else {
        body.classList.remove(lightModeClass);
        body.removeAttribute("id");
    }
}

// Gọi hàm khởi tạo để thiết lập trạng thái ban đầu
initializeLightMode();


  