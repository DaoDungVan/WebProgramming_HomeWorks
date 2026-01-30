function showEventProperties(event) {
  // hiển thị type của event
  document.getElementById("eventType").innerText = event.type;

  const result = document.getElementById("result");

  // tạo table
  const table = document.createElement("table");

  // ===== THEAD =====
  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");

  const headers = ["#", "Property", "Value"];

  for (let h of headers) {
    const td = document.createElement("td");
    td.appendChild(document.createTextNode(h));
    headRow.appendChild(td);
  }

  thead.appendChild(headRow);
  table.appendChild(thead);

  // ===== TBODY =====
  const tbody = document.createElement("tbody");

  let i = 1;

  for (let key in event) {
    const row = document.createElement("tr");

    // gán class odd/even
    row.className = i % 2 === 0 ? "even" : "odd";

    // cột 1: số thứ tự
    const cell1 = document.createElement("td");
    cell1.appendChild(document.createTextNode(i));

    // cột 2: tên property
    const cell2 = document.createElement("td");
    cell2.appendChild(document.createTextNode(key));

    // cột 3: giá trị property
    const cell3 = document.createElement("td");
    let value = event[key];

    // nếu value là function thì chuyển sang string
    if (typeof value === "function") {
      value = value.toString();
    }

    cell3.appendChild(document.createTextNode(value));

    // gắn cell vào row
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);

    // gắn row vào tbody
    tbody.appendChild(row);

    i++;
  }

  table.appendChild(tbody);

  // xóa nội dung cũ (nếu có)
  result.innerHTML = "";

  // gắn table vào div result
  result.appendChild(table);
}

// gọi khi load trang
window.onload = function (event) {
  showEventProperties(event);
};
