//NOTE:
// Bài số 1
// Sum và Challenge
// 1. Viết hàm sum nhận số lượng tham số tùy ý và trả về tổng của chúng.
// Gợi ý:
// ● Dùng rest operator (...items) để gom mọi tham số thành một array.
// ● Dùng reduce để tính tổng.
// 2. Sửa hàm sum để nếu truyền vào là một array, cũng trả về tổng các phần tử.
// ● Hàm sum hiện tại:

function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0])) {
        items = items[0];
    }
    return items.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3);
sum([1, 2, 3])

//NOTE:
// Bài số 2
// Tạo object circle với property radius (đọc/ghi) và area
// (chỉ đọc)
// ● Tạo object circle (dùng object literal).
// ● Có property radius (đọc/ghi được).
// ● Có property area (chỉ đọc, tự động tính theo công thức diện tích hình tròn).
// ● Không được phép gán giá trị cho area từ ngoài.

const circle = {
    radius: 1,
    get area() { //dùng getter để chỉ đọc
        return Math.PI * this.radius * this.radius;
    },
    set area(value) {
    console.error("Cannot set area directly!");
  }
};
console.log(circle.radius); // 1
console.log(circle.area); // 3.14159...
circle.radius = 2;
console.log(circle.area); // 12.5663...

//NOTE:
// Bài số 3
// Xử lý lỗi khi đếm số lần xuất hiện phần tử trong mảng
// ● Viết hàm countOccurrences(array, searchElement) đếm số lần xuất hiện của
// searchElement trong array.
// ● Nếu đối số đầu tiên không phải mảng, phải throw exception.
// ● Khi sử dụng hàm, dùng try-catch để bắt và in lỗi.

function countOccurrences(array, searchElement) {
    if (!Array.isArray(array)) {
        throw new Error("Invalid array");
    }
    let count = 0;
    for (let element of array) {
        if (element === searchElement) {
            count++;
        }
    }return count;   
}


try {
  const result = countOccurrences([1, 2, 3, 1, 1], 1);
  console.log(result); // 3
} catch (error) {
  console.error(error.message);
}

const numbers = [1, 2, 3, 4, 1];
const count = countOccurrences(numbers, 1);
console.log(count); // 2
