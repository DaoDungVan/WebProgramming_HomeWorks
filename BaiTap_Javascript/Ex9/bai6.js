function cStyles() {
  // lấy div d1
  const d1 = document.getElementById("d1");

  // lấy style thực tế của d1
  const styles = window.getComputedStyle(d1);

  // lấy các giá trị CSS
  const height = styles.getPropertyValue("height");
  const maxWidth = styles.getPropertyValue("max-width");
  const bgColor = styles.getPropertyValue("background-color");

  // hiển thị vào input
  document.getElementById("t1").value = height;
  document.getElementById("t2").value = maxWidth;
  document.getElementById("t3").value = bgColor;
}

// gắn sự kiện click cho button
document.getElementById("btn").onclick = cStyles;
