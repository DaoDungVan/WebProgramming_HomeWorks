// hàm chặn sự kiện
function stopEvent(event) {
  // đổi nội dung ô c2
  document.getElementById("c2").innerText = "hello";

  // chặn sự kiện lan lên cha
  event.stopPropagation();

  console.log("event propagation halted - đã chặn sự kiện!");
}

// click vào dòng tbl1
document.getElementById("tbl1").addEventListener("click", stopEvent);

// click vào table
document.getElementById("t-daddy").addEventListener("click", function () {
  console.log("t-daddy clicked");
});
