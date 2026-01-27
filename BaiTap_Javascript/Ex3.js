//NOTE: 
// Bài 1:
// 1. Tạo một object tên address với 3 property (sử dụng Object Literal Style):
// ○ street
// ○ city
// ○ zipCode
// 2. Tạo một hàm showAddress nhận vào object address và hiển thị toàn bộ property cùng giá trị.

const address = {
    street: "123 Nguyễn Trãi",
    city: "Hanoi",
    zipCode: "100000"
};

function showAddress(address) {
    for (let key in address) {
        console.log(`${key}: ${address[key]}`);
    }
}

showAddress(address);

//NOTE:
// Bài 2:
// 1. Viết một Factory Function có tên createAddress
// a. Nhận vào 3 tham số: street, city, zipCode.
// b. Dùng camelCase (chữ đầu thường).
// c. Nếu key và value trùng tên, chỉ cần ghi một lần.
// d. Trả về một đối tượng với 3 thuộc tính tương ứng: street, city, zipCode.
// 2. Viết một Constructor Function có tên Address
// a. Sử dụng PascalCase cho tên hàm (chữ cái đầu mỗi từ viết hoa).
// b. Hàm nhận cùng 3 tham số: street, city, zipCode.
// c. Khởi tạo Object dùng từ khóa new
// d. Dùng từ khóa this để gán các giá trị cho đối tượng mới.

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const address1 = createAddress("123 Nguyễn Trãi", "Ho Chi Minh City", "700000");
const address2 = new Address("456 Lê Lợi", "Da Nang", "550000");

console.log(address1);
console.log(address2);

//NOTE:
// Bài 3: So sánh 2 object
// yêu cầu viết 2 functions như sau:
// 1. areSame(obj1, obj2): Kiểm tra 2 biến có cùng tham chiếu đến 1 object trong bộ nhớ không.
// 2. areEqual(obj1, obj2): Kiểm tra từng property, nếu giống nhau thì coi như "bằng nhau" về giá trị.
function Address2(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const addressA = new Address2("x","y","z");
const addressB = new Address2("x","y","z");

function areSame(addr1, addr2) {
    return addr1 === addr2;
}

function areEqual(addr1, addr2) {
    for (let key in addr1) {
        if (addr1[key] !== addr2[key]) {
            return false;
        }
    }
    return true;
}

console.log(areSame(addressA, addressB)); // false
console.log(areEqual(addressA, addressB)); // true

//NOTE: Bài 4:
// Tạo một object blog post với các thuộc tính:
// ● title: string
// ● body: string

// ● author: string
// ● views: number (số lượt xem)
// ● comments: array các object, mỗi object có:
// ○ author: string
// ○ body: string
// ● isLive: boolean

const blogPost = {
    title: "Học JavaScript cơ bản",
    body: "Đây là nội dung bài viết về JavaScript cơ bản.",
    author: "Thầy Trí",
    views: 1200,
    comments: [
        {
            author: "Tài",
            body: "Thầy dạy rất hay!"
        },
        {
            author: "Bình",
            body: "Mình học được nhiều điều."
        }
    ],
    isLive: true
};

console.log(blogPost);
console.log(blogPost.title);
console.log(blogPost.comments[0].author);

//NOTE: Bài 5:
// Viết constructor function tên Post (chữ P hoa). Có thể sử dụng lại Object Blog Post trên.
// Các tham số đầu vào: title, body, author.
// Properties views, comments, isLive không truyền vào mà phải gán giá trị mặc định:
// ● views: 0
// ● comments: mảng rỗng []
// ● isLive: false

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

const post1 = new Post("Học JavaScript nâng cao", "Nội dung về JS nâng cao.", "Thầy Trí");
console.log(post1);

//NOTE: Bài 6:
// Tạo một mảng gồm 3 object đại diện cho các mức giá (price range).
// Mỗi object có 4 thuộc tính:
// ● label: nhãn hiển thị (ví dụ: $, $$, $$$)
// ● price: nội dung khi hover chuột (ví dụ: "Inexpensive", "Moderate", "Expensive")
// ● min: giá tối thiểu cho 1 người
// ● max: giá tối đa cho 1 người

const priceRanges = [
    { label: "$", price: "Inexpensive", min: 0, max: 10 },
    { label: "$$", price: "Moderate", min: 11, max: 50 },
    { label: "$$$", price: "Expensive", min: 51, max: 200 }
];

console.log(priceRanges);
console.log(priceRanges[0].label);
console.log(priceRanges[1].price);
console.log(priceRanges[2].min);
console.log(priceRanges[2].max);