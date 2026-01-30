// lấy div box
const box = document.getElementById("box");

// hàm thay đổi border width
function setBorderWidth(width) {
  box.style.borderWidth = width + "px";
}

// nút 20px
document.getElementById("btn20").onclick = function () {
  setBorderWidth(20);
};

// nút 5px
document.getElementById("btn5").onclick = function () {
  setBorderWidth(5);
};
