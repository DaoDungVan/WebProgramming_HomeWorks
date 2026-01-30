// lấy table
const table = document.getElementById("table0");

// thêm 1 dòng mới vào cuối bảng
const newRow = table.insertRow(-1);

// thêm 2 ô vào dòng mới
for (let i = 0; i < 2; i++) {
  const newCell = newRow.insertCell(-1);

  // nội dung ô
  const text = document.createTextNode(
    "Row " + newRow.rowIndex + " Cell " + i
  );

  newCell.appendChild(text);
}
