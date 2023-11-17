function kiemTra(a, b, c) {
    if (c === a + b) {
        console.log(c + " bằng tổng của " + a + " và " + b);
    } else {
        console.log(c + " không bằng tổng của " + a + " và " + b);
    }
}

let a = parseFloat(prompt("Nhập số a: "));
let b = parseFloat(prompt("Nhập số b: "));
let c = parseFloat(prompt("Nhập số c: "));
kiemTra(a, b, c);
