// // BƯỚC 1: Tạo HtmlElement (class cha)

// function HtmlElement() {
//     this.click = function() {
//         console.log("Clicked");
//     };
// }

// HtmlElement.prototype.focus = function() {
//     console.log("Focused");
// }

// // BƯỚC 2: Tạo HtmlSelectElement (giống <select>)
// function HtmlSelectElement(items = []) {
//   // property items (mảng)
//   this.items = items;

//   // method thêm item
//   this.addItem = function (item) {
//     this.items.push(item);
//   };

//   // method xóa item
//   this.removeItem = function (item) {
//     this.items = this.items.filter(i => i !== item);
//   };
// } 

// // BƯỚC 3: Cho HtmlSelectElement kế thừa HtmlElement

// // kế thừa click() và focus()
// HtmlSelectElement.prototype =  new HtmlElement();
// // sửa lại constructor 
// HtmlSelectElement.prototype.constructor = HtmlSelectElement;

// // BƯỚC 4: Thêm method render() cho HtmlSelectElement
// HtmlSelectElement.prototype.render = function () {
//   let html = "<select>";

//   // duyệt từng item để tạo option
//   for (let item of this.items) {
//     html += `<option>${item}</option>`;
//   }

//   html += "</select>";
//   return html;
// };

// // BƯỚC 5: Tạo HtmlImageElement (giống <img>)
// function HtmlImageElement(src) {
//   // property src (link ảnh)
//   this.src = src;
// }

// // BƯỚC 6: Cho HtmlImageElement kế thừa HtmlElement
// HtmlImageElement.prototype = new HtmlElement();
// HtmlImageElement.prototype.constructor = HtmlImageElement;

// // BƯỚC 7: Thêm method render() cho HtmlImageElement
// HtmlImageElement.prototype.render = function () {
//   return `<img src="${this.src}" />`;
// };

// // BƯỚC 8: TEST THỬ
// // Test HtmlElement
// const el = new HtmlElement();
// el.click();  // clicked
// el.focus();  // focused


// // Test HtmlSelectElement
// const select = new HtmlSelectElement([1, 2, 3]);

// select.addItem(4);
// select.removeItem(2);

// console.log(select.items);     // [1, 3, 4]
// console.log(select.render());  // <select><option>1</option><option>3</option><option>4</option></select>

// // kế thừa từ HtmlElement
// select.click(); // clicked
// select.focus(); // focused


// // Test HtmlImageElement
// const img = new HtmlImageElement("https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

// console.log(img.render()); // <img src="https://example.com/cat.png" />

// // kế thừa từ HtmlElement
// img.click(); // clicked
// img.focus(); // focused


function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focused");
};

function HtmlSelectElement(items = []) {
  this.items = items;
}

HtmlSelectElement.prototype = new HtmlElement();

HtmlSelectElement.prototype.render = function () {
  let html = "<select>";

  for (let item of this.items) {
    html += `<option>${item}</option>`;
  }

  html += "</select>";
  return html;
};

function HtmlImageElement(src) {
  this.src = src;
}

HtmlImageElement.prototype = new HtmlElement();

HtmlImageElement.prototype.render = function () {
  return `<img src="${this.src}" width="200" />`;
};

// ===== HIỂN THỊ RA GIAO DIỆN =====
const select = new HtmlSelectElement([1, 2, 3]);
const img = new HtmlImageElement("https://picsum.photos/200");

document.body.innerHTML += select.render();
document.body.innerHTML += "<br>";
document.body.innerHTML += img.render();