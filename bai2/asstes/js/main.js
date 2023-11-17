function soLonHon(a, b) {
    if (a > b) {
        console.log(a + " là số lớn hơn");
    } else if (b > a) {
        console.log(b + " là số lớn hơn");
    } else {
        console.log("Hai số bằng nhau");
    }
}

let a = parseFloat(prompt("Nhập số thứ nhất: "));
let b = parseFloat(prompt("Nhập số thứ hai: "));
soLonHon(a, b);
