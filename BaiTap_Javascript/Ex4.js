//NOTE:
// Bài tập 1:
// Viết một function tên là arrayFromRange, nhận vào 2 tham số min và max.
// Function này trả về một array chứa các số từ min đến max.
// Nếu max nhỏ hơn min thì trả về một array rỗng.

function arrayFromRange(min, max) {
    const result = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}

console.log(arrayFromRange(1, 5));

//NOTE:
// Bài tập 2:
// Viết một function tên là includes (tự cài đặt, không dùng method .includes() của
// array).
// Nhận vào 2 tham số: một array và một search element.
// Trả về true nếu tìm thấy search element trong array, ngược lại trả về false.

function includes(array, searchElement) {
    for (let element of array) {
        if (element === searchElement) {
            return true;
        }
    }
    return false;
}

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 6));


//NOTE:
// Bài tập 3:
// Viết function tên là except.
// Nhận vào 2 tham số:
// ● Một array gốc.
// ● Một array chứa các giá trị muốn loại bỏ khỏi array gốc.
// Function trả về một array mới gồm các phần tử không nằm trong array loại trừ.

function except(array, exclude) {
    const result = [];
    for (let element of array) {
        if (!includes(exclude, element)) {
            result.push(element);
        }
    }
    return result;
}
console.log(except([1, 2, 3, 4, 5], [2, 4]));


//NOTE:
// Bài tập 4:
// Viết function move để di chuyển một phần tử trong array sang một vị trí khác (theo
// offset).
// Tham số:
// ● array (array gốc)
// ● index (vị trí phần tử muốn di chuyển)
// ● offset (số bước muốn di chuyển, có thể dương hoặc âm)
// Nếu offset không hợp lệ (vượt ngoài phạm vi array), báo lỗi Invalid offset bằng
// console.error và return luôn (không trả về array).
// Hàm không làm thay đổi array gốc, trả về array mới với phần tử đã di chuyển.

function move(array, index, offset) {
    const position = index + offset;
    if (position < 0 || position >= array.length) {
        console.error("Invalid offset");
        return;
    }
    const output = [...array]; // copy mảng gốc
    const element = output.splice(index, 1)[0]; // lấy phần tử cần di chuyển
    output.splice(position, 0, element); // chèn vào vị trí mới
    return output;
}
console.log(move([1, 2, 3, 4, 5], 1, 2)); // [1, 3, 4, 2, 5]
console.log(move([1, 2, 3, 4, 5], 1, -1)); // [2, 1, 3, 4, 5]
console.log(move([1, 2, 3, 4, 5], 1, 5)); // Invalid offset



//NOTE:
// Bài tập 5:
// Viết function countOccurrences nhận vào:
// ● array
// ● searchElement
// Trả về số lần xuất hiện của searchElement trong array.

function countOccurrences(array, searchElement) {
    let count = 0;
    for (let element of array) {
        if (element === searchElement) {
            count++;
        }
    }
    return count;
}
console.log(countOccurrences([1, 2, 3, 4, 1, 1], 1)); // 3


//NOTE:
// Bài tập 6:
// Viết function getMax nhận vào một array. Trả về giá trị lớn nhất trong array. Nếu array
// rỗng thì trả về undefined. Thực hiện theo 2 cách:
// ● Dùng for loop
// ● Dùng reduce

function getMax(array) {
    if (array.length === 0) return undefined;
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

function getMax(array) {
    if (array.length === 0) return undefined;

    return array.reduce((max, current) => {
        return current > max ? current : max;
    });
}

getMax([3, 7, 2, 9, 5]);


//NOTE:
// Bài tập 7:
// Khởi tạo array movies:
// Yêu cầu:
// 1. Lấy các phim năm 2018 và rating > 4
// 2. Sắp xếp giảm dần theo rating
// 3. Chỉ lấy title của phim
// 4. Kết quả ra console: B, A

const movies = [
    { title: "A", year: 2018, rating: 4.5 },
    { title: "B", year: 2018, rating: 4.7 },
    { title: "C", year: 2017, rating: 3 },
    { title: "D", year: 2019, rating: 4.2 },
];

const result = movies
    .filter(movie => movie.year === 2018 && movie.rating > 4)
    .sort((a, b) => b.rating - a.rating)
    .map(movie => movie.title);
console.log(result); // ["B", "A"]