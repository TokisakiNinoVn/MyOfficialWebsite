// Ban F12
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});
document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) {
        e.preventDefault();
    }
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    //alert('>> Tokisaki Nino: "Say no to "Inspect" website!" ');
});

window.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || event.keyCode === 123) {
      //alert('Access to website source code is not allowed!');
    event.preventDefault();
    }
});
