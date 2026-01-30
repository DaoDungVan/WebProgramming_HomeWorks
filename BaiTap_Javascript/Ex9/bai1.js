// Lấy 3 ảnh bằng id
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");

// Tạo mảng chứa 3 ảnh
const images = [img1, img2, img3];

// Lấy div để hiển thị kết quả
const resultDiv = document.getElementById("result");

// Duyệt qua từng ảnh
images.forEach((img, index) => {
  const ul = document.createElement("ul");

  ul.innerHTML = `
    <li>Image ${index + 1}</li>
    <li>height: ${img.height}</li>
    <li>width: ${img.width}</li>
    <li>style.height: ${img.style.height}</li>
    <li>style.width: ${img.style.width}</li>
  `;

  resultDiv.appendChild(ul);
});
