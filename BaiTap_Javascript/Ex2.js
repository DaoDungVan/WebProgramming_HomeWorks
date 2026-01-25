// NOTE: 1. Write a function that takes 2 numbers and returns the maximum of the two.
// (Viết một hàm nhận vào hai số và trả về số lớn hơn, Gọi hàm với nhiều đối số khác
// nhau để kiểm tra.).

function maxNum(a,b) {
    return a > b ? a : b;
}

console.log(maxNum(10,5));
console.log(maxNum(-1,5));

// NOTE: 2. Viết hàm isLandscape(width, height) trả về true nếu ảnh là landscape (ngang: width > height), ngược lại trả về false.

function isLandscape(width,height) {
    return width > height ? true : false;
}

console.log(isLandscape(10,5));
console.log(isLandscape(5,10));

// NOTE: 3. Viết hàm zzBuzz(input):
// a. Nếu số chia hết cho 3: trả về "Fizz"
// b. Nếu số chia hết cho 5: trả về "Buzz"
// c. Nếu số chia hết cho cả 3 và 5: trả về "FizzBuzz"
// d. Nếu không chia hết cho 3 hay 5: trả về chính số đó
// e. Nếu không phải số: trả về "Not a number"

function zzBuzz(input) {
    if(typeof input !== "number") return "Not a number";
    return input % 15 === 0 ? "FizzBuzz" : input % 3 === 0 ? "Fizz" : input % 5 === 0 ? "Buzz" : input;
}

console.log(zzBuzz(3));
console.log(zzBuzz(5));
console.log(zzBuzz(45));
console.log(zzBuzz(7));
console.log(zzBuzz("abc"));


//NOTE: 4. Viết hàm checkSpeed(speed) kiểm tra tốc độ xe:
// ● Giới hạn tốc độ: 70 km/h.
// ● Dưới hoặc bằng giới hạn: Hiện “OK”.
// ● Mỗi 5 km/h vượt quá giới hạn: Cộng 1 điểm.
// ● Trên 12 điểm: Hiện “License suspended”.
// ● Dùng Math.floor để làm tròn số điểm xuống.
// ● Tránh sử dụng “magic number” trong code.

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPoint = 5;
    const maxPoint = 12;
    if(speed <= speedLimit) return "OK";
    const points = Math.floor((speed - speedLimit)/kmPoint);
    if(points > maxPoint) return "License suspended";

    return "Point: " + points;
}

console.log(checkSpeed(70));
console.log(checkSpeed(75));
console.log(checkSpeed(80));
console.log(checkSpeed(130));


// NOTE: 5. Viết hàm showNumbers(limit):
// a. In ra tất cả các số từ 0 đến limit.
// b. Mỗi số, nếu là even thì in kèm label "EVEN", nếu là odd thì in "ODD".

function showNumbers(limit) {
    for(let i = 0; i <= limit; i++){
        if(i % 2 == 0) console.log( i + " EVEN");
        else console.log( i + " ODD");
    }
}

showNumbers(5);

//NOTE: 6. Viết hàm countTruthy(array):
// a. Nhận vào một mảng.
// b. Trả về số lượng phần tử truthy trong mảng đó.

// false, 0, "", null, undefined, NaN là falsy
function countTruthy(array) {
    let count = 0;

    for (let value of array) {
        if (value) { // nếu là truthy
            count++;
        }
    }

    return count;
}

console.log(countTruthy([0, 1, false, 2, "", 3, null, "hello"]));


//NOTE: 7. Viết hàm showProperties(object):
// a. Nhận vào một object.
// b. Hiển thị ra tất cả các thuộc tính của object mà giá trị là kiểu string.
function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "string") {
            console.log(key + ": " + obj[key]);
        }
    }
}

const person = {
    name: "John",
    age: 25,
    city: "Hanoi",
    isStudent: false,
    email: "john@gmail.com"
};

showProperties(person);

//NOTE: 8. Viết hàm calculateGrade(marks): 
// a. Tính điểm trung bình (average) của một mảng điểm. 
// b. Xác định và trả về xếp loại (grade) theo danh sách sau: 
// i. 0–59: "F" 
// ii. 60–69: "D" 
// iii. 70–79: "C" 
// iv. 80–89: "B" 
// v. 90–100: "A"

function calculateGrade(marks) {
    let sum = 0;

    for (let mark of marks) {
        sum += mark;
    }

    let avg = sum / marks.length;

    return avg < 60 ? "F" :
           avg < 70 ? "D" :
           avg < 80 ? "C" :
           avg < 90 ? "B" : "A";
}

console.log(calculateGrade([80, 90, 100])); 
console.log(calculateGrade([70, 75, 72]));  
console.log(calculateGrade([60, 65, 68]));  
console.log(calculateGrade([50, 55, 40]));

//9. Viết hàm showStars(rows):
// a. In ra số hàng bằng giá trị rows.
// b. Ở mỗi hàng, số dấu * đúng bằng số thứ tự hàng đó.
// i. Ví dụ, showStars(5) sẽ in:
// 1. *
// 2. **
// 3. ***
// 4. ****
// 5. *****

function showStars(rows) {
    for (let i = 1; i <= rows; i++) {
        let stars = "";
        for (let j = 1; j <= i; j++) {
            stars += "*";
        }
        console.log(stars);
    }
}

showStars(5);

//NOTE: 10. Viết hàm showPrimes(limit):
// a. In ra tất cả các số nguyên tố từ 2 đến limit.
// b. Số nguyên tố là số lớn hơn 1, chỉ chia hết cho 1 và chính nó.

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {
        if (isPrime(number)) {
            console.log(number);
        }
    }
}


function isPrime(number) {
    if (number < 2) return false;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

showPrimes(20);