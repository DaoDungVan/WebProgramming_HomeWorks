// lấy thẻ p
const p = document.getElementById("pid");

// khi bấm nút
document.getElementById("btn").onclick = function () {
  p.style.color = "blue";      // đổi màu chữ
  p.style.fontSize = "18pt";    // đổi cỡ chữ
};
